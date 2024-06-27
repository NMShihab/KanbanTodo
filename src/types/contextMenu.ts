export interface IMenuItem {
  label: "NEW" | "ONGOING" | "DONE";
  onClick: (id: number) => void;
}

export interface IContextMenuProps {
  id: number;
  x: number;
  y: number;
  visible: boolean;
  items: IMenuItem[];
  onClose: () => void;
}
