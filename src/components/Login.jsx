import { Link } from "react-router-dom";
import InputComponent from "./InputComponent";

export const Login = () => {

  let nombre = "juan"
  let edad = 22

  return (
    <>
      <h1>Este es el login</h1>
      <InputComponent nombre={nombre} edad={edad} />
      <Link to="/">Volver al home</Link>
    </>
  );
};
