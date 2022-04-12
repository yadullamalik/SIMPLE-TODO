import "./Todo.css";

export const TodoList = ({ todo, handleStatus }) => {
  console.log("todo:", todo);
  return (
    <div>
      <div className="todolist">
        <h1>{todo.title}</h1>
        <div
          className="btndiv"
          style={
            todo.status
              ? { backgroundColor: "lightgreen" }
              : { backgroundColor: "red" }
          }
        >
          <button
            className="btn"
            onClick={() => handleStatus(todo.id)}
          ></button>
        </div>
      </div>
    </div>
  );
};
