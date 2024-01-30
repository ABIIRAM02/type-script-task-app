import React, { useRef, useState } from "react";
import { Todos } from "../Models/todos";

import { MdDone } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { BsJournalCheck } from "react-icons/bs";

interface Props {
  data: Todos;
  todo: Todos[];
  setTodo: React.Dispatch<React.SetStateAction<Todos[]>>;
}

const SingleTask: React.FC<Props> = ({ data, todo, setTodo }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editInput, setEditInput] = useState<string>(data.task);

  const handleOnDelete = (id: number) => {
    const newData = todo.filter((data) => data.id !== id);
    setTodo(newData);
  };

  const handleOnDone = (id: number) => {
    const newData = todo.filter((data) =>
      data.id === id ? (data.isDone = true) : data
    );
    setTodo(newData);
  };

  const handleOnEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodo(
      todo.map((data) => (data.id === id ? { ...data, task: editInput } : data))
    );
    setIsEdit(false);
  };

  return (
    <div className="bg-myYellow w-2/3 rounded-xl overflow-hidden h-[8rem] flex flex-col items-center ">
      {data.isDone ? (
        <del className="line-clamp-2 overflow-hidden my-auto text-center p-1 font-semibold">
          {data.task}
        </del>
      ) : isEdit ? (
        <form className="my-auto" onSubmit={(e) => handleOnEdit(e, data.id)}>
          <input
            defaultValue={editInput}
            onChange={(e) => {
              setEditInput(e.target.value);
            }}
            className="border-2 outline-none line-clamp-2 overflow-hidden my-auto text-center p-1 font-semibold"
            type="text"
          />
          <button hidden type="submit" />
        </form>
      ) : (
        <h2 className="line-clamp-2 overflow-hidden my-auto text-center p-1 font-semibold">
          {data.task}
        </h2>
      )}
      <div className="flex justify-evenly mt-auto w-full bg-red-300 p-2 text-xl text-gray-600">
        {isEdit
          ? !data.isDone && (
              <BsJournalCheck
                className="cursor-pointer"
                onClick={(e) => handleOnEdit(e, data.id)}
              />
            )
          : !data.isDone && (
              <MdOutlineModeEdit
                onClick={() => setIsEdit(true)}
                className="cursor-pointer"
              />
            )}
        <MdDeleteOutline
          onClick={() => handleOnDelete(data.id)}
          className="cursor-pointer"
        />
        {!data.isDone && (
          <MdDone
            onClick={() => handleOnDone(data.id)}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default SingleTask;
