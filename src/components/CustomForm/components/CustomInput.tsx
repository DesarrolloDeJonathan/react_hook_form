import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
  error?: FieldError;  
}

// This component is a custom input form that uses react-hook-form for form handling and validation. It takes in props such as name, control, label, type, and error to create a controlled input field with validation error messages.
// Creamos un componente reusable para los inputs del formulario. Este componente recibe las propiedades necesarias para funcionar con react-hook-form y se encarga de renderizar el input y el mensaje de error en caso de que haya uno. Esto nos permite tener un código más limpio y fácil de mantener.
const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name} 
        control={control}
        render={({ field }) => (
          <input 
            {...field}
            id={name}
            type={type}
            placeholder="Enter your name" 
            className={`border form-control ${error ? '"is not valid"border-red-500' : '" "border-gray-300'} rounded-md p-2 w-full` }
          />
        )}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default InputForm;
// This component is a custom input form that uses react-hook-form for form handling and validation. It takes in props such as name, control, label, type, and error to create a controlled input field with validation error messages.