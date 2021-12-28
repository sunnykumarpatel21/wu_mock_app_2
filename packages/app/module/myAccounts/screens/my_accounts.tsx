import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { user, partners, userRoles } from '../../../mock_data.json';
import Layout from '../../../components/Layout/Layout';
import SiteModal from '../../../components/SiteModal/SiteModal';

const MyAccounts: NextPage = ({}) => {
	const navigate = useNavigate();
	const loginUser = useSelector((state: RootStateOrAny) => state.loginReducer.loginUser);

	const [ searchText, setSearchText ] = useState('');
	const [ userData, setUserData ] = useState(user);
	const [ partnersData, setPartnersData ] = useState(partners);
	const [ userRolesData, setUserRolesData ] = useState(userRoles);
	const [ selectedManagerId, setSelectedManagerId ] = useState(null);

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
		let roles = userRoles.filter((item) => {
			return item.name.toLowerCase().includes(value);
		});
		setSearchText(text);
		setUserData(users);
		setPartnersData(partner);
		setUserRolesData(roles);
	};

	const handleManagerModal = (id: any) => {
		setSelectedManagerId(id);
	};

	const isSystemAdmin = loginUser && loginUser.userRole && loginUser.userRole.name == 'SystemAdmin' ? true : false;

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
								placeholder={isSystemAdmin ? 'Search User/Partner/Role' : 'Search Users'}
								value={searchText}
								onChange={(e) => handleSearch(e.target.value)}
							/>
							<div className="account-actions">
								<button className="btn btn-outline-secondary btn-sm action-btn">+ Add User</button>
								{isSystemAdmin && (
									<button
										className="btn btn-outline-secondary btn-sm btn-text action-btn ms-3"
										id="add-partner"
									>
										+ Add Partner
									</button>
								)}
								{isSystemAdmin && (
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
								userData.length > 0 && (
									<div className="category-section">
										<h4>Users:</h4>
										{userData.map((userObj, ind) => (
											<div className="site-content-card" key={ind}>
												<div className="card-badge user">User</div>
												{/* <button className="btn-close" /> */}
												<h6>
													Name: <span>{userObj.firstName + ' ' + userObj.lastName}</span>
												</h6>
												<h6>
													Email: <span>{userObj.email}</span>
												</h6>
											</div>
										))}
									</div>
								)}
								{isSystemAdmin && (
									<div>
										{partnersData &&
										partnersData.length > 0 && (
											<div className="category-section">
												<h4>Partners:</h4>
												{partnersData.map((partnerObj, ind) => (
													<div className="site-content-card" key={ind}>
														<div className="card-badge partner">Partner</div>
														{/* <button className="btn-close" /> */}
														<h6>
															Name: <span>{partnerObj.name}</span>
														</h6>
														<h6 className="link">
															Manager:{' '}
															<span onClick={() => handleManagerModal(ind + 1)}>
																{partnerObj.managerDetails.firstName +
																	' ' +
																	partnerObj.managerDetails.lastName}
															</span>
															{/* Modal for manager details */}
															<SiteModal
																modalTitle="Manager details"
																modalBody={
																	<div className="manager-modal">
																		<div className="manager-modal-section">
																			<h5>First name:</h5>
																			<p>{partnerObj.managerDetails.firstName}</p>
																		</div>
																		<div className="manager-modal-section">
																			<h5>Last name:</h5>
																			<p>{partnerObj.managerDetails.lastName}</p>
																		</div>
																		<div className="manager-modal-section">
																			<h5>Email:</h5>
																			<p>{partnerObj.managerDetails.email}</p>
																		</div>
																	</div>
																}
																showModal={selectedManagerId == ind + 1}
																handleClose={handleManagerModal}
																showFooter={false}
															/>
														</h6>
													</div>
												))}
											</div>
										)}
									</div>
								)}
								{isSystemAdmin && (
									<div>
										{userRolesData &&
										userRolesData.length > 0 && (
											<div className="category-section">
												<h4>Roles:</h4>
												{userRolesData.map((roleObj, ind) => (
													<div className="site-content-card" key={ind}>
														<div className="card-badge role">Role</div>
														{/* <button className="btn-close" /> */}
														<h6>
															Role name: <span>{roleObj.name}</span>
														</h6>
													</div>
												))}
											</div>
										)}
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
