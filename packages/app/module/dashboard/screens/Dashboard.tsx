import type { NextPage } from "next";
import { useRouter } from "next/router";
import { cardsList } from "../../../mock_data.json";

const Dashboard: NextPage = ({ user }) => {
    const router = useRouter();

    const handleCardClick = (card) => {
        router.push(card.link);
    };

    return (
        <>
            <div className='site-container'>
                <div className='site-card'>
                    {user && (
                        <div className='dashboard-content'>
                            <h2>Hi {user.firstName}!</h2>
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
