import { ITask } from "../../types/task";
import useContextMenu from "../../hooks/useContextMenu";
import CustomContextMenu from "../ContextMenu/CustomContextMenu";

const Task = ({ task }: { task: ITask }) => {
  const { menuItems } = useContextMenu();
  return (
    <div className="bg-white rounded-lg h-35 relative" id={`${task.id}`}>
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
      <CustomContextMenu
        targetId={task.id}
        options={menuItems.filter((item) => item.label !== task.status)}
        classes={{
          listWrapper: "customContextmenuArea3ListWrapper",
          listItem: "customContextmenuArea3ListItem",
        }}
      />

      <div />
    </div>
  );
};

export default Task;
