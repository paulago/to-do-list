import "./App.css";
import TodoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";
import { useState } from "react";

function App() {
  // El estado list nos va a servir para almacenar las tareas. El estado por defecto es un array vacío.
  const [list, setList] = useState([]);

  // La función handleAddTask recibe una tarea por parámetro y las añade al estado.
  const handleAddTask = (task) => {
    // Tenemos que clonar list ya que no podemos alterar directamente un array que está en el state. Tenemos que alterarlo con el set.
    // Hacemos una copia de list. Y con push añadimos la tarea al final del array _list.
    const _list = [...list];
    _list.push(task);
    setList(_list);
  };

  // splice() cambia el contenido del array list eliminando elementos existentes.
  const handleDeleteTask = (task) => {
    const updateList = [...list];
    updateList.splice(task, 1);
    setList(updateList);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <TodoForm placeholder="Write a task" onAddTask={handleAddTask} />
      <TodoList tasks={list} onRemoveTask={handleDeleteTask} />
    </div>
  );
}

export default App;
