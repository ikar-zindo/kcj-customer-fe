import {useSnackbar, VariantType} from 'notistack';
import {IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const useAppSnackbar = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	const showSnackbar = (message: string, variant: VariantType, autoHideDuration: number = 3500) => {
		enqueueSnackbar(message, {
			variant,
			autoHideDuration,
			action: (key) => (
				<IconButton
					size="small"
					onClick={() => closeSnackbar(key)}
					style={{ color: 'inherit' }}
				>
					<CloseIcon fontSize="small" />
				</IconButton>
			),
		});
	};

	return { showSnackbar };
};
