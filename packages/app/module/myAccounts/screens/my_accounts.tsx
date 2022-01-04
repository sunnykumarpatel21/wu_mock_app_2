import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//import { user, partners, userRoles } from '../../../mock_data.json';
import Layout from '../../../components/Layout/Layout';
import SiteModal from '../../../components/SiteModal/SiteModal';
import { strings } from '../../../common/utils/utils';
import { getAccountInfo } from '../../../store/actions';
import { Partner, Role, User } from '../../../common/types/Types';

const MyAccounts: NextPage = ({ }) => {
	const navigate = useNavigate();
	const loginUser = useSelector((state: RootStateOrAny) => state.main.loginUser);
	const accountDetails = useSelector((state: RootStateOrAny) => state.main.accountData);
	const [searchText, setSearchText] = useState('');
	const [userData, setUserData] = useState<User[]>(accountDetails?.users);
	const [partnersData, setPartnersData] = useState<Partner[]>(accountDetails?.partners);
	const [userRolesData, setUserRolesData] = useState<Role[]>(accountDetails?.roles);
	const [selectedManagerId, setSelectedManagerId] = useState(null);
	const dispatch = useDispatch()
	useEffect(() => {
		console.log("Naveen -",loginUser,accountDetails)
		if (!loginUser) {
			navigate('/login');
		}
		if (!accountDetails) {
			dispatch(getAccountInfo(loginUser))
		}
		setUserData(accountDetails?.users);
		setPartnersData(accountDetails?.partners);
		setUserRolesData(accountDetails?.roles);
	},[loginUser, accountDetails]
	);

	const handleSearch = (text: any) => {
		let value = text.toLowerCase();
		let users = userData.filter((item) => {
			return item.firstName.toLowerCase().includes(value) || item.lastName.toLowerCase().includes(value);
		});
		let partner = partnersData.filter((item) => {
			return item.name.toLowerCase().includes(value);
		});
		let roles = userRolesData.filter((item) => {
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
							<h2>{strings("MyAccounts.title")}</h2>
							<input
								type="text"
								className="searchBar"
								placeholder={isSystemAdmin ? strings("MyAccounts.placeholderSearch") : strings("MyAccounts.placeholderSearch2")}
								value={searchText}
								onChange={(e) => handleSearch(e.target.value)}
							/>
							<div className="account-actions">
								<button className="btn btn-outline-secondary btn-sm action-btn">{strings("MyAccounts.actionAddUser")}</button>
								{isSystemAdmin && (
									<button
										className="btn btn-outline-secondary btn-sm btn-text action-btn ms-3"
										id="add-partner"
									>{strings("MyAccounts.actionAddPartner")}
									</button>
								)}
								{isSystemAdmin && (
									<button
										className="btn btn-outline-secondary btn-sm btn-text action-btn ms-3"
										id="add-role"
									>
										{strings("MyAccounts.actionAddRole")}
									</button>
								)}
							</div>

							<div className="site-content-cards">
								{ userData &&
									userData.length > 0 && (
										<div className="category-section">
											<h4>{strings("MyAccounts.userSectionTitle")}</h4>
											{userData.map((userObj, ind) => (
												<div className="site-content-card" key={ind}>
													<div className="card-badge user">{strings("MyAccounts.badgeUser")}</div>
													{/* <button className="btn-close" /> */}
													<h6>
														{strings("MyAccounts.name")} <span>{userObj.firstName + ' ' + userObj.lastName}</span>
													</h6>
													<h6>
														{strings("MyAccounts.email")} <span>{userObj.email}</span>
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
													<h4>{strings("MyAccounts.partnerSectionTitle")}</h4>
													{partnersData.map((partnerObj, ind) => (
														<div className="site-content-card" key={ind}>
															<div className="card-badge partner">{strings("MyAccounts.badgePartner")}</div>
															{/* <button className="btn-close" /> */}
															<h6>
																{strings("MyAccounts.name")} <span>{partnerObj.name}</span>
															</h6>
															<h6 className="link">
																{strings("MyAccounts.manager")} :{' '}
																<span onClick={() => handleManagerModal(ind + 1)}>
																	{partnerObj.managerDetails.firstName +
																		' ' +
																		partnerObj.managerDetails.lastName}
																</span>
																{/* Modal for manager details */}
																<SiteModal
																	modalTitle={strings("MyAccounts.managerDetailTitle")}
																	modalBody={
																		<div className="manager-modal">
																			<div className="manager-modal-section">
																				<h5>{strings("MyAccounts.firstName")}</h5>
																				<p>{partnerObj.managerDetails.firstName}</p>
																			</div>
																			<div className="manager-modal-section">
																				<h5>{strings("MyAccounts.lastName")}</h5>
																				<p>{partnerObj.managerDetails.lastName}</p>
																			</div>
																			<div className="manager-modal-section">
																				<h5>{strings("MyAccounts.email")}</h5>
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
													<h4>{strings("MyAccounts.roleSectionTitle")}</h4>
													{userRolesData.map((roleObj, ind) => (
														<div className="site-content-card" key={ind}>
															<div className="card-badge role">{strings("MyAccounts.badgeRole")}</div>
															{/* <button className="btn-close" /> */}
															<h6>
																{strings("MyAccounts.roleName")} <span>{roleObj.name}</span>
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
