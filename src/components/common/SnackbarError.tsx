import React, {useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import {Alert} from "@mui/material";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {clearSnackbarError} from "../../store/app-slice.ts";

interface SnackbarErrorProps {
	snackbarError: string
}

const SnackbarError: React.FC<SnackbarErrorProps> = ({snackbarError}) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const dispatch = useAppDispatch();

	const handleClose = () => {
		setIsOpen(false);
		dispatch(clearSnackbarError());
	};

	return (
		<Snackbar open={isOpen}
		          onClose={handleClose}
		          onClick={handleClose}
		          TransitionComponent={Slide}
		          autoHideDuration={2000}
		          sx={{bottom: {xs: 70, md: 20}}}>
			<Alert onClose={handleClose}
			       severity="error"
			       variant="filled"
			       sx={{width: '100%'}}>
				{snackbarError}
			</Alert>
		</Snackbar>
	);
}

export default SnackbarError;