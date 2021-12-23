import type { NextPage } from "next";
import { ChangeEvent, useState, useEffect } from "react";
import { user, userRoles } from "../../../mock_data.json";
import { strings } from "../../../common/utils/utils";
import styles from "./styles/login-form.module.css";
import { Role, User } from "../../../common/types/Types";
import useSWR from 'swr'
import useUser from "../../../common/data/use-user";
import { login } from "../../../common/libs/auth";


type Props = {
    updateUser: any
};
const fetcher = (url: string) => fetch(url).then((res) => res.json())

const LoginForm: NextPage<Props> = ({ updateUser }) => {
    const [loginFrom, setLoginForm] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);
    const { user, mutate, loggedOut } = useUser();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setLoginError(false);
        setLoginForm({ ...loginFrom, [e.target.name]: e.target.value });
    };
    // if logged in, redirect to the dashboard
    useEffect(() => {
        if (user && !loggedOut) {
            //Router.replace("/dashboard");
        }
    }, [user, loggedOut]);
    return (
        <>
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
                            <p className='login-error'>{strings("Login.loginErrorMessage")}</p>
                        )}
                        <button
                            type='button'
                            className='btn btn-block btn-secondary'
                            onClick={() => login(loginFrom)}
                        >
                            {strings("Login.submit")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
