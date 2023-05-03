
const InputComponent = ( {nombre, edad} ) => {

    

  return (
    <div>
        <input type="text" placeholder="nombre" />
        <input type="text" placeholder="apellido" />

        <h2>{nombre}</h2>
        <h2>{edad}</h2>
    </div>
  )
}

export default InputComponent