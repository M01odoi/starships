export interface IValidation {
  type: "maxLength" | "minLength" | "theSameAs" | "email" | "login";
  validValue: string | number | RegExp;
}

export interface IFormConfig {
  id: "log" | "pass" | "confPass";
  name: string;
  placeholder: string;
  type: string;
  validations: IValidation[];
}

export const loginFormConfig: IFormConfig[] = [
  {
    id: "log",
    name: "login",
    placeholder: "Username",
    type: "text",
    validations: [
      {
        type: "minLength",
        validValue: 3,
      },
      {
        type: "login",
        validValue: "password",
      },
    ],
  },
  {
    id: "pass",
    name: "password",
    placeholder: "Password",
    type: "password",
    validations: [
      {
        type: "minLength",
        validValue: 3,
      },
    ],
  },
];

export const registerFormConfig: IFormConfig[] = [
  {
    id: "log",
    name: "login",
    placeholder: "Username",
    type: "text",
    validations: [
      {
        type: "email",
        validValue:
          /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      },
      {
        type: "minLength",
        validValue: 3,
      },
      {
        type: "maxLength",
        validValue: 22,
      },
    ],
  },
  {
    id: "pass",
    name: "password",
    placeholder: "Password",
    type: "password",
    validations: [
      {
        type: "minLength",
        validValue: 6,
      },
    ],
  },
  {
    id: "confPass",
    name: "confirm_password",
    placeholder: "Confirm Password",
    type: "password",
    validations: [
      {
        type: "minLength",
        validValue: 6,
      },
      {
        type: "theSameAs",
        validValue: "password",
      },
    ],
  },
];
