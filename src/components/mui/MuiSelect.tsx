import React, {useState} from 'react';
import {Box, TextField, MenuItem} from '@mui/material';

const MuiSelect: React.FC = () => {
	const [countries, setCountries] = useState<string[]>([])
	console.log(countries)
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setCountries(typeof value === 'string' ? value.split(',') : value);
	}

	return (
		<Box width="250px">
			<TextField
				label='Select country'
				select
				fullWidth
				onChange={handleChange}
				slotProps={{
					select: {
						multiple: true,
					}
				}}
				color='info'
				size='small'
				helperText='Choose a country'
				value={countries}>
				<MenuItem value='FR'>France</MenuItem>
				<MenuItem value='US'>USA</MenuItem>
				<MenuItem value='AU'>Australia</MenuItem>
			</TextField>
		</Box>
	);
};

export default MuiSelect;