import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

type TClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

interface ButtonProps {
  icon: IconDefinition;
  onClick: TClick;
}

const SwitchButton: React.FC<ButtonProps> = ({ icon, onClick }) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick(e)}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SwitchButton;
