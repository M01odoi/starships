import { IFormConfig } from "./fields";
import { useState } from "react";

interface ValidateRegData {
  fields: IFormConfig[];
  accParams: {
    log: string;
    pass: string;
    confPass?: string;
  };
}

const arrayOfValidate: { [key: string]: Function } = {
  email: ({ value, valid }: { value: string; valid: RegExp }): boolean => {
    return valid.test(value);
  },
  minLength: ({ value, valid }: { value: string; valid: number }): boolean => {
    return value.length >= valid;
  },
  maxLength: ({ value, valid }: { value: string; valid: number }): boolean => {
    return value.length <= valid;
  },
  theSameAs: ({ value, valid }: { value: string; valid: string }): boolean => {
    return value === valid;
  },
  login: ({ value, valid }: { value: string; valid: string }): boolean => {
    const arr = localStorage.getItem("accInfo");
    const parsedArr: any = arr && JSON.parse(arr);
    const a = parsedArr.find(
      (obj: any) => obj.login === value && obj.password === valid
    );
    return !!a;
  },
};

export const validateEmailAndPass: Function = ({
  fields,
  accParams,
}: ValidateRegData): boolean => {
  let isValid: boolean = true;
  fields.forEach((obj, index, array) => {
    const a: string = Object.keys(accParams).filter((key) => key === obj.id)[0];
    if (obj.id === a) {
      obj.validations.filter(
        (obj) =>
          arrayOfValidate[obj.type]({
            value: accParams[a],
            valid:
              obj.validValue === "password"
                ? accParams["pass"]
                : obj.validValue,
          }) === false
      ).length && (isValid = false);
    }
  });
  return isValid;
};
