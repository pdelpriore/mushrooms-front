import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { capitalize, capitalizeFirst } from "../../methods/capitalize";
import "./form.css";

type options = {
  optionValues: string[];
  optionShortcuts: string[];
};

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;

type inputs = {
  [key: string]: string;
};

interface MFormProps {
  label: string;
  targetName: string;
  options: options;
  onChange: TOnchange;
  inputs: inputs;
}

const MForm: React.FC<MFormProps> = ({
  label,
  targetName,
  options,
  onChange,
  inputs,
}) => {
  return (
    <Form>
      <Form.Group controlId="formBasicMushrooms">
        <Form.Label>{capitalize(label)}</Form.Label>
        <Form.Control
          as="select"
          name={targetName}
          value={inputs[targetName] || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
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
