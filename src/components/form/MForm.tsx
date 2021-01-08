import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { capitalize, capitalizeFirst } from "../../methods/capitalize";
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

interface TInputState {
  [key: string]: string;
}

const MForm: React.FC<MFormProps> = ({ label, targetName, options }) => {
  const [inputs, setInputs] = useState<Partial<TInputState>>({});

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };

  return (
    <Form>
      <Form.Group controlId="formBasicMushrooms">
        <Form.Label>{capitalize(label)}</Form.Label>
        <Form.Control
          as="select"
          name={targetName}
          value={inputs[targetName] || ""}
          onChange={handleOnChange}
        >
          <option disabled={true} value="">
            {capitalize("choose your answer")}
          </option>
          {options.optionValues.map((optionValue, index) => {
            let optionShortcut: string = options.optionShortcuts[index];
            return (
              <option key={index} value={optionShortcut || ""}>
                {capitalizeFirst(optionValue)}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default MForm;
