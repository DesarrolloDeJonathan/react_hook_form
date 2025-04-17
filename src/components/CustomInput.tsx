import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css'
import { FormValues } from "../models";

/** Antes del cambio:
  1. Problemas con name: string:
  - Usar string como tipo para name permitía cualquier cadena, incluso aquellas que no correspondían a las claves válidas del objeto FormValues. Esto podía causar errores en tiempo de ejecución si se pasaba un nombre de campo inválido.
  - No había una relación directa entre el nombre del campo (name) y los valores definidos en el modelo del formulario (FormValues).
  
  2. Problemas con control: <any>:
  - Usar any desactiva el sistema de tipos de TypeScript, lo que elimina las ventajas de la verificación de tipos.
  - Además, el uso de any genera advertencias o errores si tienes configurado eslint con la regla no-explicit-any, como se menciona en el enlace que compartiste.
*/

/** Después del cambio
  1. name: keyof FormValues: 
  - Ahora, name está restringido a las claves definidas en el modelo FormValues. Esto asegura que solo se puedan usar nombres de campo válidos, eliminando posibles errores en tiempo de ejecución.
  - Por ejemplo, si FormValues tiene las claves firstName y lastName, name solo podrá ser "firstName" o "lastName". Cualquier otro valor generará un error en tiempo de compilación.

  2. control: Control<FormValues>:
  - Cambiar control de any a Control<FormValues> asegura que el componente esté correctamente tipado y compatible con react-hook-form.
  - Esto permite que TypeScript valide que el control pasado al componente corresponde al modelo FormValues, mejorando la integración con la biblioteca y evitando errores.
 * 
 */
/** Motivo del cambio

  1. Resolver el error de ESLint (no-explicit-any):
  Reemplazar any con un tipo específico (Control<FormValues>) elimina la advertencia y mejora la calidad del código.

  2. Mejorar la seguridad de tipos:
  Usar keyof FormValues y Control<FormValues> asegura que el componente sea más robusto y menos propenso a errores, ya que ahora está estrictamente vinculado al modelo del formulario.

  3. Alinear el componente con las mejores prácticas:
  Este cambio sigue las mejores prácticas de TypeScript y react-hook-form, haciendo que el componente sea más reutilizable y fácil de mantener.
  
En resumen, el cambio fue necesario para corregir errores de tipo, cumplir con las reglas de ESLint y mejorar la calidad del código al aprovechar las capacidades de TypeScript para garantizar la seguridad de tipos.
 */


interface Props {
  // name: string; // Changed from keyof FormValues to string to avoid type issues
  // control: Control<any>; // Changed from Control<FormValues> to Control<any> to avoid type issues
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