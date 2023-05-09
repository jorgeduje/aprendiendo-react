import { Link } from "react-router-dom";
import InputComponent from "./InputComponent";
import { login } from "../store/authSlice";
import { useDispatch } from "react-redux";



export const Login = () => {

  let nombre = "juan"
  let edad = 22

  const dispatch  = useDispatch()

  

  return (
    <>
      <h1>Este es el login</h1>
      <InputComponent nombre={nombre} edad={edad} />
      <Link to="/">Volver al home</Link>

      <button onClick={()=>dispatch( login({nombre: "pepe", apellido: "perez"}) )}>Ingresar</button>
    </>
  );
};
