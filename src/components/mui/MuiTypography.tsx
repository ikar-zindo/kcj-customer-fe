import React from 'react';
import {Typography} from "@mui/material";

const MuiTypography: React.FC = () => {
	return (
		<div>
			<Typography variant="h1">h1 Heading</Typography>
			<Typography variant="h3">h3 Heading</Typography>
			<Typography variant="h4" component='h1' gutterBottom>h4 Heading</Typography>
			<Typography variant="h5">h5 Heading</Typography>
			<Typography variant="h6">h6 Heading</Typography>

			<Typography variant="subtitle1">Sub title 2</Typography>
			<Typography variant="subtitle2">Sub title 2</Typography>

			<Typography variant="body1">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci at distinctio
				eaque est eveniet mollitia non quam ut vitae! Accusamus aliquam amet consequatur cumque debitis deleniti
				ducimus earum in laborum laudantium magni quam repellendus, suscipit veritatis voluptate. Ad,
				dolores.</Typography>
			<Typography variant="body2">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet eos et eum iure molestias
				necessitatibus neque omnis quas sint.
			</Typography>
		</div>
	);
};

export default MuiTypography;