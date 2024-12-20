import React from 'react';
import {Box, Divider, Paper, Stack} from "@mui/material";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
	...theme.applyStyles('dark', {
		backgroundColor: '#1A2027',
	}),
}));

const MuiLayout: React.FC = () => {
	return (
		<Paper sx={{padding: '32px'}} elevation={8}>
			<Stack direction='column-reverse'
			       spacing={2}
			       divider={<Divider orientation='horizontal' flexItem/>}
			       sx={{
				       border: '1px solid'
			       }}>
				<Box sx={{
					backgroundColor: 'primary.main',
					color: 'white',
					height: '100px',
					width: '100px',
					padding: '16px',
					'&:hover': {
						backgroundColor: 'primary.light'
					}
				}}>
					Codevolution
				</Box>
				<Box display='flex'
				     width='100px'
				     sx={{
					     p: 2
				     }}
				     bgcolor='success.light'
				     height='100px'>
				</Box>
			</Stack>

			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					<Grid size={{ xs: 6, md: 8 }}>
						<Item>xs=6 md=8</Item>
					</Grid>
					<Grid size={{ xs: 6, md: 4 }}>
						<Item>xs=6 md=4</Item>
					</Grid>
					<Grid size={{ xs: 6, md: 4 }}>
						<Item>xs=6 md=4</Item>
					</Grid>
					<Grid size={{ xs: 6, md: 8 }}>
						<Item>xs=6 md=8</Item>
					</Grid>
				</Grid>
			</Box>

			<Stack>
				<Grid container
				      rowSpacing={2}
				      columnSpacing={4}
				       sx={{my: 4}}>
					<Grid size={{xs: 6}}>
						<Box bgcolor="primary.light" sx={{ p: 4 }}>item 1</Box>
					</Grid>
					<Grid size={{xs: 6}}>
						<Box bgcolor='primary.light' sx={{p: 4}}>item 2</Box>
					</Grid>
					<Grid size={{xs: 6}}>
						<Box bgcolor='primary.light' sx={{p: 4}}>item 3</Box>
					</Grid>
					<Grid size={{xs: 6}}>
						<Box bgcolor='primary.light' sx={{p: 4}}>item 4</Box>
					</Grid>
					<Grid size={{xs: 6}}>
						<Box bgcolor='primary.light' sx={{p: 4}}>item 5</Box>
					</Grid>
				</Grid>
			</Stack>
		</Paper>
	);
};

export default MuiLayout;

// <Grid2 container component="div" spacing={2}>
// 	<Grid2 component="div" xs={6}>
// 		<div>Item 1</div>
// 	</Grid2>
// 	<Grid2 component="div" xs={6}>
// 		<div>Item 2</div>
// 	</Grid2>
// </Grid2>
//
// <Grid2 container
//        spacing={2}
//        sx={{
// 	       my: 4
//        }}>
// 	<Grid2 xs={6} sm={12}>
// 		<Box bgcolor="primary.light" sx={{ p: 4 }}>item 1</Box>
// 	</Grid2>
// 	<Grid2 xs={6} sm={12}>
// 		<Box bgcolor='primary.light' sx={{p: 4}}>item 2</Box>
// 	</Grid2>
// 	<Grid2 xs={6} sm={12}>
// 		<Box bgcolor='primary.light' sx={{p: 4}}>item 3</Box>
// 	</Grid2>
// 	<Grid2 xs={6} sm={12}>
// 		<Box bgcolor='primary.light' sx={{p: 4}}>item 4</Box>
// 	</Grid2>
// 	<Grid2 xs={6} sm={12}>
// 		<Box bgcolor='primary.light' sx={{p: 4}}>item 5</Box>
// 	</Grid2>
// </Grid2>