import { Link } from "react-router-dom";

const Home = () => {
  let nombre = "pepito";

  return (
    <div>
      <Link to="/login">Iniciar sesion</Link>
      <h1 style={{ color: "red" }}>Hola {nombre}</h1>
    </div>
  );
};

export default Home;
