import { useState } from "react";
import styles from "./Register.module.css";
import {  useNavigate } from "react-router-dom";

const Register = () => {

  const navigate = useNavigate()

  const [userData, setUserData] = useState({ nombre: "", apellido: "" });

  const enviarFormulario = (event) => {
    event.preventDefault();

    // EL ENVIO DE LOS DATOS AL BACKEND
    console.log(userData.nombre);
    console.log(userData["apellido"]);
    navigate("/login")
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={enviarFormulario}>
        <input
          name="nombre"
          type="text"
          placeholder="ingresa tu nombre"
          onChange={handleChange}
        />
        <input
          name="apellido"
          type="text"
          placeholder="ingresa tu apellido"
          onChange={handleChange}
        />
        <button type="submit">Crear</button>
        <button type="button" onClick={()=>navigate("/")}>Regresar</button>
        {/* <Link to="/">cancelar</Link> */}
      </form>
    </div>
  );
};

export default Register;
