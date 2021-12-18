import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Card, User } from "../../../common/types/Types";
import { cardsList } from "../../../mock_data.json";
import { strings } from "../../../common/utils/utils";

type Props = {
    user: User
};
const Dashboard: NextPage<Props> = ({ user }) => {
    const router = useRouter();
    const handleCardClick = (card: Card) => {
        router.push(card.link);
    };

    return (
        <>
            <div className='site-container'>
                <div className='site-card'>
                    {user && (
                        <div className='dashboard-content'>
                            <h2>{strings('Dashboard.greeting')} {user.firstName}!</h2>
                            <div className='dashboard-cards'>
                                {cardsList.map((card, index) => (
                                    <div
                                        className='dashboard-card'
                                        key={index}
                                        onClick={() => handleCardClick(card)}
                                    >
                                        <p>{card.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
