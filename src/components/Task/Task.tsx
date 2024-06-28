import { ITask } from "../../types/task";
import { MouseEvent } from "react";
import useTask from "../../hooks/useTask";

const Task = ({ task }: { task: ITask }) => {
  const { setPositionData } = useTask();

  const handleContextMenu = (
    e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    const { pageX, pageY, screenX, screenY } = e;
    console.log({ pageX, pageY, screenX, screenY });
    setPositionData({
      posX: pageX,
      posY: pageY,
      visible: true,
      taskId: task.id,
      taskStatus: task.status,
    });
  };
  return (
    <div
      className="bg-white rounded-lg h-35 relative"
      id={`${task.id}`}
      onContextMenu={(e) => handleContextMenu(e)}
      onClick={() =>
        setPositionData({
          posX: 0,
          posY: 0,
          visible: false,
          taskId: 0,
          taskStatus: "NEW",
        })
      }
    >
      <div className="p-2">
        <div>
          <h3 className="text-base font-bold">{task.title}</h3>
        </div>
        <p className="text-sm">{task.description}</p>
        <div className={`w-full flex justify-end`}>
          <span
            className={`text-xs font-bold p-2 rounded-lg ${
              task.status === "NEW"
                ? "text-blue-600"
                : task.status === "ONGOING"
                ? "text-yellow-600"
                : "text-green-600"
            }`}
          >
            {task.status}
          </span>
        </div>
      </div>

      <div />
    </div>
  );
};

export default Task;
