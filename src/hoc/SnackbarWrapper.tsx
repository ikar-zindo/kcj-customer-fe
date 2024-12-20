import { SnackbarProvider } from 'notistack';
import React, { ReactNode } from 'react';

interface SnackbarWrapperProps {
	children: ReactNode;
}

export const SnackbarWrapper: React.FC<SnackbarWrapperProps> = ({ children }) => {
	return (
		<SnackbarProvider maxSnack={11}>
			{children}
		</SnackbarProvider>
	);
};
