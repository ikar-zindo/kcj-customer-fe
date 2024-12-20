import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {BottomNavigation, BottomNavigationAction} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HolidayVillageIcon from '@mui/icons-material/HolidayVillage';
import Badge from "@mui/material/Badge";

const BottomNav: React.FC = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const getValueFromPath = (path: string) => {
		switch (path) {
			case "/":
				return 0;
			case "/restaurants":
				return 1;
			case "/menu":
				return 2;
			case "/cart":
				return 3;
			default:
				return 0;
		}
	};

	const currentValue = getValueFromPath(location.pathname);

	const handleNavigation = (newValue: number) => {
		if (newValue === 0) navigate("/");
		if (newValue === 1) navigate("/restaurants");
		if (newValue === 2) navigate("/menu");
		if (newValue === 3) navigate("/cart");
	};

	return (
		<BottomNavigation value={currentValue}
		                  sx={{
			                  position: 'fixed',
			                  bottom: 0,
			                  width: '100%',
			                  justifyContent: 'space-between'
		                  }}
		                  showLabels
		                  onChange={(_, newValue) => handleNavigation(newValue)}>
			<BottomNavigationAction label="Home" icon={<HomeIcon/>}/>
			<BottomNavigationAction label="Restaurans" icon={<HolidayVillageIcon/>}/>
			<BottomNavigationAction label="Menu" icon={<RamenDiningIcon/>}/>
			<BottomNavigationAction label="Cart" icon={
				<Badge badgeContent={6} color="warning">
					<ShoppingCartIcon/>
				</Badge>}/>
		</BottomNavigation>
	);
};

export default BottomNav;