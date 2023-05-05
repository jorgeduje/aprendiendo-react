import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterTwo = () => {
    
  let valores = { nombre: "", password: "" };

  let submitForm = (data) => {
    console.log(data);
  };

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: valores,
    onSubmit: submitForm,
    validationSchema: Yup.object().shape({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(5, "debe tener al menos 5 letras")
        .max(15),
      password: Yup.string().required("Este campo es obligatorio"),
    }),
    validateOnChange: false,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="nombre"
          type="text"
          placeholder="ingresa tu nombre"
          onChange={handleChange}
          style={{ backgroundColor: errors.nombre ? "red" : "" }}
        />
        <span>{errors.nombre}</span>
        <input
          name="password"
          type="text"
          placeholder="ingresa tu password"
          onChange={handleChange}
          style={{ backgroundColor: errors.password ? "red" : "" }}
        />
        <span>{errors.password}</span>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterTwo;
