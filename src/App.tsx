import React, {useEffect} from "react";
import './App.css';
import Preloader from "./components/common/Preloader.tsx";
import Header from "./components/common/Header.tsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import BottomNav from "./components/common/BottomNav.tsx";
import {Box} from "@mui/material";
import LoginPage from "./pages/LoginPage";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {setIsMobileDeviceAction} from "./store/app-slice";
import MenuPage from "./pages/MenuPage";
import {selectIsInitialedApp, selectSnackbarError} from "./selectors/app-selectors.ts";
import SnackbarError from "./components/common/SnackbarError.tsx";
import {SnackbarWrapper} from "./hoc/SnackbarWrapper.tsx";
import WithAuthRedirect from "./hoc/WithAuthRedirect.tsx";
import WithSuspense from "./hoc/WithSuspense.tsx";
import ProtectedRoute from "./hoc/ProtectedRoute.tsx";
import RestaurantsPage from "./pages/RestaurantsPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";

const isMobileDevice = (): boolean => {
	const userAgent = navigator.userAgent.toLowerCase();
	return /android|iPhone|iPad|iPod/i.test(userAgent);
};

const App: React.FC = () => {
	const snackbarError = useAppSelector(selectSnackbarError);
	const dispatch = useAppDispatch();
	const initialized = useAppSelector(selectIsInitialedApp);
	const isMobile = isMobileDevice();

	useEffect(() => {
		dispatch(setIsMobileDeviceAction());
	}, [dispatch]);

	if (!initialized) {
		return <Preloader/>;
	}

	return (
		<>
			<Header/>

			<Box sx={{paddingBottom: 8}}>
				<SnackbarWrapper>
					<Routes>
						<Route path="/" element={<HomePage/>}/>
						<Route path='/login/*' element={<WithAuthRedirect><LoginPage/></WithAuthRedirect>}/>
						<Route path='/register/*' element={<WithAuthRedirect><RegistrationPage/></WithAuthRedirect>}/>

						<Route path="/restaurants" element={<RestaurantsPage/>}/>
						<Route path="/menu" element={<MenuPage/>}/>
						<Route path="/cart" element={
							<ProtectedRoute element={
								<WithSuspense Component={ProfilePage}/>}/>}/>

					</Routes>
				</SnackbarWrapper>
			</Box>

			{snackbarError && <SnackbarError snackbarError={snackbarError}/>}
			{isMobile && <BottomNav/>}
		</>
	);
};

export default App;