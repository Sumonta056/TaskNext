const TodoData = () => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        1
      </th>
      <td className="px-6 py-4">Study</td>
      <td className="px-6 py-4">Learn NextJS</td>
      <td className="px-6 py-4">Pending</td>
      <td className="px-6 py-4 flex gap-3">
        <button className="px-4 py-2 bg-red-500 text-white">Delete</button>
        <button className="px-4 py-2 bg-green-500 text-white">Done</button>
      </td>
    </tr>
  );
};

export default TodoData ;
