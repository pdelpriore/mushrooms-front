import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/Store";
import {
  predict,
  clearPredictState,
} from "../../redux/predict/thunk/predictThunk";
import { Row, Col, Image } from "react-bootstrap";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import MForm from "../../components/form/MForm";
import SwitchButton from "../../components/button/SwitchButton";
import { formElements } from "../../shared/formElements";
import { features } from "../../shared/mushroomFeatures";
import { capitalizeFirst } from "../../methods/capitalize";
import "./app.css";

type modifiers = {
  [key: string]: string;
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

  const modifiers: modifiers = {
    edible: "result--edible",
    poisonous: "result--poisonous",
  };

  return (
    <div className="container">
      <Row className="mt-4" />
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <div className="banner">
            <span className="banner__title">Can I eat this</span>
            <Image
              className="banner__image"
              src={require("../../assets/mushroom.jpg").default}
            />
            <span className="banner__title">?</span>
          </div>
        </Col>
        <Col xs={2} />
      </Row>
      <Row className="mt-5" />
      <Row>
        <Col xs={2} />
        <Col xs={2}>
          <SwitchButton
            blocked={currentIndex === 0}
            icon={faArrowAltCircleLeft}
            onClick={handlePrev}
          />
        </Col>
        <Col xs={4}>
          <span className="counter">
            {currentIndex + 1} / {features.length}
          </span>
        </Col>
        <Col xs={2}>
          <SwitchButton
            blocked={
              currentIndex < features.length - 1 &&
              inputs[features[currentIndex]] !== undefined
            }
            icon={faArrowAltCircleRight}
            onClick={handleNext}
          />
        </Col>
        <Col xs={2} />
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
          {predictResult.length > 0 && (
            <span className={`result ${modifiers[predictResult]}`}>
              {capitalizeFirst(predictResult)}
            </span>
          )}
        </Col>
        <Col xs={5} />
      </Row>
    </div>
  );
};

export default App;
