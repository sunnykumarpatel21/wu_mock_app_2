import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { useNavigate } from "react-router-dom";

import { strings } from "../../../common/utils/utils";
import { verifyUserLogin } from "../../../store";

type Props = {
    updateUser: any;
};

const LoginForm: NextPage<Props> = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [loginFrom, setLoginForm] = useState({ email: "", password: "" });
    const loginUser = useSelector(
        (state: RootStateOrAny) => state.loginReducer.loginUser
    );
    const loginError = useSelector(
        (state: RootStateOrAny) => state.loginReducer.loginError
    );

    useEffect(() => {
        if (loginUser) {
            navigate("/");
        } else {
            navigate("/login");
        }
    }, [loginUser]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginFrom, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        dispatch(verifyUserLogin(loginFrom));
    };

    return (
        <div>
            <Head>
                <title> {strings("appName")} </title>
                <meta name='description' content='Login page' />
            </Head>
            <div className='site-content'>
                <div className='site-container'>
                    <div className='site-card'>
                        <div className='form-container login-form'>
                            <h2>{strings("Login.title")}</h2>
                            <div className='mb-4'>
                                <label
                                    htmlFor='exampleInputEmail1'
                                    className='form-label'
                                >
                                    {strings("Login.email")}
                                </label>
                                <input
                                    type='email'
                                    className='form-control'
                                    name='email'
                                    value={loginFrom.email}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div className='mb-4'>
                                <label
                                    htmlFor='exampleInputPassword1'
                                    className='form-label'
                                >
                                    {strings("Login.password")}
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    name='password'
                                    value={loginFrom.password}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            {/* <div className='mb-3 form-check'>
                                <input
                                    type='checkbox'
                                    className='form-check-input'
                                    id='exampleCheck1'
                                />
                                <label
                                    className='form-check-label'
                                    htmlFor='exampleCheck1'
                                >
                                    Check me out
                                </label>
                            </div> */}
                            {loginError && (
                                <p className='login-error'>
                                    {strings("Login.loginErrorMessage")}
                                </p>
                            )}
                            <button
                                type='text'
                                className='btn btn-block btn-secondary'
                                onClick={handleSubmit}
                            >
                                {strings("Login.submit")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
