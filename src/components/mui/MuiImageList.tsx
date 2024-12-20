import React from 'react';
import {Divider, ImageList, ImageListItem, ImageListItemBar, Stack} from "@mui/material";

const MuiImageList: React.FC = () => {
	const itemData = [
		{
			img_url: 'https://images.unsplash.com/photo-1731370963500-b836d108f7c9',
			title: 'City'
		},
		{
			img_url: 'https://images.unsplash.com/photo-1729762343419-8fd0be625fb6',
			title: 'Mount'
		},
		{
			img_url: 'https://plus.unsplash.com/premium_photo-1690522330262-5bdf16b17e26',
			title: 'Road'
		},
		{
			img_url: 'https://images.unsplash.com/photo-1732445027430-fbe0961cb100',
			title: 'Lake'
		}
	]

	return (
		<Stack spacing={4} divider={<Divider orientation='horizontal' flexItem/>}>
			<ImageList sx={{height: 450}}
			           cols={3}
			           rowHeight={164}>
				{itemData.map(item => (
					<ImageListItem key={item.img_url}>
						<img src={`${item.img_url}?w=164&h=164&fit=crop&auto=formated&dpr=2`} alt={item.img_url}
						     loading='lazy'/>
						<ImageListItemBar title={item.title}/>
					</ImageListItem>
				))}
			</ImageList>
		</Stack>
	);
};

export default MuiImageList;