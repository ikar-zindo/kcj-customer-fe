import { TextField } from '@mui/material';
import { UseFormRegister, RegisterOptions, Path, FieldValues } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
	label: string;
	name: Path<T>; // Используем Path<T> для строгой типизации
	type: string;
	required?: boolean;
	pattern?: RegExp;
	register: UseFormRegister<T>;
	rules?: RegisterOptions<T>; // Указываем правила валидации
	error?: boolean;
	helperText?: string;
	defaultValue?: string;
}

const FormField = <T extends FieldValues>({
	                                          label,
	                                          name,
	                                          type,
	                                          register,
	                                          rules,
	                                          error,
	                                          helperText,
	                                          defaultValue,
                                          }: FormFieldProps<T>) => {
	return (
		<TextField
			label={label}
			type={type}
			fullWidth
			variant="outlined"
			defaultValue={defaultValue}
			{...register(name, rules)} // Используем register с указанными правилами
			error={error}
			helperText={helperText}
		/>
	);
};

export default FormField;
