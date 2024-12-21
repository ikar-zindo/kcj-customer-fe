import React from 'react';
import {
	Box,
	TextField,
	Button,
	Typography,
	Container,
} from '@mui/material';
import Grid from "@mui/material/Grid2";
import { useForm, SubmitHandler } from 'react-hook-form';
import {CustomerCreateDto} from "../../types/dtos.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {registration} from "../../store/auth-slice.ts";
import {authErrors} from "../../utils/error-messages.ts";

const RegistrationForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<CustomerCreateDto>({
		mode: 'onChange',
	});

	const onSubmit: SubmitHandler<CustomerCreateDto> = (data) => {
		dispatch(registration(data));
	};

	return (
		<Container maxWidth="sm" sx={{ mt: 4 }}>
			<Box
				sx={{
					boxShadow: 3,
					borderRadius: 2,
					padding: 4,
					backgroundColor: 'background.paper',
				}}
			>
				<Typography variant="h4" align="center" gutterBottom>
					Sing up
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3}>
						<Grid size={{xs: 12}}>
							<TextField
								label="First Name"
								fullWidth
								required
								variant="outlined"
								{...register('firstName', {
									required: authErrors.FIRSTNAME_IS_REQUIRED,
									pattern: {
										value: /^[a-zA-ZÀ-ÿŁł'\-\s]+$/,
										message: authErrors.INVALID_NAME_FORMAT,
									},
								})}
								error={!!errors.firstName}
								helperText={errors.firstName?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<TextField
								label="Last Name"
								fullWidth
								required
								variant="outlined"
								{...register('lastName', {
									required: authErrors.LASTNAME_IS_REQUIRED,
									pattern: {
										value: /^[a-zA-ZÀ-ÿŁł'\-\s]+$/,
										message: authErrors.INVALID_NAME_FORMAT,
									},
								})}
								error={!!errors.lastName}
								helperText={errors.lastName?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<TextField
								label="Email"
								type="email"
								fullWidth
								required
								variant="outlined"
								{...register('email', {
									required: authErrors.EMAIL_IS_REQUIRED,
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
										message: authErrors.INVALID_EMAIL,
									},
								})}
								error={!!errors.email}
								helperText={errors.email?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<TextField
								label="Password"
								type="password"
								fullWidth
								required
								variant="outlined"
								{...register('password', {
									required: authErrors.PASSWORD_IS_REQUIRED,
									pattern: {
										value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/,
										message: authErrors.INVALID_PASSWORD,
									},
								})}
								error={!!errors.password}
								helperText={errors.password?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<TextField
								label="Phone Number"
								fullWidth
								required
								variant="outlined"
								{...register('phoneNumber', {
									required: authErrors.PHONE_NUMBER_IS_REQUIRED,
									pattern: {
										value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
										message: authErrors.INVALID_PHONE_NUMBER,
									},
								})}
								error={!!errors.phoneNumber}
								helperText={errors.phoneNumber?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<TextField
								label="Address"
								fullWidth
								required
								variant="outlined"
								{...register('address', {
									required: authErrors.ADDRESS_IS_REQUIRED,
									pattern: {
										value: /^[A-Za-zÀ-ÿŁł\s,.-]+\s\d+$/,
										message: authErrors.INVALID_ADDRESS,
									},
								})}
								error={!!errors.address}
								helperText={errors.address?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<TextField
								label="Postal Code"
								fullWidth
								required
								variant="outlined"
								{...register('postalCode', {
									required: authErrors.POSTAL_CODE_IS_REQUIRED,
									pattern: {
										value: /^\d{5}$/,
										message: authErrors.INVALID_POSTAL_CODE,
									},
								})}
								error={!!errors.postalCode}
								helperText={errors.postalCode?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<Button
								type="submit"
								variant="contained"
								color="primary"
								fullWidth
								sx={{
									paddingY: 1.5,
									textTransform: 'none',
									fontSize: '1rem',
								}}
							>
								Sing up
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Container>
	);
};

export default RegistrationForm;
