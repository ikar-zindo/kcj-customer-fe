import React from "react";
import MuiSwitch from "../components/mui/MuiSwitch";
import {Box} from "@mui/material";
import MuiRating from "../components/mui/MuiRating";
import MuiAutocomplete from "../components/mui/MuiAutocomplete";
import MuiLayout from "../components/mui/MuiLayout";
import DarkSwitch from "../components/mui/DarkSwitch";

const HomePage: React.FC = React.memo(() => {
	return (
		<Box>
			<DarkSwitch/>
			<MuiSwitch/>
			<MuiRating/>
			<MuiAutocomplete/>
			<MuiLayout/>
		</Box>
	);
});

export default HomePage;