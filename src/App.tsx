import React, {useEffect} from "react";
import './App.css';
import Preloader from "./components/common/Preloader";
import Header from "./components/common/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import BottomNav from "./components/common/BottomNav";
import {Box} from "@mui/material";
import LoginPage from "./pages/LoginPage";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {setIsMobileDeviceAction} from "./store/app-slice";
import MenuPage from "./pages/MenuPage";
import {selectSnackbarMessage, selectIsInitialedApp, selectSnackbarError} from "./selectors/app-selectors";
import SnackbarError from "./components/common/SnackbarError";
import {SnackbarWrapper} from "./hoc/SnackbarWrapper";
import WithAuthRedirect from "./hoc/WithAuthRedirect";
import WithSuspense from "./hoc/WithSuspense";
import ProtectedRoute from "./hoc/ProtectedRoute";
import RestaurantsPage from "./pages/RestaurantsPage";
import RegistrationPage from "./pages/RegistrationPage";
import CartPage from "./pages/CartPage";
import SettingsPage from "./pages/SettingsPage";
import SnackbarMessage from "./components/common/SnackbarMessage.tsx";

const isMobileDevice = (): boolean => {
	const userAgent = navigator.userAgent.toLowerCase();
	return /android|iPhone|iPad|iPod/i.test(userAgent);
};

const App: React.FC = () => {
	const snackbarError = useAppSelector(selectSnackbarError);
	const snackbarMessage = useAppSelector(selectSnackbarMessage);
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
								<WithSuspense Component={CartPage}/>}/>}/>
						<Route path="/profile" element={
							<ProtectedRoute element={
								<WithSuspense Component={ProfilePage}/>}/>}/>
						<Route path="/settings" element={
							<ProtectedRoute element={
								<WithSuspense Component={SettingsPage}/>}/>}/>

					</Routes>
				</SnackbarWrapper>
			</Box>

			{snackbarError && <SnackbarError snackbarError={snackbarError}/>}
			{snackbarMessage && <SnackbarMessage snackbarMessage={snackbarMessage}/>}
			{isMobile && <BottomNav/>}
		</>
	);
};

export default App;