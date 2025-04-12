import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

// schema es el esquema de validación que estamos usando para validar el formulario, en este caso estamos usando zod para validar el formulario
// zod es una librería de validación de esquemas que nos permite definir un esquema de validación y luego usarlo para validar los datos del formulario
const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(5, 'Password must be at least 5 characters long'),
  confirmPassword: z.string().min(5, 'Confirm password must be the same as above'),
  // age: z.number().min(18, 'You must be at least 18 years old'),
  // abajo usaremos una prop para comparar los passwords
  // refine es una función que nos permite definir una validación personalizada, en este caso estamos comparando el password y el confirmPassword
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
})

// FormValues es el tipo de datos que estamos usando para el formulario, en este caso es un objeto con las propiedades name, email, password y confirmPassword
// z.infer es una función que nos permite inferir el tipo de datos a partir del esquema de validación, en este caso estamos usando zod para validar el formulario
type FormValues = z.infer<typeof schema>;

const CustomForm = () => {
  // control es el objeto que contiene los métodos para manejar el formulario
  // handleSubmit es la función que se llama al enviar el formulario, es decir al hacer submit en el form
  // formState es el estado del formulario, contiene información sobre los errores, si el formulario ha sido enviado, etc. dentro de formState tenemos errors que es un objeto que contiene los errores de validación del formulario, también podemos usar isSubmitting para saber si el formulario está siendo enviado o no, isValid para saber si el formulario es válido o no, isDirty para saber si el formulario ha sido modificado o no, isSubmitSuccessful para saber si el formulario ha sido enviado con éxito o no, etc. isDirty es un booleano que indica si el formulario ha sido modificado o no, isValid es un booleano que indica si el formulario es válido o no, isSubmitting es un booleano que indica si el formulario está siendo enviado o no, isSubmitSuccessful es un booleano que indica si el formulario ha sido enviado con éxito o no, submitCount es el número de veces que se ha enviado el formulario, dirtyFields es un objeto que contiene los campos que han sido modificados, touchedFields es un objeto que contiene los campos que han sido tocados, errors es un objeto que contiene los errores de validación del formulario. dirtyFields es un objeto que contiene los campos que han sido modificados, touchedFields es un objeto que contiene los campos que han sido tocados, errors es un objeto que contiene los errores de validación del formulario, isValidating es un booleano que indica si el formulario está siendo validado o no, isSubmitting es un booleano que indica si el formulario está siendo enviado o no, isSubmitSuccessful es un booleano que indica si el formulario ha sido enviado con éxito o no, submitCount es el número de veces que se ha enviado el formulario, dirtyFields es un objeto que contiene los campos que han sido modificados, touchedFields es un objeto que contiene los campos que han sido tocados,
  // errors es un objeto que contiene los errores de validación del formulario
  // useForm es el hook que se encarga de manejar el formulario, es decir, crear el formulario y manejar su estado
  // FormValues es el tipo de datos que estamos usando para el formulario, en este caso es un objeto con las propiedades name, email, password y confirmPassword
  // resolver es la función que se encarga de validar el formulario, en este caso estamos usando zod para validar el formulario
  // zodResolver es la función que se encarga de convertir el esquema de zod en un objeto que react-hook-form puede entender, resuelve zod en este caso asignando dentro de schema.
  const {control, handleSubmit, formState: { errors }} = useForm<FormValues>({
    resolver: zodResolver(schema),
  })
  // onSubmit es la función que se llama al enviar el formulario, es decir al hacer submit en el form
  // SubmitHandler es el tipo de datos que estamos usando para el formulario, en este caso es un objeto con las propiedades name, email, password y confirmPassword
  // data es el objeto que contiene los datos del formulario, en este caso es un objeto con las propiedades name, email, password y confirmPassword
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  }

  // handleSubmit es la función que se llama al enviar el formulario, es decir al hacer submit en el form
  // onSubmit es la función que se llama al enviar el formulario, es decir al hacer submit en el form
  // Cotroller es el componente que se encarga de manejar el estado del formulario, es decir, crear el formulario, manejar su estado y relacionar al input con nuestro formulario
  // render es la función que se encarga de renderizar el componente, en este caso estamos usando un input para renderizar el campo name
  return (
    <form onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg shadow-md w-1/2 mx-auto mt-10">
        <div className='form-group'>
          <label htmlFor="name">Name</label>
          {/* Controller es el componente que se encarga de manejar el estado del formulario, es decir, crear el formulario, manejar su estado y relacionar al input con nuestro formulario */}
          {/* render es la función que se encarga de renderizar el componente, en este caso estamos usando un input para renderizar el cada campo */}
          {/* input desestructura el parámetro fiel para obtener los datos y validarlos para que en caso de error se muestre un mensaje de error, este a su vez va a ser controlado por el formulario*/}
          <Controller
            name="name" 
            control={control}
            render={({ field }) => (
              <input 
              {...field}
              id="name"
              type="string"
              placeholder="Enter your name" 
              className={`border form-control ${errors.name ? '"is not valid"border-red-500' : '" "border-gray-300'} rounded-md p-2 w-full` }
              />
            )}
          />
          {/* el problema con lo que acabamos de crear es que vamos a tener que replicar este fragmento de código lo que puede complicar su legibilidad
          por lo que vamos a crear un componente reusable para el input, de esta forma vamos a poder reutilizar el código y hacer que sea más legible */}
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
    </form>      
    )
}