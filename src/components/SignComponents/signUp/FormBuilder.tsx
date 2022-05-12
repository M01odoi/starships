import React, {useState} from "react";
import {IFormConfig} from "./fields";
import {validateEmailAndPass} from "./validateEmailAndPass";

interface Props {
    fields: IFormConfig[];
    nameOfButton: string;
    onSubmit: (data: any) => void;
}

const initFields = (fields: IFormConfig[]) => {
    const res: any = {}
    fields.forEach(field => {
        for (const fieldKey in field) {
            if (fieldKey === 'id') {
                res[field[fieldKey]] = ''
            }
        }
    })
    return res
}
const FormBuilder: React.FC<Props> = ({fields, nameOfButton, onSubmit}): JSX.Element => {
    const [accParams, setAccParams] = useState(() => initFields(fields));
    const [isValid, setIsValid] = useState(false);

    const onSubmitForm = (e: any) => {
        e.preventDefault();
        if (validateEmailAndPass({fields, accParams})) {
            setIsValid(true);
            onSubmit(accParams);
        } else setIsValid(false);
    }

    return (
        <form>
            {fields.map(obj => <input key={obj.id} type={obj.type} placeholder={obj.placeholder}
                                      name={obj.name} className={!isValid ? "dontCorrectValidate" : ""}
                                      value={accParams[obj.id]}
                                      onChange={(e) =>
                                          setAccParams({...accParams, [obj.id]: e.target.value})}
            />)}
            <button
                className="sign-up-button"
                onClick={(e) => {
                    onSubmitForm(e);
                }}
            >
                {nameOfButton}
            </button>
        </form>
    )
}

export default FormBuilder;