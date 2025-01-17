import { useContext } from "react";

import { DataContext } from "../context/DataContext";

const useTask = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("MyComponent must be used within a DataProvider");
  }
  const {
    data,
    setData,
    completedTaskList,
    newTaskList,
    onGoingTaskList,
    positionData,
    setPositionData,
  } = context;

  return {
    data,
    newTaskList,
    onGoingTaskList,
    completedTaskList,
    setData,
    positionData,
    setPositionData,
  };
};

export default useTask;
