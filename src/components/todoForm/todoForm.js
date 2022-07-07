import "./todoForm.css";
import { useState } from "react";

// TodoForm recibe dos propiedades.
const TodoForm = (props) => {
  // useState nos devuelve un array que tendrá el valor del estado y un método para actualizar el estado.
  // Declaración de una variable de estado que se llama "input"
  const [input, setInput] = useState("");

  // event.target te da el elemento que desencadenó el evento.
  // La propiedad de value define el valor actual de la entrada y el controlador de eventos onChange actualiza el estado del componente con la entrada del usuario.
  // Podemos acceder al valor de un evento con event.target.value.
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(event.target.value);
  };

  // preventDefault evita que se ejecute la acción predeterminada en el envío de un formulario.
  // setInput("") limpia el input al enviar el form.
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTask(input); // llama a la propiedad con el valor del input.
    setInput("");
    console.log(input);
  };

  // onSubmit: Se encarga de ejecutar un determinado código al realizarse el envío de un formulario.
  // onChange: Un elemento ha sido modificado. Estará al pendiente de los cambios que se registren en el input.
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={input}
        onChange={handleChange}
      ></input>
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
