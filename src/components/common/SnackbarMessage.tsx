import React, {useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import {Alert} from "@mui/material";
import {useAppDispatch} from "../../hooks/hooks";
import {clearGlobalMessage} from "../../store/app-slice";

interface SnackbarMessageProps {
	snackbarMessage: string
}

const SnackbarMessage: React.FC<SnackbarMessageProps> = ({snackbarMessage}) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const dispatch = useAppDispatch();

	const handleClose = () => {
		setIsOpen(false);
		dispatch(clearGlobalMessage());
	};

	return (
		<Snackbar open={isOpen}
		          onClose={handleClose}
		          onClick={handleClose}
		          TransitionComponent={Slide}
		          autoHideDuration={2000}
		          sx={{bottom: {xs: 70, md: 20}}}>
			<Alert onClose={handleClose}
			       severity="info"
			       variant="filled"
			       sx={{width: '100%'}}>
				{snackbarMessage}
			</Alert>
		</Snackbar>
	);
}

export default SnackbarMessage;