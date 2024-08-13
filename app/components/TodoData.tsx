import { ObjectId } from "mongodb";

interface TodoDataProps {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
  mongoID: ObjectId;
  deleteTodo: (id: ObjectId) => void;
  completeTodo: (id: ObjectId) => void;
}

const TodoData = ({
  id,
  title,
  description,
  isCompleted,
  mongoID,
  deleteTodo,
  completeTodo,
}: TodoDataProps) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {id + 1}
      </th>
      <td className={`px-6 py-4 ${isCompleted ? "line-through" : ""}`}>
        {title}
      </td>
      <td className={`px-6 py-4 ${isCompleted ? "line-through" : ""}`}>
        {description}
      </td>
      <td className={`px-6 py-4 ${isCompleted ? "line-through" : ""}`}>
        {isCompleted ? "Completed" : "Pending"}
      </td>
      <td className="px-6 py-4 flex gap-3">
        <button
          className="px-4 py-2 bg-red-500 text-white"
          onClick={() => deleteTodo(mongoID)} // Call deleteTodo with mongoID
        >
          Delete
        </button>
        <button
          className={`px-4 py-2 text-white ${
            isCompleted ? "bg-gray-500" : "bg-green-500"
          }`}
          onClick={() => completeTodo(mongoID)} // Call completeTodo with mongoID
          disabled={isCompleted} // Disable button if isCompleted is true
        >
          Done
        </button>
      </td>
    </tr>
   
  );
};

export default TodoData;
