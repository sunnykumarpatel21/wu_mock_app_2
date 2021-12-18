import type { NextPage } from "next";
import { useState } from "react";
import { user, userRoles } from "../../../mock_data.json";
import styles from "./styles/login-form.module.css";

const LoginForm: NextPage = ({ updateUser }) => {
    const [loginFrom, setLoginForm] = useState({ email: "", password: "" });
    const [loginError, setLoginError] = useState(false);

    const handleChange = (e) => {
        setLoginError(false);
        setLoginForm({ ...loginFrom, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
        if (user && user.length > 0) {
            let userObj = user.find((item) => item.email === loginFrom.email);
            if (userObj) {
                let roleId = userObj.role;
                let userRole = userRoles.find((item) => item.id == roleId);
                if (userRole) userObj["userRole"] = userRole;
                localStorage.setItem("user", JSON.stringify(userObj));
                updateUser(userObj);
            } else {
                setLoginError(true);
            }
        }
    };

    return (
        <>
            <div className='site-container'>
                <div className='site-card'>
                    <div className='form-container login-form'>
                        <h2>Login Form</h2>
                        <div className='mb-4'>
                            <label
                                htmlFor='exampleInputEmail1'
                                className='form-label'
                            >
                                Email address
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
                                Password
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
                            <p className='login-error'>Invalid login details</p>
                        )}
                        <button
                            type='text'
                            className='btn btn-block btn-secondary'
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
