import "./App.css";
import CustomContextMenu from "./components/ContextMenu/CustomContextMenu";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import useContextMenu from "./hooks/useContextMenu";

import useTask from "./hooks/useTask";

function App() {
  const {
    completedTaskList,
    newTaskList,
    onGoingTaskList,
    positionData,
    setPositionData,
  } = useTask();
  const { menuItems } = useContextMenu();

  return (
    <div
      className="w-screen h-screen overflow-x-hidden gradient-bg"
      onClick={() =>
        setPositionData({
          posX: 0,
          posY: 0,
          taskId: 0,
          taskStatus: "NEW",
          visible: false,
        })
      }
    >
      <div className="mt-2 text-center text-white font-extrabold text-2xl">
        TO DO LIST
      </div>
      <div className="flex justify-around h-fit pt-10">
        <TaskContainer data={newTaskList} title="New" />
        <TaskContainer data={onGoingTaskList} title="Ongoing" />
        <TaskContainer data={completedTaskList} title="Done" />
      </div>
      <CustomContextMenu
        targetId={positionData.taskId}
        options={menuItems.filter(
          (item) => item.label !== positionData.taskStatus
        )}
      />
    </div>
  );
}

export default App;
