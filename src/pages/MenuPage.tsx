import React, {useEffect} from "react";
import {Container, Typography} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ProductCard from "../components/common/ProductCard.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/hooks.ts";
import {selectAllProducts} from "../selectors/products-selectors.ts";
import {requestProductsThunk} from "../store/products-slice.ts";

const MenuPage: React.FC = React.memo(() => {
	const products = useAppSelector(selectAllProducts);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(requestProductsThunk());
	}, [dispatch]);

	return (
		<Container sx={{
			paddingX: {
				xs: 2,
				sm: 3,
				md: 4
			}
		}}>
			<Typography variant='h1' color='primary.dark' align="center" sx={{
				paddingY: 2
			}}>K-Curry-Jib</Typography>
			<Grid container spacing={2} alignItems="flex-start">
				{products.map((product) => (
					<Grid key={product.id}
					      size={{
						      xs: 12,
						      sm: 6,
						      md: 6
					      }}>
						<ProductCard product={product}/>
					</Grid>
				))}
			</Grid>
		</Container>
	);
});

export default MenuPage;