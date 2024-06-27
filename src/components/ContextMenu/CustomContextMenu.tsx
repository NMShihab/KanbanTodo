import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { RightArrow } from "./assets/Icons";

const CustomContextMenu = ({
  targetId,
  options,
  classes,
}: {
  targetId: number;
  options: {
    label: "NEW" | "ONGOING" | "DONE";
    onClick: (id: number) => void;
  }[];
  classes: any;
}) => {
  const [contextData, setContextData] = useState({
    visible: false,
    posX: 0,
    posY: 0,
  });
  const contextRef = useRef(null);

  useEffect(() => {
    const contextMenuEventHandler = (event: any) => {
      const targetElement = document.getElementById(`${targetId}`);
      if (targetElement && targetElement.contains(event.target)) {
        event.preventDefault();
        setContextData({
          visible: true,
          posX: event.clientX,
          posY: event.clientY,
        });
      } else if (
        contextRef.current &&
        !contextRef.current.contains(event.target)
      ) {
        setContextData({ ...contextData, visible: false });
      }
    };

    const offClickHandler = (event: any) => {
      if (contextRef.current && !contextRef.current.contains(event.target)) {
        setContextData({ ...contextData, visible: false });
      }
    };

    document.addEventListener("contextmenu", contextMenuEventHandler);
    document.addEventListener("click", offClickHandler);
    return () => {
      document.removeEventListener("contextmenu", contextMenuEventHandler);
      document.removeEventListener("click", offClickHandler);
    };
  }, [contextData, targetId]);

  useLayoutEffect(() => {
    if (
      contextData.posX + contextRef.current?.offsetWidth >
      window.innerWidth
    ) {
      setContextData({
        ...contextData,
        posX: contextData.posX - contextRef.current?.offsetWidth,
      });
    }
    if (
      contextData.posY + contextRef.current?.offsetHeight >
      window.innerHeight
    ) {
      setContextData({
        ...contextData,
        posY: contextData.posY - contextRef.current?.offsetHeight,
      });
    }
  }, [contextData]);
  return (
    <div
      ref={contextRef}
      className="contextMenu"
      style={{
        display: `${contextData.visible ? "block" : "none"}`,
        left: `0`,
        top: `0`,

        zIndex: 1000,
      }}
    >
      <ul className={`optionsList ${classes?.listWrapper}`}>
        <div className="font-semibold mb-2">OPTIONS</div>
        {options.map((option) => (
          <div
            key={option.label}
            className={`optionListItem ${classes?.listItem} text-sm flex justify-between items-center`}
            onClick={() => {
              console.log("clicked");
              option.onClick(targetId);
            }}
          >
            <div>{option.label}</div>
            <div>
              <RightArrow />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CustomContextMenu;
