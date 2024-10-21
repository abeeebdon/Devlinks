import { object, string } from 'yup'

export const LoginValidationSchema = object({
  email: string()
    .email('Please enter a valid email address')
    .required('Please enter your email'),
  password: string()
    .required('Please enter your password')
    .min(8, 'Password must be eight characters'),
})
