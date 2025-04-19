import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css'
import { FormValues } from "../models";

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;  
}

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
            // placeholder="Enter your name" 
            className={`border form-control ${error ? '"is not valid"border-red-500' : '" "border-gray-300'} rounded-md p-2 w-full` }
          />
        )}
      />
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default InputForm;