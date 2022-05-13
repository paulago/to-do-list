import "./todoList.css";

const TodoList = (props) => {
  return (
    <>
      <ul>
        {props.tasks.map(function renderItem(text, index) {
          return (
            <>
              <li key={index}>{text}</li>
              <button
                onClick={() => {
                  props.onRemoveTask(index);
                }}
              >
                Delete
              </button>
            </>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
