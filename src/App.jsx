import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
const App = () => {

  const hoidanit = "Eric";
  const age = 25;
  const data = {
    address: "hanoi",
    country: "vietnam"
  }
  return (
    <div className="todo-container">
      <div className="todo-title">ToDo List</div>
      <TodoNew />
      <TodoData
        name={hoidanit}
        age={age}
        data={data}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  );
};
export default App;
