import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
const TodoGoster = ({ doing, setDoing }) => {

  //!eklediğim kod*******
  const deleteTodo = (id) => {
  localStorage.setItem(
    "todoList",
    JSON.stringify(doing.filter((i) => i.id !== id))
  );
 
  setDoing(JSON.parse(localStorage.getItem("todoList")));
  };

  return (
    <div>
      {doing.map((x) => (
        <div key={x.id} className={x.isDone ? "done" : "gorev"}>
          <h3>
            {x.text}

            <div>
              <FaCheckCircle
                onClick={() =>
                  setDoing(
                    doing.map((a) =>
                      a.id === x.id ? { ...a, isDone: !a.isDone } : a
                    )
                  )
                }
                style={{ color: "green", fontSize: "20px" }}
              />
              <MdDeleteForever
                onClick={() => deleteTodo(x.id)}
                style={{ color: "red", fontSize: "25px" }}
              />
            </div>
          </h3>
          <h6>{x.day} </h6>
        </div>
      ))}
    </div>
  );
};

export default TodoGoster;
