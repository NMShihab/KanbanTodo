import useTask from "./useTask";

const useContextMenu = () => {
  const { setData, data, positionData, setPositionData } = useTask();

  const handleMove = (section: "NEW" | "ONGOING" | "DONE", id: number) => {
    const task = data.find((task) => task.id === id);
    const filteredData = data.filter((task) => task.id !== id);

    if (task) {
      task.status = section;
      setData([...filteredData, task]);
    }
    setPositionData({
      posX: 0,
      posY: 0,
      taskId: 0,
      taskStatus: "NEW",
      visible: false,
    });
  };

  const menuItems: {
    label: "NEW" | "ONGOING" | "DONE";
    onClick: (id: number) => void;
  }[] = [
    {
      label: "NEW",
      onClick: (id: number) => {
        handleMove("NEW", id);
      },
    },
    {
      label: "ONGOING",
      onClick: (id: number) => {
        handleMove("ONGOING", id);
      },
    },
    {
      label: "DONE",
      onClick: (id: number) => {
        handleMove("DONE", id);
      },
    },
  ];

  return {
    menuItems,
    positionData,
    setPositionData,
  };
};

export default useContextMenu;
