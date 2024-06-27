import React from "react";
import useTask from "../../hooks/useTask";
import { ITask } from "../../types/task";

const AddTask = ({
  setIsOpen,
}: {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { data, setData } = useTask();
  const [task, setTask] = React.useState<ITask>({
    id: data.length + 1,
    title: "",
    description: "",
    status: "NEW",
  });

  const handleAddTask = () => {
    setData([...data, task]);
    setTask({
      id: data.length + 1,
      title: "",
      description: "",
      status: "NEW",
    });
    setIsOpen(false);
  };

  return (
    <div className="bg-white rounded-lg h-35">
      <div>
        <input
          type="text"
          placeholder="Add Task"
          className="w-full h-full p-2 border-none outline-none"
          onChange={(e) => setTask({ ...task, title: e.target.value })}
        />
      </div>
      <div>
        <textarea
          placeholder="Description"
          className="w-full h-full p-2 border-none outline-none"
          onChange={(e) => setTask({ ...task, description: e.target.value })}
        />
      </div>
      <div className={`w-full flex justify-end mb-2`}>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2 mb-2"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
