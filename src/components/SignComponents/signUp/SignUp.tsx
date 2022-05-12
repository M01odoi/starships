import React, {useState} from "react";
import './signUp.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormBuilder from "./FormBuilder";
import {registerFormConfig} from "./fields";
import {useNavigate} from "react-router-dom";
import {peopleAndStarshipsCards, signIn} from "../../../routes";
import {validateEmailAndPass} from "./validateEmailAndPass";
import {addAccount} from "../../../store/reducers/accInfoSlice";
import {useAppDispatch} from "../../../hooks/redux";
import {setIsAuth} from "../../../store/reducers/helpfulStateSlice";

export interface IAccParams {
    log: string,
    pass: string,
}

const SignUp: React.FC = (): JSX.Element => {
    const navigate: Function = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit = (data: IAccParams) => {
        dispatch(addAccount({login: data.log, password: data.pass}));
        dispatch(setIsAuth(true));
        navigate(peopleAndStarshipsCards);
    }
    return (
        <div className="sign-up-page">
            <section className="sign-up-window shadow">
                <div className="sign-up-image">
                    <FontAwesomeIcon icon="pen" className="fa-3x sign-up-image-icon shadow"/>
                </div>
                <h1> Register</h1>
                <FormBuilder onSubmit={onSubmit} fields={registerFormConfig} nameOfButton="Register"/>
                <p onClick={() => navigate(signIn)} className="sign-up-hint">Member Login</p>
            </section>
        </div>
    )
}
export default SignUp;