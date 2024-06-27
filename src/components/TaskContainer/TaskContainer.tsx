import { useState } from "react";
import { ITask } from "../../types/task";
import AddTask from "../Task/AddTask";
import Task from "../Task/Task";
import AddIcon from "./assets/Add.svg";

const TaskContainer = ({
  data,
  title,
}: {
  data: ITask[];

  title: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-72 glass h-fit rounded">
      <div className="p-4 h-fit">
        <div className="flex justify-between items-center mb-2">
          <div className="font-bold font-xl">{title}</div>
          {title === "New" && (
            <img
              src={AddIcon}
              alt="add"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
        {isOpen && (
          <div className="mt-2">
            <AddTask setIsOpen={setIsOpen} />
          </div>
        )}

        <div className="flex flex-col gap-2 mt-2">
          {data.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskContainer;
