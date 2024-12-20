import React, {useState} from "react";
import {Autocomplete, Stack, TextField} from "@mui/material";

type Skill= {
	id: number
	label: string
}

const MuiAutocomplete: React.FC = () => {
	const skills = ['Java', 'TypeScript', 'Fortran']
	const [skill, setSkill] = useState<Skill | null>(null)
	const [value, setValue] = useState<string | null>(null)
	console.log({value})
	console.log({skill})

	const skillsOptions = skills.map((skill, index) => ({
		id: index + 1,
		label: skill
	}))

	return (
		<Stack m={2} spacing={2} width='250px'>
			<Autocomplete
				value={value}
				options={skills}
				freeSolo
				onChange={(_event: any, newValue: string | null) => setValue(newValue)}
				renderInput={(params) => (
					<TextField {...params} label='Languege'/>
				)}/>

			<Autocomplete
				value={skill}
				options={skillsOptions}
				onChange={(_event: any, newValue: Skill | null) => setSkill(newValue)}
				renderInput={(params) => (
					<TextField {...params} label='Skills'/>
				)}/>
		</Stack>
	);
};

export default MuiAutocomplete;
