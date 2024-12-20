import React, {useState} from 'react';
import {Stack, TextField, InputAdornment} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField: React.FC = () => {
	const [value, setValue] = useState<string>('')

	return (
		<div>
			<Stack spacing={4}>
				<Stack direction='row' spacing={2}>
					<TextField label='Name' variant='outlined'/>
					<TextField label='Name' variant='filled'/>
					<TextField label='Name' variant='standard'/>
				</Stack>

				<Stack direction='row' spacing={2}>
					<TextField label='Small secondary' size='small' color='secondary'/>
				</Stack>

				<Stack direction='row' spacing={2}>
					<TextField label='Form input'
					           required
					           value={value}
					           onChange={(e) => {
						           setValue(e.target.value)
					           }}
					           error={!value}
					helperText={!value ? 'Required' : 'Do not share your password with anyone'}/>
					<TextField label='Form input'
					           disabled={true}
					           helperText='Do not share your password with anyone'/>
					<TextField label='Password'
					           type='password'
					slotProps={{
						input: {
							endAdornment: <VisibilityIcon fontSize='small'/>
						}
					}}/>
					<TextField label='Read only'
					           slotProps={{
						           input: {readOnly: true},
					           }}/>
				</Stack>
				<Stack direction='row' spacing={2}>
					<TextField label='Amount' slotProps={{
						input: {
							startAdornment: <InputAdornment position="start">$</InputAdornment>
						}
					}}/>
					<TextField label='Weight' slotProps={{
						input: {
							endAdornment: <InputAdornment position="end">kg</InputAdornment>
						}
					}}/>
				</Stack>
			</Stack>
		</div>
	);
};

export default MuiTextField;