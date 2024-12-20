import React from 'react';
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from "@mui/material";

const MuiCard: React.FC = () => {
	return (
		<Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto' }}>
			<Card>
				<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
					<CardMedia component='img'
					           image='https://play-lh.googleusercontent.com/o45cox7RUa74zy_b1XY6Dd8DPHUGxqkyPYxkY9naPKYsMxLURw-HUw7X_th1BaBfKUIt=w240-h480-rw'
					           sx={{
						           width: '100px',
						           height: '100px',
						           borderRadius: '8px',
						           objectFit: 'cover',
					           }}/>

					<Box sx={{ flex: 1, padding: 2, marginLeft: 'auto', textAlign: 'right' }}>
						<CardContent sx={{ padding: 1, paddingLeft: 2}}>
							<Typography gutterBottom variant="h6" component="div">
								Bibimbap
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Tauche ein in die Welt der koreanischen Küche mit unserem authentischen Bibimbap-Rezept!
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
								<strong>Price:</strong> $12.99
							</Typography>
							<Typography variant="body2" color="text.secondary">
								<strong>Restaurant:</strong> Korean Kitchen
							</Typography>
							<Typography variant="body2" color="text.secondary">
								<strong>Address:</strong> Seoul St. 15, Berlin
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn more</Button>
						</CardActions>
					</Box>
				</Box>
			</Card>
		</Box>
	);
};

export default MuiCard;