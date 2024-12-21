import React, { useState } from 'react';
import {
	Box,
	TextField,
	Button,
	Typography,
	Container,
	Checkbox,
	FormControlLabel,
} from '@mui/material';
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from 'react-hook-form';
import { LoginDataRequest } from '../../types/api/auth-types.ts';
import { authErrors } from '../../utils/error-messages.ts';
import { locate } from '../../utils/locates/locate.ts';
import { useAppDispatch } from '../../hooks/hooks.ts';
import { login } from '../../store/auth-slice.ts';

interface LoginFormProps {
	captchaUrl?: string | null;
}

const Login: React.FC<LoginFormProps> = ({ captchaUrl }) => {
	const dispatch = useAppDispatch();
	const [errorMessages, setErrorMessages] = useState<string[] | null>(null);

	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm<LoginDataRequest>({
		mode: 'onChange',
		defaultValues: {
			username: '',
			password: '',
			rememberMe: false,
			captcha: '',
		},
	});

	const onSubmit: SubmitHandler<LoginDataRequest> = async (data) => {
		setErrorMessages((await dispatch(login(data))) || null);
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
					Sign in
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3}>
						<Grid size={{xs: 12}}>
							<TextField
								label="Email Address"
								type="email"
								fullWidth
								required
								variant="outlined"
								{...register('username', {
									required: authErrors.EMAIL_IS_REQUIRED,
									pattern: {
										value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
										message: authErrors.INVALID_EMAIL,
									},
									maxLength: {
										value: 30,
										message: authErrors.MAX_LENGTH_30,
									},
									onBlur: () => trigger('username'),
								})}
								error={!!errors.username}
								helperText={errors.username?.message}
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
									onBlur: () => trigger('password'),
								})}
								error={!!errors.password}
								helperText={errors.password?.message}
							/>
						</Grid>

						<Grid size={{xs: 12}}>
							<FormControlLabel
								control={<Checkbox {...register('rememberMe')} />}
								label="Remember Me"
							/>
						</Grid>

						{captchaUrl && (
							<>
								<Grid size={{xs: 12}}>
									<img src={captchaUrl} alt="CAPTCHA" />
								</Grid>
								<Grid size={{xs: 12}}>
									<TextField
										label={locate.auth.captchaPlaceholder}
										fullWidth
										{...register('captcha', {
											required: authErrors.CAPTCHA_IS_REQUIRED,
											onBlur: () => trigger('captcha'),
										})}
										error={!!errors.captcha}
										helperText={errors.captcha?.message}
									/>
								</Grid>
							</>
						)}

						{errorMessages && (
							<Grid size={{xs: 12}}>
								<Typography color="error" variant="body2">
									{errorMessages.join(', ')}
								</Typography>
							</Grid>
						)}

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
								Sign In
							</Button>
						</Grid>

						<Grid size={{xs: 12}} display="flex" justifyContent="space-between">
							<Link to="#" style={{ textDecoration: "none", color: 'rgb(208, 92, 92)' }} >
								Forgot password?
							</Link>
							<Link to="/register" style={{ textDecoration: "none", color: 'rgb(208, 92, 92)' }}>
								Sign up
							</Link>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Container>
	);
};

export default Login;
