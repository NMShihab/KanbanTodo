import { ITask } from "./task";

export interface IDataContext {
  data: ITask[];
  setData: React.Dispatch<React.SetStateAction<ITask[]>>;
  newTaskList: ITask[];
  onGoingTaskList: ITask[];
  completedTaskList: ITask[];
  positionData: IContextData;
  setPositionData: React.Dispatch<React.SetStateAction<IContextData>>;
}

export interface IContextData {
  visible: boolean;
  posX: number;
  posY: number;
  taskId: number;
  taskStatus: "NEW" | "ONGOING" | "DONE";
}
