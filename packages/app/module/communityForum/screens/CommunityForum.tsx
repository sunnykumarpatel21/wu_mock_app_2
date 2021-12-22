import { useEffect } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';

const CommunityForum = () => {
	const navigate = useNavigate();
	const loginUser = useSelector((state: RootStateOrAny) => state.loginReducer.loginUser);

	useEffect(
		() => {
			if (!loginUser) {
				navigate('/login');
			}
		},
		[ loginUser ]
	);

	return (
		<Layout>
			<div className="site-content">
				<div className="site-container">
					<div className="site-card">
						<h2>This module is not be developed yet.........</h2>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default CommunityForum;
