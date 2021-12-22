import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { useSelector, RootStateOrAny } from "react-redux";
import { strings } from "../common/utils/utils";
import Dashboard from "../module/dashboard/screens/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "../module/login/screens/Login";
import MyAccounts from "../module/MyAccount/screeen/my_accounts";
import Reports from "../module/Report/screen/reports";
import CommunityForum from "../module/communityForum/screen/CommunityForum";
import KnowledgeCenter from "../module/knowledgeCenter/screen/KnowledgeCenter";

const Home: NextPage = () => {
    const loginUser = useSelector(
        (state: RootStateOrAny) => state.loginReducer.loginUser
    );

    return (
        <div>
            <Head>
                <title> {strings("appName")} </title>
                <meta name='description' content='Landing page' />
            </Head>

            <div className='site-content'>
                <Router>
                    <Routes>
                        <Route
                            path='/'
                            element={<Dashboard user={loginUser} />}
                        />
                        <Route
                            path='/login'
                            element={<LoginForm updateUser={""} />}
                        />
                        <Route path='/myaccount' element={<MyAccounts />} />
                        <Route path='/reports' element={<Reports />} />
                        <Route
                            path='/communityforum'
                            element={<CommunityForum />}
                        />
                        <Route
                            path='/knowledgecenter'
                            element={<KnowledgeCenter />}
                        />
                    </Routes>
                </Router>
            </div>
        </div>
    );
};

export default Home;
