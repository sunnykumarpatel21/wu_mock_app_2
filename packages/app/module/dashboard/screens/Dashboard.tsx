import { NextPage } from 'next';
import { User } from '../../../common/types/Types';
import { cardsList } from '../../../mock_data.json';
import { strings } from '../../../common/utils/utils';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../../../components/Layout/Layout';

type Props = {
	user: User;
};

const Dashboard: NextPage<Props> = ({ user }) => {
	const navigate = useNavigate();

	useEffect(
		() => {
			if (!user) {
				navigate('/login');
			}
		},
		[ user ]
	);

	const handleCardClick = (link: any) => {
		navigate(link);
	};

	return (
		<Layout>
			<div className="site-content">
				{user ? (
					<div className="site-container">
						<div className="site-card">
							<div className="dashboard-content">
								<h2>
									{strings("Dashboard.greeting")} {user.firstName}!
								</h2>

								<div className="dashboard-cards">
									{cardsList.map((card, index) => (
										<div
											className="dashboard-card"
											key={index}
											card-id={card.id}
											onClick={() => handleCardClick(card.link)}
										>
											<p>{strings(`Dashboard.cardsOptions.${card.id}.displayValue`)}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				) : null}
			</div>
		</Layout>
	);
};

export default Dashboard;
