import React from "react";
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
  submitDisabled: boolean;
  label: string;
  targetName: string;
  options: options;
  onChange: TOnchange;
  inputs: inputs;
}

const MForm: React.FC<MFormProps> = ({
  submitDisabled,
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
            {capitalize("choose one option")}
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
      <Button disabled={submitDisabled} type="submit" variant="outline-dark">
        <div>
          {false && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
          {false ? (
            <span>{capitalize("checking ...")}</span>
          ) : (
            <span>{capitalizeFirst("check it out")}</span>
          )}
        </div>
      </Button>
    </Form>
  );
};

export default MForm;
