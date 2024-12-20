import React, {useState} from 'react';
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, FormHelperText} from '@mui/material';

const MuiRadioButton: React.FC = () => {
	const [value, setValue] = useState<string>('')
	console.log({value})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<Box>
			<FormControl error={false} sx={{border: `${value}px darkblue solid`}}>
				<FormLabel id='job-experience-group'>
					Years of experience
				</FormLabel>
				<RadioGroup name='job-experience-group'
				            value={value}
				            onChange={handleChange}
				            row
				            aria-labelledby='job-experience-group'>
					<FormControlLabel control={<Radio size='small' color='warning'/>} label='1' value='1'/>
					<FormControlLabel control={<Radio size='medium'/>} label='2' value='2'/>
					<FormControlLabel control={<Radio/>} label='3' value='3'/>
				</RadioGroup>
				<FormHelperText>
					Invalid selection
				</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;