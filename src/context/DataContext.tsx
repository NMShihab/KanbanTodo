import React, { createContext, useEffect, useState } from "react";
import { ITask } from "../types/task";
import { IDataContext } from "../types/dataContext";
import { sampleData } from "../data/TaskData";

// Create the context
const DataContext = createContext<IDataContext | undefined>(undefined);

// Create a provider component
const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<ITask[]>(sampleData);
  const [newTaskList, setNewTaskList] = useState<ITask[]>([]);
  const [onGoingTaskList, setOnGoingTaskList] = useState<ITask[]>([]);
  const [completedTaskList, setCompletedTaskList] = useState<ITask[]>([]);

  useEffect(() => {
    const newTask = data.filter((task) => task.status === "NEW");
    const onGoingTask = data.filter((task) => task.status === "ONGOING");
    const completedTask = data.filter((task) => task.status === "DONE");

    setNewTaskList(newTask);
    setOnGoingTaskList(onGoingTask);
    setCompletedTaskList(completedTask);
  }, [data]);

  return (
    <DataContext.Provider
      value={{ data, setData, newTaskList, onGoingTaskList, completedTaskList }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
