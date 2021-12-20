import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import { strings } from "../common/utils/utils";
import Dashboard from "../module/dashboard/screens/Dashboard";

const Home: NextPage = () => {
    const router = useRouter();
    const loginUser = useSelector((state: RootStateOrAny) => state.loginReducer.loginUser);

    useEffect(()=>{
        if(!loginUser) {
            router.push("/login");
        }
    }, []);

    return (
        <div>
            <Head>
                <title> {strings("appName")} </title>
                <meta name='description' content='Landing page' />
            </Head>
            <div className='site-content'>
                <Dashboard user={loginUser} />
            </div>
        </div>
    );
};

export default Home;
