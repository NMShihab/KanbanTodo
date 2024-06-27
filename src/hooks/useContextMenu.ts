import { MouseEvent, useRef, useState } from "react";
import useTask from "./useTask";

const useContextMenu = () => {
  const { setData, data } = useTask();
  // console.log("data", data);
  const contextMenuRef = useRef<HTMLUListElement>(null);

  // State to manage the position of the context menu
  const [menuPosition, setMenuPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [menuVisible, setMenuVisible] = useState(false);

  const handleRightClick = (event: MouseEvent) => {
    event.preventDefault();

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const menuWidth = contextMenuRef.current
      ? contextMenuRef.current.offsetWidth
      : 150;
    const menuHeight = contextMenuRef.current
      ? contextMenuRef.current.offsetHeight
      : 100;

    let x = event.pageX;
    let y = event.pageY;

    if (x + menuWidth > viewportWidth) {
      x = viewportWidth - menuWidth;
    }
    console.log("y", y);
    console.log("x", x);
    console.log("viewportWidth", viewportWidth);
    if (y + menuHeight > viewportHeight) {
      y = viewportHeight - menuHeight;
    }

    setMenuPosition({ x, y });
    setMenuVisible(true);
  };

  const handleClick = () => {
    setMenuVisible(false);
  };

  const handleMove = (section: "NEW" | "ONGOING" | "DONE", id: number) => {
    const task = data.find((task) => task.id === id);
    const filteredData = data.filter((task) => task.id !== id);

    if (task) {
      task.status = section;
      setData([...filteredData, task]);
    }
    setMenuVisible(false);
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
    menuPosition,
    menuVisible,
    menuItems,
    handleRightClick,
    handleClick,
    contextMenuRef,
    setMenuPosition,
    setMenuVisible,
  };
};

export default useContextMenu;
