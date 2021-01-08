import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import MForm from "../../components/form/MForm";
import SwitchButton from "../../components/button/SwitchButton";
import { formElements } from "../../shared/formElements";
import { features } from "../../shared/mushroomFeatures";
import "./App.css";

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handlePrev = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    currentIndex > 0 && setCurrentIndex((currentIndex) => --currentIndex);
  };

  const handleNext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    currentIndex < 11 && setCurrentIndex((currentIndex) => ++currentIndex);
  };

  return (
    <div className="app">
      <Row>
        <Col xs={3} />
        <Col xs={6}>
          <MForm
            label={formElements[currentIndex].label}
            targetName={features[currentIndex]}
            options={formElements[currentIndex].option}
          />
        </Col>
        <Col xs={3} />
      </Row>
      <Row>
        <Col xs={3} />
        <Col xs={1}>
          <SwitchButton icon={faArrowAltCircleLeft} onClick={handlePrev} />
        </Col>
        <Col xs={4} />
        <Col xs={1}>
          <SwitchButton icon={faArrowAltCircleRight} onClick={handleNext} />
        </Col>
        <Col xs={3} />
      </Row>
    </div>
  );
};

export default App;
