import React from 'react';
import {Box, Button, Container, Typography} from '@mui/material';
import Grid from "@mui/material/Grid2";
import {SubmitHandler, useForm} from 'react-hook-form';
import {CustomerUpdateDto} from "../../types/dtos.ts";
import {useAppDispatch} from "../../hooks/hooks.ts";
import {updateUser} from "../../store/auth-slice.ts";
import FormField from './FormField.tsx';

interface UpdateUserFormProps {
	initialData: CustomerUpdateDto;
}

const UpdateUserForm: React.FC<UpdateUserFormProps> = ({ initialData }) => {
	const dispatch = useAppDispatch();
	const { register, handleSubmit, formState: { errors } } = useForm<CustomerUpdateDto>({
		mode: 'onChange',
		defaultValues: initialData,
	});

	const onSubmit: SubmitHandler<CustomerUpdateDto> = (data) => {
		dispatch(updateUser(data));
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
					Update Profile
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3}>
						<FormField
							label="First Name"
							name="firstName"
							type="text"
							register={register}
							required
							pattern={/^[a-zA-ZÀ-ÿŁł'\-\s]+$/}
							error={!!errors.firstName}
							helperText={errors.firstName?.message}
							defaultValue={initialData.firstName} // Передаем начальное значение
						/>

						<FormField
							label="Last Name"
							name="lastName"
							type="text"
							register={register}
							required
							pattern={/^[a-zA-ZÀ-ÿŁł'\-\s]+$/}
							error={!!errors.lastName}
							helperText={errors.lastName?.message}
							defaultValue={initialData.lastName}
						/>

						<FormField
							label="Email"
							name="email"
							type="email"
							register={register}
							required
							pattern={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/}
							error={!!errors.email}
							helperText={errors.email?.message}
							defaultValue={initialData.email}
						/>

						<FormField
							label="Phone Number"
							name="phoneNumber"
							type="tel"
							register={register}
							required
							pattern={/^\+(?:[0-9] ?){6,14}[0-9]$/}
							error={!!errors.phoneNumber}
							helperText={errors.phoneNumber?.message}
							defaultValue={initialData.phoneNumber}
						/>

						<FormField
							label="Address"
							name="address"
							type="text"
							register={register}
							required
							pattern={/^[A-Za-zÀ-ÿŁł\s,.-]+\s\d+$/}
							error={!!errors.address}
							helperText={errors.address?.message}
							defaultValue={initialData.address}
						/>

						<FormField
							label="Postal Code"
							name="postalCode"
							type="text"
							register={register}
							required
							pattern={/^\d{5}$/}
							error={!!errors.postalCode}
							helperText={errors.postalCode?.message}
							defaultValue={initialData.postalCode}
						/>

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
								Update Profile
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Container>
	);
};

export default UpdateUserForm;
