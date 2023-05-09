import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import UsersList from "./UsersList";

import styles from "./Home.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  let nombre = "pepito";

  const { isLogged } = useSelector((store) => store.authSlice);
  console.log(isLogged);

  const [contador, setContador] = useState(0); // setter
  const [contador2, setContador2] = useState(0); // setter

  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <Link to="/login">Iniciar sesion</Link>
      <Link to="/register">crear cuenta</Link>
      <h1 style={{ color: "red" }}>Hola {nombre}</h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>

      <h1>{contador2}</h1>
      <UsersList />
    </div>
  );
};

export default Home;
