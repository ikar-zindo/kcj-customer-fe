import React from 'react';
import DarkSwitch from "../components/mui/DarkSwitch";
import {Container, Paper} from "@mui/material";

const SettingsPage: React.FC = () => {
	return (
		<Container sx={{
			paddingX: {
				xs: 2,
				sm: 3,
				md: 4
			},
			paddingY: 2
		}}>
			<Paper sx={{padding: 2}}>
				<DarkSwitch/>
			</Paper>
		</Container>
	);
};

export default SettingsPage;