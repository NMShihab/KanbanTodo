import "./App.css";
import TaskContainer from "./components/TaskContainer/TaskContainer";

import useTask from "./hooks/useTask";

function App() {
  const { completedTaskList, newTaskList, onGoingTaskList } = useTask();

  return (
    <div className="w-screen h-screen overflow-x-hidden gradient-bg">
      <div className="mt-2 text-center text-white font-extrabold text-2xl">
        TO DO LIST
      </div>
      <div className="flex justify-around h-fit pt-10">
        <TaskContainer data={newTaskList} title="New" />
        <TaskContainer data={onGoingTaskList} title="Ongoing" />
        <TaskContainer data={completedTaskList} title="Done" />
      </div>
    </div>
  );
}

export default App;
