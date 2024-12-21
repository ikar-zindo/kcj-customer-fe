import React from "react";
import {Box, CircularProgress, Typography} from "@mui/material";
import UpdateUserForm from "../components/forms/UpdateUserForm.tsx";
import {useAppSelector} from "../hooks/hooks";
import {selectCustomer} from "../selectors/auth-selectors";

const ProfilePage: React.FC = React.memo(() => {
	const customer = useAppSelector(selectCustomer);

	if (!customer) {
		return (
			<Box>
				<Typography variant="h6">Loading customer data...</Typography>
				<CircularProgress />
			</Box>
		);
	}

	return (
		<Box>
			<UpdateUserForm initialData={customer}/>
		</Box>
	);
});

export default ProfilePage;