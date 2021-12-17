import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Dashboard from "../module/dashboard/screens/Dashboard";
import LoginForm from "../module/login/screens/Login-form";

const Home: NextPage = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let userObj = localStorage.getItem("user");
        if (userObj) userObj = JSON.parse(userObj);
        else userObj = null;
        setUser(userObj);
    }, []);

    const updateUser = (userData: any) => {
        setUser(userData);
    };

    return (
        <div>
            <Head>
                <title> WesternUnion//WU </title>
                <meta name='description' content='Landing page' />
            </Head>
            <div className='site-content'>
                {!user ? (
                    <LoginForm updateUser={updateUser} />
                ) : (
                    <Dashboard user={user} />
                )}
            </div>
        </div>
    );
};

export default Home;
