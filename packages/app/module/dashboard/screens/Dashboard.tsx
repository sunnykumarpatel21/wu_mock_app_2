import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Card, User } from "../../../common/types/Types";
import { cardsList } from "../../../mock_data.json";
import { strings } from "../../../common/utils/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type Props = {
    user: User;
};

const Dashboard: NextPage<Props> = ({ user }) => {
    const router = useRouter();
    const navigate = useNavigate();

    useEffect(() => {
        if (user === null) {
            navigate("/login");
        }
    }, []);

    const handleCardClick = (card: Card) => {
        if (card.name === "My Accounts") {
            navigate("/myaccount");
        } else {
            navigate("/reports");
        }
    };

    return (
        <div>
            {user ? (
                <div className='site-container'>
                    <div className='site-card'>
                        <div className='dashboard-content'>
                            <h2>
                                {strings("Dashboard.greeting")} {user.firstName}
                                !
                            </h2>

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
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Dashboard;
