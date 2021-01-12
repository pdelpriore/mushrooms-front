import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/Store";
import {
  predict,
  clearPredictState,
} from "../../redux/predict/thunk/predictThunk";
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

type modifiers = {
  edible: string;
  poisonous: string;
};

interface TInputState {
  [key: string]: string;
}

const App: React.FC = () => {
  const dispatch = useDispatch();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [inputs, setInputs] = useState<TInputState>({});

  const { predictResult } = useSelector((state: RootState) => state.prediction);

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
    setCurrentIndex(0);
    setInputs({});
    dispatch(clearPredictState());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(predict(inputs));
  };

  // modifiers uzyte beda do zmiany koloru result, modifiers[result] w className zdeterminuje ktory zostanie uzyty
  // uzupelnic nazwy modyfikatorow !

  const modifiers: modifiers = {
    edible: "--green",
    poisonous: "--red",
  };

  return (
    <div className="app">
      <Row className="mt-4" />
      <Row>
        <Col xs={4} />
        <Col xs={1}>
          <SwitchButton
            blocked={currentIndex === 0}
            icon={faArrowAltCircleLeft}
            onClick={handlePrev}
          />
        </Col>
        <Col xs={2}>
          <span>
            {currentIndex + 1} / {features.length}
          </span>
        </Col>
        <Col xs={1}>
          <SwitchButton
            blocked={
              currentIndex < features.length - 1 &&
              inputs[features[currentIndex]] !== undefined
            }
            icon={faArrowAltCircleRight}
            onClick={handleNext}
          />
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
            onSubmit={handleSubmit}
            inputs={inputs}
          />
        </Col>
        <Col xs={4} />
      </Row>
      <Row>
        <Col xs={5} />
        <Col xs={2}>
          {predictResult.length > 0 && <span>{predictResult}</span>}
        </Col>
        <Col xs={5} />
      </Row>
    </div>
  );
};

export default App;
