import React from "react";
import { Button } from "react-bootstrap";

type TClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

interface ButtonProps {
  content: string;
  onClick: TClick;
}

const CustomButton: React.FC<ButtonProps> = ({ content, onClick }) => {
  return (
    <Button
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        onClick(e)
      }
    >
      {content}
    </Button>
  );
};

export default CustomButton;

// ten komponent uzyty zostanie jako przyciski prev i next
// komponent bedzie zwracal FontAwesome zamiast Button
// MouseEvent bedzie zmieniony na typ DIVElement
// propsami przyjdzie rowniez ikonka do FontAwesome
