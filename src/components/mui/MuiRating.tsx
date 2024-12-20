import React, { useState } from "react";
import { Rating, Stack } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const MuiRating: React.FC = () => {
	const [value, setValue] = useState<number | null>(3);
	console.log({ value });

	const handleChange = (_event: React.SyntheticEvent, newValue: number | null) => {
		setValue(newValue);
	};

	return (
		<Stack m={2} spacing={2}>
			<Rating
				value={value}
				precision={0.5}
				size="large"
				highlightSelectedOnly
				icon={<FavoriteIcon fontSize="inherit" color='error'/>}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
				onChange={handleChange}/>
		</Stack>
	);
};

export default MuiRating;
