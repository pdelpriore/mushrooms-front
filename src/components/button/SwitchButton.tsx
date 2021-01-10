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
  // blocked bedzie uzyty jako modifier dla styli css
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick(e)}
    >
      <FontAwesomeIcon icon={icon} />
    </div>
  );
};

export default SwitchButton;
