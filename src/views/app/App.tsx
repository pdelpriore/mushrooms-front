import React, { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import MForm from "../../form/MForm";
import { formElements } from "../../shared/formElements";
import { features } from "../../shared/mushroomFeatures";
import "./App.css";

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

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
    </div>
  );
};

export default App;
