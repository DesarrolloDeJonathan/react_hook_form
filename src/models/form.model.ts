import { z } from 'zod';

export const schema = z.object({
  name: z.string().min(5, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
  confirmPassword: z.string().min(5, 'Confirm password must be the same as above'),  
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

export type FormValues = z.infer<typeof schema>;

