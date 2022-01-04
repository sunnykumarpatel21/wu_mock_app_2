import { NextPage } from 'next';
import Head from 'next/head';

import { useSelector, RootStateOrAny } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { strings } from '../common/utils/utils';
import Dashboard from '../module/dashboard/screens/Dashboard';
import LoginForm from '../module/login/screens/Login';
import MyAccounts from '../module/myAccounts/screens/my_accounts';
import Reports from '../module/reports/screens/reports';
import CommunityForum from '../module/communityForum/screens/CommunityForum';
import KnowledgeCenter from '../module/knowledgeCenter/screen/KnowledgeCenter';


const Home: NextPage = () => {
	const loginUser = useSelector((state: RootStateOrAny) => state.loginReducer.loginUser);
	
	return (
		<div>
			<Head>
				{/* <title> {strings("appName")} </title> */}
				<title> {strings("appName")} </title>
				<meta name="description" content="Landing page" />
			</Head>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard user={loginUser} />} />
					<Route path="/login" element={<LoginForm />} />
					<Route path="/my_accounts" element={<MyAccounts />} />
					<Route path="/reports" element={<Reports />} />
					<Route path="/community_forum" element={<CommunityForum />} />
					<Route path="/knowledge_center" element={<KnowledgeCenter />} />
				</Routes>
			</Router>
		</div>
	);
};
export default Home;
