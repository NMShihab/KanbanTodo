import React, { useState } from "react";
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

  const [error, setError] = useState(false);

  const handleAddTask = () => {
    if (task.title.length === 0) {
      setError(true);
    } else if (task.description.length === 0) {
      setError(true);
    } else {
      setData([...data, task]);
      setTask({
        id: data.length + 1,
        title: "",
        description: "",
        status: "NEW",
      });
      setIsOpen(false);
      setError(false);
    }
  };

  return (
    <div className="bg-white rounded-lg h-35">
      <div>
        <input
          type="text"
          placeholder="Task title"
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
      {error && (
        <p className="text-red-700 text-sm mb-2 text-center">
          Title or Description Can't Be Empty!
        </p>
      )}
      <div className={`w-full flex justify-between mb-2`}>
        <button
          className="bg-red-500 text-white py-1 px-4 rounded-lg ml-2 mb-2"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>

        <button
          className="bg-blue-500 text-white py-1 px-4 rounded-lg mr-2 mb-2"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
