import type { NextPage } from "next";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from 'react-redux';
import useUser from "../common/data/use-user";
import { login } from "../common/libs/api-user";

import { strings } from "../common/utils/utils";
import { verifyUserLogin } from '../store';

type Props = {
    updateUser: any
};

const LoginForm: NextPage<Props> = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { loggedIn, mutate, user } = useUser();
    const [loginFrom, setLoginForm] = useState({ email: "", password: "" });
    //const loginUser = useSelector((state: RootStateOrAny) => state.loginReducer.loginUser);
    const loginError = useSelector((state: RootStateOrAny) => state.loginReducer.loginError);


    useEffect(() => {
        console.log("useEffect ",loggedIn,user)
        if (loggedIn) Router.replace("/home");
    }, [loggedIn]);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginFrom, [e.target.name]: e.target.value });
    };

    const onLoginSubmit = () => {
        if (loginFrom.email && loginFrom.password) {
            login(loginFrom);
            mutate();
        }
    };
    if (loggedIn) return <> Redirecting.... </>;
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
                            <h2>{strings("Login.title")} Signed in as: {user?.name}</h2>
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
                                <p className='login-error'>{strings("Login.loginErrorMessage")}</p>
                            )}
                            <button
                                type='button'
                                className='btn btn-block btn-secondary'
                                onClick={onLoginSubmit}
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
