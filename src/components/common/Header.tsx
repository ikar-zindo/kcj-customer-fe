import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {Button, Divider, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks.ts";
import {selectIsMobileDevice} from "../../selectors/app-selectors.ts";
import {selectIsAuth} from "../../selectors/auth-selectors.ts";
import {logout} from "../../store/auth-slice.ts";
import favicon from '../../assets/logo/favicon.ico'

const Header = () => {
	const dispatch = useAppDispatch();
	const isMobileDevice = useAppSelector(selectIsMobileDevice);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);
	const isAuth = useAppSelector(selectIsAuth);

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleSignOut = () => {
		setAnchorEl(null);
		dispatch(logout());
	}

	const menuId = 'primary-search-account-menu';
	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			id={menuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>Profile</MenuItem>
			<MenuItem onClick={handleMenuClose}>Settings</MenuItem>
			<Divider/>
			<MenuItem onClick={handleSignOut}>Sign out</MenuItem>
		</Menu>
	);

	return (
		<Box sx={{flexGrow: 1}}>
			<AppBar position="static">
				<Toolbar sx={{paddingLeft: 1}}>
					<Box sx={{display: 'flex', alignItems: 'center'}}>
						<Box component="img"
						     src={favicon}
						     alt="Logo"
						     sx={{
							     marginX: 1,
							     width: 40,
							     height: 40,
							     objectFit: 'cover',
						     }}
						/>

						<Box sx={{
							display: 'flex',
							flexDirection: 'column',
						}}>
							<Typography
								variant="body1"
								noWrap
								component="div">K-Curry</Typography>
							<Typography
								variant="body1"
								color='error.dark'
								noWrap
								component="div">Jib</Typography>
						</Box>
					</Box>

					{!isMobileDevice && <Box sx={{flexGrow: 1, display: 'flex', justifyContent: 'center'}}>
						<Stack direction='row' spacing={2}>
							<Button component={Link} to="/" color='inherit'>Home</Button>
							<Button component={Link} to="/menu" color='inherit' variant='outlined'>Menu</Button>
							<Button component={Link} to="/restaurants" color='inherit'>Restaurants</Button>
						</Stack>
					</Box>}

					{isMobileDevice && <Box sx={{display: 'flex', flexGrow: 1}}/>}

					{(!isMobileDevice && isAuth) && <Box sx={{display: 'flex'}}>
						<IconButton size="large"
						            aria-label="show 4 new mails"
						            color="inherit">
							<Badge badgeContent={4} color="warning">
								<ShoppingCartIcon/>
							</Badge>
						</IconButton>
					</Box>}

					{isAuth
						? <Box sx={{display: 'flex'}}>
							<IconButton
								size="large"
								edge="end"
								aria-label="account of current user"
								aria-controls={menuId}
								aria-haspopup="true"
								onClick={handleProfileMenuOpen}
								color="inherit">
								<AccountCircle/>
							</IconButton>
						</Box>
						: <Button component={Link} to="/login" color='inherit'>Sing in</Button>}
				</Toolbar>
			</AppBar>
			{renderMenu}
		</Box>
	);
}

export default Header;