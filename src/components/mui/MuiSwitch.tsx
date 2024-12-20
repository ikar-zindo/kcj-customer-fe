import React, {useState} from 'react';
import {Box, FormControlLabel, Switch} from '@mui/material';

const MuiSwitch: React.FC = () => {
	const [checked, setChecked] = useState(false)
	console.log({checked})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked)
	}

	return (
		<Box m={2}>
			<FormControlLabel label='DarkMode'
			                  control={
				<Switch checked={checked}
				        size='small'
				        color='error'
				        onChange={handleChange}/>}/>
		</Box>
	);
};

export default MuiSwitch;