import React, {useEffect} from 'react';
import {Box, Card, CardContent, CardMedia, Rating, Typography} from '@mui/material';
import {RestaurantDto} from "../../types/dtos";
import {useAppDispatch} from "../../hooks/hooks";
import {fetchRestaurantRatingThunk} from "../../store/restaurants-slice";

interface RestaurantCardProps {
	restaurant: RestaurantDto;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({restaurant}) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchRestaurantRatingThunk(restaurant.id));
	}, [dispatch, restaurant.id, restaurant.rating]);

	return (
		<Card sx={{
			'&:hover': {
				transform: 'scale(1.02)',
				transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
			},
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			height: '100%',
			boxShadow: 3,
			transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
		}}
		>
			<CardMedia
				component="img"
				height="200"
				// image={restaurant.imgUrl}
				image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/ae/3e/98/innenansicht.jpg"
				alt={restaurant.name}
			/>
			<CardContent>
				<Typography variant="h6" gutterBottom>
					{restaurant.name}
				</Typography>
				<Typography variant="body2" color="text.secondary" gutterBottom>
					{restaurant.description}
				</Typography>
				<Box display="flex" alignItems="center" mt={2}>
					<Rating value={restaurant.rating ?? 0} readOnly precision={0.1}/>
					<Typography variant="body2" sx={{ml: 1}}>
						{restaurant.rating}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default RestaurantCard;
