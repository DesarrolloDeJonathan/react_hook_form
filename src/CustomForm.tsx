import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import InputForm from './components/components/CustomInput';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(5, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
  confirmPassword: z.string().min(5, 'Confirm password must be the same as above'),  
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
  const {control, handleSubmit, formState: { errors }} = useForm<FormValues>({
    resolver: zodResolver(schema),
  })
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm name="name" control={control} label="Name" type="text" error={errors.name}/>
      <InputForm name="email" control={control} label="Email" type="email" error={errors.email}/>
      <InputForm name="password" control={control} label="Password" type="password" error={errors.password}/>
      <InputForm name="confirmPassword" control={control} label="Confirm Password" type="password" error={errors.confirmPassword}/>
      <button type="submit">Submit</button>
    </form>      
    )
}

export default CustomForm;