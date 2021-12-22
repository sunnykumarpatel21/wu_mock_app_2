import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { user, partners } from '../../../mock_data.json';
import Layout from '../../../components/Layout/Layout';

const MyAccounts: NextPage = ({}) => {
	const navigate = useNavigate();
	const loginUser = useSelector((state: RootStateOrAny) => state.loginReducer.loginUser);

	const [ searchText, setSearchText ] = useState('');
	const [ userData, setUserData ] = useState(user);
	const [ partnersData, setPartnersData ] = useState(partners);

	useEffect(
		() => {
			if (!loginUser) {
				navigate('/login');
			}
		},
		[ loginUser ]
	);

	const handleSearch = (text: any) => {
		let value = text.toLowerCase();
		let users = user.filter((item) => {
			return item.firstName.toLowerCase().includes(value) || item.lastName.toLowerCase().includes(value);
		});
		let partner = partners.filter((item) => {
			return item.name.toLowerCase().includes(value);
		});
		setSearchText(text);
		setUserData(users);
		setPartnersData(partner);
	};

	console.log(loginUser);

	return (
		<Layout>
			<div className="site-content">
				<div className="site-container">
					<div className="site-card">
						<div className="accounts-content">
							<h2>My Accounts</h2>
							<input
								type="text"
								className="searchBar"
								placeholder="Search....."
								value={searchText}
								onChange={(e) => handleSearch(e.target.value)}
							/>
							<div className="account-actions">
								<button className="btn btn-outline-secondary btn-sm action-btn">+ Add User</button>
								{loginUser &&
								loginUser.userRole &&
								loginUser.userRole.name == 'SystemAdmin' && (
									<button
										className="btn btn-outline-secondary btn-sm btn-text action-btn ms-3"
										id="add-partner"
									>
										+ Add Partner
									</button>
								)}
								{loginUser &&
								loginUser.userRole &&
								loginUser.userRole.name == 'SystemAdmin' && (
									<button
										className="btn btn-outline-secondary btn-sm btn-text action-btn ms-3"
										id="add-role"
									>
										+ Add Role
									</button>
								)}
							</div>

							<div className="site-content-cards">
								{userData &&
									userData.length > 0 &&
									userData.map((userObj, ind) => (
										<div className="site-content-card" key={ind}>
											<h6>
												Name: <span>{userObj.firstName + ' ' + userObj.lastName}</span>
											</h6>
											<h6>
												Email: <span>{userObj.email}</span>
											</h6>
										</div>
									))}
								{loginUser &&
								loginUser.userRole &&
								loginUser.userRole.name == 'SystemAdmin' && (
									<div>
										{partnersData &&
											partnersData.length > 0 &&
											partnersData.map((partnerObj, ind) => (
												<div className="site-content-card" key={ind}>
													<h6>
														Name: <span>{partnerObj.name}</span>
													</h6>
													<h6>
														Manager: <span>{partnerObj.managerName}</span>
													</h6>
												</div>
											))}
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default MyAccounts;
