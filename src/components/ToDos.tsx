import React from "react";
import { Todos } from "../Models/todos";
import SingleTask from "./SingleTask";

interface Props {
  todo: Todos[];
  setTodo: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const ToDos: React.FC<Props> = ({ todo, setTodo }) => {
  return (
    <div className="w-full grid justify-items-center gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto md:h-[20rem] overflow-y-auto">
      {todo.length === 0 ? (
        <h2 className="text-center self-center mx-auto text-2xl font-bold font-mono" >No Tasks Yet ...</h2>
      ) : (
        todo.map((data, index) => (
          <SingleTask key={index} data={data} todo={todo} setTodo={setTodo} />
        ))
      )}
    </div>
  );
};

export default ToDos;
