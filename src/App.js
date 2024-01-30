import React, { useState } from "react";
import { addTodo, todoCompalete, deleteFunc } from "./components/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import "./css.css";
const App = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [mm, setMm] = useState("");
  const [dd, setDd] = useState("");
  const [yy, setYy] = useState("");
  const [dateF, setDateF] = useState(false);

  const todos = useSelector((state) => state.todos);

  const eventFunc = (event) => {
    setText(event.target.value);
  };

  const monthfunc = (event) => {
    setMm(event.target.value);
  };
  const dayfunc = (event) => {
    setDd(event.target.value);
  };
  const yearfunc = (event) => {
    setYy(event.target.value);
  };
  const TitleEventFunc = (event) => {
    setTitle(event.target.value);
  };

  const handleToggleComplete = (id) => {
    dispatch(todoCompalete(id));
  };

  const handleAddFunc = () => {
    if (text !== "") {
      dispatch(addTodo({ title, text, mm, dd, yy }));
      setTitle("");
      setText("");
      setMm("");
      setDd("");
      setYy("");
      setDateF(false);
    } else if (text === "") {
      setDateF(true);
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteFunc(id));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <div className="inputcontainer">
        <input
          placeholder="Title..."
          className="titleinput"
          value={title}
          onChange={TitleEventFunc}
        />
        <input
          placeholder="Text..."
          className="textinput"
          value={text}
          onChange={eventFunc}
        />
      </div>

      <button onClick={handleAddFunc} className="addbutton">
        Add
      </button>

      <div className="date">
        <input
          placeholder="mm"
          value={mm}
          onChange={monthfunc}
          type="number"
          max={12}
          min={1}
        />
        <input
          placeholder="dd"
          value={dd}
          onChange={dayfunc}
          type="number"
          max={31}
          min={1}
        />
        <input
          placeholder="yy"
          value={yy}
          onChange={yearfunc}
          type="number"
          max={2034}
          min={2024}
        />
      </div>
      <div className="mapdiv"></div>

      {todos.map((todo) => (
        <>
          <li key={todo.id}>
            <div
              className="mapdiv2"
              style={{
                backgroundColor: todo.completed ? "green" : "transparent",
              }}
            >
              <div className="mappeditems">
                <div className="titlemapdiv">{todo.title}</div>
                <div className="textmapdiv">{todo.text}</div>
                <div className="mappeddate">
                  {todo.mm}-{todo.dd}-{todo.yy}
                </div>
              </div>

              <button
                onClick={() => handleToggleComplete(todo.id)}
                className="complatedbutton"
              >
                Complated
              </button>
              <button onClick={() => handleDeleteTodo(todo.id)}>
                {" "}
                Delete{" "}
              </button>
            </div>
          </li>
        </>
      ))}
      {dateF && (
        <p
          style={{
            marginRight: "750px",
            maginTop: "-500px",
            color: "red",
          }}
        >
          Note Not Found
        </p>
      )}
    </div>
  );
};
export default App;
