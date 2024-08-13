import React from "react";
import { ObjectId } from "mongodb";

interface TodoDataProps {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  mongoID: ObjectId;
  deleteTodo: (id: ObjectId) => void; // Add deleteTodo function to props
}

const TodoData = ({
  id,
  title,
  description,
  isCompleted,
  mongoID,
  deleteTodo,
}: TodoDataProps) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {id + 1}
      </th>
      <td className="px-6 py-4">{title}</td>
      <td className="px-6 py-4">{description}</td>
      <td className="px-6 py-4">{isCompleted ? "Completed" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-3">
        <button
          className="px-4 py-2 bg-red-500 text-white"
          onClick={() => deleteTodo(mongoID)} // Call deleteTodo with mongoID
        >
          Delete
        </button>
        <button className="px-4 py-2 bg-green-500 text-white">Done</button>
      </td>
    </tr>
  );
};

export default TodoData;
