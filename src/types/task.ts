export interface ITask {
  id: number;
  title: string;
  description: string;
  status: "NEW" | "ONGOING" | "DONE";
}
