import { IFormConfig } from "./fields";
import { IValidationErrors } from "../../interfaces/IValidationErrors";

interface ValidateRegData {
  fields: IFormConfig[];
  accParams: {
    log: string;
    pass: string;
    confPass?: string;
  };
}

interface EnterData {
  login: string;
  password: string;
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
  isEmailUnique: ({ value }: { value: string }): boolean => {
    const arr = localStorage.getItem("accInfo");
    const parsedArr: any = arr && JSON.parse(arr);
    const a = parsedArr?.find((obj: EnterData) => obj.login === value);
    return !a;
  },
  accExists: ({ value, valid }: { value: string; valid: string }): boolean => {
    const arr = localStorage.getItem("accInfo");
    const parsedArr: any = arr && JSON.parse(arr);
    const a = parsedArr?.find(
      (obj: EnterData) => obj.login === value && obj.password === valid
    );
    return !!a;
  },
};

export const validateAll = ({
  fields,
  accParams,
}: ValidateRegData): IValidationErrors[] => {
  const arr: IValidationErrors[] = [];
  fields.forEach((obj) => {
    const a: string = Object.keys(accParams).filter((key) => key === obj.id)[0];
    if (obj.id === a) {
      obj.validations.filter((elem) =>
        arrayOfValidate[elem.type]({
          value: accParams[a],
          valid:
            elem.validValue === "password"
              ? accParams["pass"]
              : elem.validValue,
        }) === false
          ? arr.push({ field: a, message: `Incorrect ${elem.type}` })
          : null
      );
    }
  });
  return arr;
};

export const validateEmailAndPass: Function = ({
  fields,
  accParams,
}: ValidateRegData): boolean => {
  let isValid: boolean = true;
  console.log("validateAll", validateAll({ fields, accParams }));
  fields.forEach((obj) => {
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
    // console.log(arr);
  });
  return isValid;
};
