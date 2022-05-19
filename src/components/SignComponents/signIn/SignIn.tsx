import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import FormBuilder from "../FormBuilder";
import {loginFormConfig} from "../fields";
import {peopleAndStarshipsCards, signup} from "../../../routes";
import React from "react";
import {enterAccount} from "../../../store/reducers/accInfoSlice";
import {useAppDispatch} from "../../../hooks/redux";
import {IAccParams} from "../signUp/SignUp";
import {setAuthAcc} from "../../../store/reducers/helpfulStateSlice";

const SignIn = () => {
    const navigate: Function = useNavigate();
    const dispatch = useAppDispatch();
    const onSubmit = (data: IAccParams) => {
        dispatch(enterAccount({login: data.log, password: data.pass}));
        dispatch(setAuthAcc({login: data.log, password: data.pass}));
        navigate(peopleAndStarshipsCards);
    };

    return (
        <div className="sign-up-page sign-in-page">
            <section className="sign-up-window shadow">
                <div className="sign-up-image">
                    <FontAwesomeIcon
                        icon="user-alt"
                        className="fa-3x sign-up-image-icon shadow"
                    />
                </div>
                <h1> Member Login</h1>
                <FormBuilder
                    onSubmit={onSubmit}
                    fields={loginFormConfig}
                    nameOfButton="Login"
                />
                <p onClick={() => navigate(signup)} className="sign-up-hint">
                    Create account
                </p>
            </section>
        </div>
    );
};

export default SignIn;
