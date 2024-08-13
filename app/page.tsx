"use client";
import { useEffect, useState } from "react";
import TodoData from "./components/TodoData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ObjectId } from "mongodb";
import { IconCloudDemo } from "./components/Tweek";

// Define the Todo interface
interface Todo {
  _id: ObjectId; // MongoDB ObjectId
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

export default function Home() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // Use the Todo interface to type the todos state
  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const response = await axios.get("/api");
      setTodos(response.data.todos);
    } catch (err) {
      toast.error("Failed to fetch Todos");
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const deleteTodo = async (mongoID: ObjectId) => {
    try {
      const response = await axios.delete("/api", {
        params: { mongoID },
      });
      toast.success(response.data.msg);
      await fetchTodos();
    } catch (err) {
      toast.error("Failed to delete Todo");
    }
  };

  const completeTodo = async (mongoID: ObjectId) => {
    try {
      const response = await axios.put(
        "/api",
        {},
        {
          params: { mongoID },
        }
      );
      toast.success(response.data.msg);
      await fetchTodos();
    } catch (err) {
      toast.error("Failed to complete Todo");
    }
  };

  const onChangeHandler = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((form) => ({ ...form, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api", formData);
      toast.success(response.data.msg);
      setFormData({ title: "", description: "" });
      await fetchTodos();
    } catch (err) {
      toast.error("Failed to add Todo");
    }
  };

  return (
    <>
      <ToastContainer theme="dark" />
      <div className="flex items-center mx-auto">
        <div className="flex flex-col w-1/3 justify-center mx-auto px-4 py-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconCloudDemo />
          </div>
          <form
            onSubmit={onSubmitHandler}
            className="flex items-start flex-col gap-2 mt-5 px-5"
          >
            <input
              value={formData.title}
              type="text"
              name="title"
              placeholder="Enter Title"
              className="px-3 py-2 border-2 w-full"
              onChange={onChangeHandler}
            />
            <textarea
              value={formData.description}
              name="description"
              placeholder="Enter Description"
              className="px-3 py-2 border-2 w-full"
              onChange={onChangeHandler}
            />
            <button
              type="submit"
              className="px-11 py-2 bg-orange-600 text-white"
            >
              Add Todo
            </button>
          </form>
        </div>

        <div className="relative overflow-x-auto w-[60%] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-4">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.map((item, index) => (
                <TodoData
                  id={index}
                  key={index}
                  title={item.title}
                  description={item.description}
                  isCompleted={item.isCompleted}
                  mongoID={item._id}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
