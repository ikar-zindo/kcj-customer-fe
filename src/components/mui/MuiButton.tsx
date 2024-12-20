import React, {useState} from 'react';
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';

const MuiButton: React.FC = React.memo(() => {
	const [formats, setFormats] = useState<string | null>(null)
	console.log({
		formats,
	})
	const handleFormatChange = (_event: React.MouseEvent<HTMLElement>, updateFormats: string | null) => {
		setFormats(updateFormats)
	}

	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction='row'>
				<Button variant='text' href='https://google.com'>text</Button>
				<Button variant='contained'>contained</Button>
				<Button variant='outlined'>outlined</Button>
			</Stack>

			<Stack spacing={2} direction='row'>
				<Button variant='contained' color='primary'>primary</Button>
				<Button variant='contained' color='secondary'>secondary</Button>
				<Button variant='contained' color='error'>error</Button>
				<Button variant='contained' color='info'>info</Button>
				<Button variant='contained' color='inherit'>inherit</Button>
				<Button variant='contained' color='warning'>warning</Button>
				<Button variant='contained' color='success'>success</Button>
			</Stack>

			<Stack display='block' spacing={2} direction='row'>
				<Button variant='contained' size='small'>small</Button>
				<Button variant='contained' size='large'>large</Button>
				<Button variant='contained' size='medium'>medium</Button>
			</Stack>

			<Stack spacing={2} direction='row'>
				<Button variant='contained'
				        startIcon={<SendIcon/>}
				        onClick={() => alert("Hello")}
				        disableElevation
				        disableRipple>
					Send</Button>
				<Button variant='contained'
				        endIcon={<SendIcon/>}
				        disabled>
					Send</Button>
				<IconButton aria-label='send'
				            color='success'
				            size='small'>
					<SendIcon/>
				</IconButton>
			</Stack>

			<Stack direction='row'>
				<ButtonGroup
					variant='contained'
					orientation='vertical'
					size='small'
					arial-label='alignment button group'
					color='secondary'>
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>

			<Stack direction='row'>
				<ToggleButtonGroup
					aria-label='text formatting'
					onChange={handleFormatChange}
					size='small'
					color='success'
					orientation='vertical'
					exclusive
					value={formats}>
					<ToggleButton value='bold' aria-label='bold'>
						<FormatBold/>
					</ToggleButton>
					<ToggleButton value='italic' aria-label='italic'>
						<FormatItalic/>
					</ToggleButton>
					<ToggleButton value='underlined' aria-label='underlined'>
						<FormatUnderlined/>
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
});

export default MuiButton;