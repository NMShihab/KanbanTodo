import { ITask } from "./task";

export interface IDataContext {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
  newTaskList: ITask[];
  onGoingTaskList: ITask[];
  completedTaskList: ITask[];
}
