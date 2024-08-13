import Todo from "./components/Todo";

export default function Home() {
  return (
    <>
      <form className="flex items-start flex-col gap-2 w-[80%] max-w-[600px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 w-full"
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 w-full"
        />
        <button type="submit" className="px-11 py-2 bg-orange-600 text-white">
          Add Todo
        </button>
      </form>

      <div className="relative overflow-x-auto mt-24 w-[60%] mx-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Task ID
              </th>
              <th scope="col" className="px-6 py-3">
                Task Name
              </th>
              <th scope="col" className="px-6 py-3">
                Task Description
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
