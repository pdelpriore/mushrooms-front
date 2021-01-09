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
import "./app.css";

interface TInputState {
  [key: string]: string;
}

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [inputs, setInputs] = useState<TInputState>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  const handlePrev = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    currentIndex > 0 && setCurrentIndex((currentIndex) => --currentIndex);
  };

  const handleNext = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    currentIndex < features.length - 1 &&
      inputs[features[currentIndex]] !== undefined &&
      setCurrentIndex((currentIndex) => ++currentIndex);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setInputs({});
    // dispatch clearState
  };

  return (
    <div className="app">
      <Row className="mt-4" />
      <Row>
        <Col xs={4} />
        <Col xs={1}>
          <SwitchButton icon={faArrowAltCircleLeft} onClick={handlePrev} />
        </Col>
        <Col xs={2}>
          <span>
            {currentIndex + 1} / {features.length}
          </span>
        </Col>
        <Col xs={1}>
          <SwitchButton icon={faArrowAltCircleRight} onClick={handleNext} />
        </Col>
        <Col xs={4} />
      </Row>
      <Row className="mt-3" />
      <Row>
        <Col xs={4} />
        <Col xs={4}>
          <MForm
            submitDisabled={Object.values(inputs).length !== features.length}
            label={formElements[currentIndex].label}
            targetName={features[currentIndex]}
            options={formElements[currentIndex].option}
            onChange={handleOnChange}
            onClick={handleReset}
            inputs={inputs}
          />
        </Col>
        <Col xs={4} />
      </Row>
    </div>
  );
};

export default App;
