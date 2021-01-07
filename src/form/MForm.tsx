import React from "react";
import { Form, Row, Col, Button, Spinner } from "react-bootstrap";
import { capitalize, capitalizeFirst } from "../methods/capitalize";
import "./form.css";

type options = {
  optionValues: string[];
  optionShortcuts: string[];
};

interface MFormProps {
  label: string;
  targetName: string;
  options: options;
}

const MForm: React.FC<MFormProps> = ({ label, targetName, options }) => {
  return (
    <Form>
      <Row>
        <Col xs={12}>
          <Form.Group controlId="formBasicMushrooms">
            <Form.Label>{capitalize(label)}</Form.Label>
            <Form.Control size="lg" as="select" name={targetName}>
              {options.optionValues.map((optionValue, index) => {
                let optionShortcut = options.optionShortcuts[index];
                return (
                  <>
                    <option disabled={true} value="">
                      {capitalize("choose one option")}
                    </option>
                    <option key={index} value={optionShortcut}>
                      {capitalizeFirst(optionValue)}
                    </option>
                  </>
                );
              })}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default MForm;
