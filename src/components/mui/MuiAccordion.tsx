import React, {useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {Accordion, AccordionSummary, Stack, Typography} from "@mui/material";

const MuiAccordion: React.FC = () => {
	const [expanded, setExpanded] = useState<string | false>(false)

	const handleChange = (isExpanded: boolean, panel: string) => {
		setExpanded(isExpanded ? panel : false)
	}

	return (
		<Stack>
			<Accordion expanded={expanded === 'panel1'}
			onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel1')}>
				<AccordionSummary id='panel1-header'
				                  arai-controls='panel1-header'
				                  expandIcon={<ExpandMoreIcon/>}>
					<Typography>Accordion 1 </Typography>
				</AccordionSummary>
				<AccordionSummary id='panel1-header'>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aut doloribus ea est inventore
						maiores nemo omnis pariatur perferendis provident quas quibusdam repudiandae rerum! A, ab alias autem
						debitis excepturi harum in ipsum laboriosam provident quae quam quisquam, sapiente voluptatem.
					</Typography>
				</AccordionSummary>
			</Accordion>

			<Accordion expanded={expanded === 'panel2'}
			           onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel2')}>
				<AccordionSummary id='panel2-header'
				                  arai-controls='panel2-header'
				                  expandIcon={<ExpandMoreIcon/>}>
					<Typography>Accordion 2</Typography>
				</AccordionSummary>
				<AccordionSummary id='panel1-header'>
					<Typography>
						debitis excepturi harum in ipsum laboriosam provident quae quam quisquam, sapiente voluptatem.
					</Typography>
				</AccordionSummary>
			</Accordion>

			<Accordion expanded={expanded === 'panel3'}
			           onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel3')}>
				<AccordionSummary id='panel3-header'
				                  arai-controls='panel3-header'
				                  expandIcon={<ExpandMoreIcon/>}>
					<Typography>Accordion3</Typography>
				</AccordionSummary>
				<AccordionSummary id='panel1-header'>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, aut doloribus ea est inventore
					</Typography>
				</AccordionSummary>
			</Accordion>
		</Stack>
	);
};

export default MuiAccordion;