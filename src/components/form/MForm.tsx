import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/config/Store";
import { Form, Button, Spinner } from "react-bootstrap";
import { capitalize, capitalizeFirst } from "../../methods/capitalize";
import "./form.css";

type options = {
  optionValues: string[];
  optionShortcuts: string[];
};

type TOnchange = (e: React.ChangeEvent<HTMLInputElement>) => void;

type TOnclick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

type TOnsubmit = (e: React.FormEvent) => void;

type inputs = {
  [key: string]: string;
};

interface MFormProps {
  submitDisabled: boolean;
  label: string;
  targetName: string;
  options: options;
  onChange: TOnchange;
  onClick: TOnclick;
  onSubmit: TOnsubmit;
  inputs: inputs;
}

const MForm: React.FC<MFormProps> = ({
  submitDisabled,
  label,
  targetName,
  options,
  onChange,
  onClick,
  onSubmit,
  inputs,
}) => {
  const { loading, predictResult, error } = useSelector(
    (state: RootState) => state.prediction
  );

  return (
    <Form className="form" onSubmit={(e: React.FormEvent) => onSubmit(e)}>
      <Form.Group controlId="formBasicMushrooms">
        <Form.Label className="form__label">{capitalize(label)}</Form.Label>
        <Form.Control
          className="form__control"
          as="select"
          name={targetName}
          value={inputs[targetName] || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        >
          <option className="form__option" disabled={true} value="">
            {capitalize("choose one option")}
          </option>
          {options.optionValues.map((optionValue, index) => {
            let optionShortcut: string = options.optionShortcuts[index];
            return (
              <option
                className="form__option"
                key={index}
                value={optionShortcut || ""}
              >
                {capitalizeFirst(optionValue)}
              </option>
            );
          })}
        </Form.Control>
      </Form.Group>
      {(predictResult.length === 0 || error.length > 0) && (
        <Button
          className="form__btn"
          disabled={submitDisabled}
          type="submit"
          variant="outline-dark"
        >
          <div>
            {loading && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            {loading ? (
              <span className="form__btn-content">
                {capitalizeFirst("predicting ...")}
              </span>
            ) : (
              <span className="form__btn-content">
                {capitalizeFirst("predict")}
              </span>
            )}
          </div>
        </Button>
      )}
      <div className="form__error">
        {error.length > 0 && (
          <span className="form__error-content">{error}</span>
        )}
      </div>
      {predictResult.length > 0 && error.length === 0 && (
        <Button
          className="form__btn"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            onClick(e)
          }
          variant="dark"
        >
          Reset
        </Button>
      )}
    </Form>
  );
};

export default MForm;
