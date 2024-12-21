import React, {useEffect} from 'react';
import {Container, Typography} from '@mui/material';
import Grid from "@mui/material/Grid2";
import RestaurantCard from "../components/common/RestaurantCard";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {selectAllRestaurants} from "../selectors/restaurants-selectors";
import {requestRestaurantsThunk} from "../store/restaurants-slice";

const RestaurantsPage: React.FC = React.memo(() => {
	const restaurants = useAppSelector(selectAllRestaurants);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(requestRestaurantsThunk());
	}, [dispatch]);

	return (
		<Container>
			<Typography variant='h1' color='primary.dark' align="center" sx={{paddingY: 2}}>
				Restaurants
			</Typography>
			<Grid container spacing={4}>
				{restaurants.map((restaurant) => (
					<Grid size={{xs: 12, sm: 6, md: 4}} key={restaurant.id}>
						<RestaurantCard restaurant={restaurant}/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
});

export default RestaurantsPage;