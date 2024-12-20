import React, {useState} from 'react';
import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText} from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

const MuiCheckbox: React.FC = () => {
	const [acceptInc, setAcceptInc] = useState<boolean>(false)
	const [skills, setSkills] = useState<string[]>([])

	console.log({skills})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAcceptInc(event.target.checked)
	}

	const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const skillsId = skills.indexOf(event.target.value)
		if (skillsId === -1) {
			setSkills([...skills, event.target.value])
		} else {
			setSkills(skills.filter((skill) => skill !== event.target.value))
		}
	}

	return (
		<Box>
			<Box>
				<FormControlLabel label='I accept terms conditions' control={
					<Checkbox icon={<BookmarkBorderIcon/>}
					          checkedIcon={<BookmarkIcon/>}
					          size='small'
					          color='secondary'
					          checked={acceptInc}
					          onChange={handleChange}/>}/>
			</Box>
			<Box>
				<Checkbox icon={<BookmarkBorderIcon/>}
				          checkedIcon={<BookmarkIcon/>}
				          checked={acceptInc}
				          onChange={handleChange}/>
			</Box>
			<Box>
				<Checkbox onChange={handleChange}
				          checked={acceptInc}/>
			</Box>
			<Box>
				<FormControl error>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel label='HTML' control={
							<Checkbox onChange={handleSkillChange}
							          value='html'
							          checked={skills.includes('html')}/>
						}/>
						<FormControlLabel label='CSS'
						                  value='css'
						                  control={<Checkbox onChange={handleSkillChange}
						                                     checked={skills.includes('css')}/>
						                  }/>
						<FormControlLabel label='TypeScript'
						                  value='ts'
						                  control={<Checkbox onChange={handleSkillChange}
						                                     checked={skills.includes('ts')}/>
						                  }/>
					</FormGroup>
					<FormHelperText>
						Invalid selection
					</FormHelperText>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckbox;