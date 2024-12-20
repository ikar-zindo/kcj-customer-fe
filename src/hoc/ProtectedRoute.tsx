import React, {ReactElement} from 'react';
import {Navigate} from 'react-router-dom';
import {selectIsAuth} from "../selectors/auth-selectors.ts";
import {useAppSelector} from "../hooks/hooks.ts";

interface ProtectedRouteProps {
	element: ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({element}) => {
	const isAuth = useAppSelector(selectIsAuth);

	if (!isAuth) {
		return <Navigate to="/login"/>;
	}

	return element;
};

export default ProtectedRoute;
