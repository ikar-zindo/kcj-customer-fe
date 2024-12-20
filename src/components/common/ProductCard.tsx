import React, {useState} from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {useAppSnackbar} from "../../hooks/useAppSnackbar.tsx";
import {locate} from "../../utils/locates/locate.ts";
import {ProductDto} from "../../types/dtos.ts";

interface ProductCardProps {
	product: ProductDto;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
	const {showSnackbar} = useAppSnackbar();
	const [hovered, setHovered] = useState(false);

	const handleAddProductToCart = () => {
		showSnackbar(`${product.name} ${locate.products.wasAdded}`, 'success');
	};

	return (
		<Card sx={{
			'&:hover': {
				transform: 'scale(1.02)',
				transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
			},
			borderRadius: '12px',
			overflow: 'hidden',
			position: 'relative',
			boxShadow: 3,
			transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
		}}
		      onMouseEnter={() => setHovered(true)}
		      onMouseLeave={() => setHovered(false)}
		>
			<CardMedia
				component="img"
				image={`src/assets/products/${product.imageUrl}`}
				alt={product.name}
				sx={{
					height: 140,
					objectFit: 'cover',
				}}
			/>

			<CardContent sx={{padding: 2, paddingBottom: 0}}>
				<Typography variant="h6" color="primary">
					{product.name}
				</Typography>
				<Typography variant="body2"
				            color="secondary"
				            sx={{fontFamily: 'Roboto, sans-serif'}}>
					{product.description}
				</Typography>
			</CardContent>

			<CardActions
				sx={{
					justifyContent: 'space-between',
					alignItems: 'center',
					paddingX: 2,
				}}
			>
				<Box sx={{display: 'flex', justifyContent: 'center', flexGrow: 1}}>
					<Button
						onClick={handleAddProductToCart}
						variant="contained"
						color="success"
						endIcon={<AddShoppingCartIcon/>}
						sx={{
							opacity: hovered ? 1 : 0,
							transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
							transform: hovered ? 'scale(1.05)' : 'scale(1)',
							boxShadow: hovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',
							padding: 1.5,
							paddingX: 2.5
						}}
					>
						Add
					</Button>
				</Box>

				<Box sx={{textAlign: 'right'}}>
					<Typography variant="body2" color="primary.light">
						Price: {product.price.toFixed(2)} €
					</Typography>
					<Typography variant="body2" color="success.main">
						«{product.restaurant.name}»
					</Typography>
					<Typography sx={{fontFamily: 'Roboto, sans-serif'}} variant="body2" color="text.secondary">
						{product.restaurant.address}
					</Typography>
				</Box>
			</CardActions>
		</Card>
	);
};

export default ProductCard;
