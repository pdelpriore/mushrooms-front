import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

type TClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

interface ButtonProps {
  blocked: boolean;
  icon: IconDefinition;
  onClick: TClick;
}

const SwitchButton: React.FC<ButtonProps> = ({ blocked, icon, onClick }) => {
  return (
    <div
      className="wrapper"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick(e)}
    >
      <FontAwesomeIcon
        className={`wrapper__icon ${blocked && "wrapper__icon--blocked"}`}
        icon={icon}
      />
    </div>
  );
};

export default SwitchButton;
