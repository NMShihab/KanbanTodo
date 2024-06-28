import { RightArrow } from "./assets/Icons";
import useTask from "../../hooks/useTask";

const CustomContextMenu = ({
  targetId,
  options,
}: {
  targetId: number;
  options: {
    label: "NEW" | "ONGOING" | "DONE";
    onClick: (id: number) => void;
  }[];
}) => {
  const { positionData } = useTask();

  return (
    <div
      className="absolute"
      style={{
        display: `${positionData.visible ? "block" : "none"}`,
        left: `${positionData.posX}px`,
        top: `${positionData.posY}px`,

        zIndex: 1000,
      }}
    >
      <ul className={`bg-orange-400 w-28 rounded`}>
        <div className="font-semibold px-2 py-2 ">Move To</div>
        {options.map((option) => (
          <div
            key={option.label}
            className={`px-2 pb-2 text-sm cursor-pointer flex  justify-between items-center gap-2 hover:bg-orange-300`}
            onClick={() => {
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
