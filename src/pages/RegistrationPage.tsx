import React, {useEffect} from "react";
import {useAppSelector} from "../hooks/hooks";
import {selectAuth} from "../selectors/auth-selectors";
import RegistrationForm from "../components/common/RegistrationForm.tsx";

const RegistrationPage: React.FC = React.memo(() => {
	const auth = useAppSelector(selectAuth);

	useEffect(() => {
	}, [auth, auth.isAuth]);

	return <RegistrationForm/>;
});

export default RegistrationPage;