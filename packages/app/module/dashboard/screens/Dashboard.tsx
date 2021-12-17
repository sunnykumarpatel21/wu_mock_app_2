import type { NextPage } from "next";
import { useRouter } from "next/router";

const cardsList = [
    { id: 1, name: "Dashboard", link: "/" },
    { id: 2, name: "My Accounts", link: "/my_accounts" },
    { id: 3, name: "Reports", link: "/reports" },
    { id: 4, name: "Knowledge Center", link: "/" },
    { id: 5, name: "Community Forum", link: "/" },
];

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
