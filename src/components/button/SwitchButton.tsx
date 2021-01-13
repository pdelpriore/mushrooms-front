import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import "./switchButton.css";

type TClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

interface ButtonProps {
  blocked: boolean;
  icon: IconDefinition;
  onClick: TClick;
}

const SwitchButton: React.FC<ButtonProps> = ({ blocked, icon, onClick }) => {
  return (
    <div
      className="item"
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick(e)}
    >
      <FontAwesomeIcon
        className={`item__icon ${blocked && "item__icon--blocked"}`}
        icon={icon}
      />
    </div>
  );
};

export default SwitchButton;
