import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { logoutUser } from '../../store';
import { strings } from '../../common/utils/utils';
import common from '../../locales/en/common.json';

const Header: NextPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogout = () => {
		dispatch(logoutUser());
	};

	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<div className="navbar-brand" id="header-logo" onClick={() => navigate('/')}>
						<h3>Partner Portal</h3>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse " id="navbarSupportedContent">
						<ul className="navbar-nav ms-auto text-center">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									<i className="fa fa-search" />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fa fa-bell" />
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									<i className="fa fa-user-circle-o" />
								</a>
							</li>
							<li className="nav-item">
								<div className="nav-link active" onClick={handleLogout}>
									{/* {strings('Header.logout')} */}
									{common.Header.logout}
								</div>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
