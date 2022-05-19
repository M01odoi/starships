import React, { useEffect, useState } from "react";
import { IFormConfig } from "./fields";
import { validateAll, validateEmailAndPass } from "./validateEmailAndPass";
import { IValidationErrors } from "../../interfaces/IValidationErrors";

interface Props {
  fields: IFormConfig[];
  nameOfButton: string;
  onSubmit: (data: any) => void;
}

const initFields = (fields: IFormConfig[]) => {
  const res: any = {};
  fields.forEach((field) => {
    for (const fieldKey in field) {
      if (fieldKey === "id") {
        res[field[fieldKey]] = "";
      }
    }
  });
  return res;
};
const FormBuilder: React.FC<Props> = ({
  fields,
  nameOfButton,
  onSubmit,
}): JSX.Element => {
  const [accParams, setAccParams] = useState(() => initFields(fields));
  const [validationErrors, setValidationErrors] = useState<IValidationErrors[]>(
    []
  );

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    setValidationErrors(validateAll({ fields, accParams }));
    !validateAll({ fields, accParams }).length && onSubmit(accParams);
  };

  const isValid: Function = ({
    obj,
    validationErrors,
  }: {
    obj: IFormConfig;
    validationErrors: IValidationErrors[];
  }): IValidationErrors[] => {
    return validationErrors.filter(
      (validateObj) => validateObj.field === obj.id
    );
  };
  useEffect(() => {
    console.log(validationErrors);
  }, [validationErrors]);
  return (
    <form>
      {fields.map((obj, index) => (
        <>
          <input
            key={obj.id}
            type={obj.type}
            placeholder={obj.placeholder}
            name={obj.name}
            className={
              isValid({ obj, validationErrors }).length
                ? "dontCorrectValidate"
                : ""
            }
            value={accParams[obj.id]}
            onChange={(e) =>
              setAccParams({ ...accParams, [obj.id]: e.target.value })
            }
          />
          {!!isValid({ obj, validationErrors }).length &&
            isValid({
              obj,
              validationErrors,
            }).map((error: IValidationErrors, index: number) => (
              <span key={index}>{error.message}</span>
            ))}
        </>
      ))}
      <button
        className="sign-up-button"
        onClick={(e) => {
          onSubmitForm(e);
        }}
      >
        {nameOfButton}
      </button>
    </form>
  );
};

export default FormBuilder;
