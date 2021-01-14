import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/config/Store";
import {
  predict,
  clearPredictState,
} from "../../redux/predict/thunk/predictThunk";
import { Row, Col, Image, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
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
  const [viewport, setViewport] = useState<number>(0);

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
    edible: "result-content--edible",
    poisonous: "result-content--poisonous",
  };

  useEffect(() => {
    setViewport(window.innerWidth);
  }, []);

  return (
    <div className="container">
      <Row className="mt-4" />
      <Row>
        <Col xl={2} />
        <Col xl={8}>
          <div className="banner">
            <span className="banner__title">Can I eat this</span>
            <Image
              className="banner__image"
              src={require("../../assets/mushroom.jpg").default}
            />
            <span className="banner__title">?</span>
          </div>
        </Col>
        <Col xl={2} />
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
              currentIndex === features.length - 1 ||
              inputs[features[currentIndex]] === undefined
            }
            icon={faArrowAltCircleRight}
            onClick={handleNext}
          />
        </Col>
        <Col xs={2} />
      </Row>
      <Row className="mt-3" />
      <Row>
        <Col xl={4} xs={3} />
        <Col xl={4} xs={6}>
          <MForm
            submitDisabled={Object.values(inputs).length !== features.length}
            label={formElements[currentIndex].label}
            targetName={features[currentIndex]}
            options={formElements[currentIndex].option}
            onChange={handleOnChange}
            onClick={handleReset}
            onSubmit={handleSubmit}
            inputs={inputs}
            viewport={viewport}
          />
        </Col>
        <Col xl={4} xs={3} />
      </Row>
      <Row>
        <Col xl={5} xs={4} />
        <Col xl={2} xs={4}>
          <div className="result">
            {predictResult.length > 0 && (
              <span className={`result-content ${modifiers[predictResult]}`}>
                {capitalizeFirst(predictResult)}
              </span>
            )}
          </div>
        </Col>
        <Col xl={5} xs={4} />
      </Row>
      <div className="container__space"></div>
      <Row>
        <Col xs={2} />
        <Col xs={8}>
          <div className="image">
            <Image
              className="image-img"
              src={require("../../assets/forest.jpg").default}
            />
            <Image
              className="image-img"
              src={require("../../assets/forest.jpg").default}
            />
          </div>
        </Col>
        <Col xs={2} />
      </Row>
      <Row className="mt-3" />
      <Row>
        <Col xl={7} xs={4} />
        <Col xl={3} xs={7}>
          <div className="footer">
            <span className="footer__content">
              &#169; {new Date().getFullYear()} Paweł Del Priore
            </span>
            <Nav.Link
              href="http://www.linkedin.com/in/pawe%C5%82-del-priore-b55bbb1a8"
              target="_blank"
            >
              <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
            </Nav.Link>
          </div>
        </Col>
        <Col xl={2} xs={1} />
      </Row>
    </div>
  );
};

export default App;
