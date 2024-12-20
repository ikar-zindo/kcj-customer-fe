import React, {useState} from 'react';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import {Button, IconButton, Stack, Typography, Menu, MenuItem} from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MuiNavbar: React.FC = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position='static'>
			<Toolbar>
				<IconButton size='large'
				            edge='start'
				            color='inherit'
				            arai-label='logo'>
					<CatchingPokemonIcon/>
				</IconButton>
				<Typography variant='h6' component='div' sx={{flexGrow: 1}}>
					K-Curry-Jib
				</Typography>

				<Stack direction='row' spacing={2}>
					<Button color='inherit'>Features</Button>
					<Button color='inherit'>Pricing</Button>
					<Button color='inherit'>About</Button>
					<Button color='inherit'
					        id='resources-button'
					        aria-controls={open ? 'resources-menu' : undefined}
					        aria-haspopup='true'
					        arai-expanded={open ? 'true' : undefined}
					        endIcon={<KeyboardArrowDownIcon/>}
					        onClick={handleClick}>Resources</Button>
					<Button color='inherit'>Login</Button>
				</Stack>

				<Menu id='resource-menu'
				      anchorEl={anchorEl}
				      open={open}
				      anchorOrigin={{
							vertical: 'bottom',
					      horizontal: 'right'
				      }}
				      transformOrigin={{
					      vertical: 'top',
					      horizontal: 'right'
				      }}
				      MenuListProps={{
							'aria-labelledby': 'resources-button'
				      }}
				      onClose={handleClose}>
					<MenuItem onClick={handleClose}>Blog</MenuItem>
					<MenuItem onClick={handleClose}>Podcast</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};

export default MuiNavbar;