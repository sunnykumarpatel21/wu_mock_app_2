import type { NextPage } from "next";
import { user, partners } from '../mock_data.json';
import { useState } from 'react';
import { useEffect } from "react";

const MyAccounts: NextPage = ({}) => {
    const [loginUser, setLoginUser] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [userData, setUserData] = useState(user);
    const [partnersData, setPartnersData] = useState(partners);

    useEffect(()=>{
        let userObj = localStorage.getItem('user');
        if(userObj) userObj = JSON.parse(userObj);
        else userObj = null;
        setLoginUser(userObj);
    },[]);

    const handleSearch = (text) => {
        let value = text.toLowerCase();
        let users = user.filter((item)=> {
            return item.firstName.toLowerCase().includes(value) || 
                   item.lastName.toLowerCase().includes(value)
        })
        let partner = partners.filter((item)=> {
            return item.name.toLowerCase().includes(value)
        });
        setSearchText(text);
        setUserData(users);
        setPartnersData(partner);
    }

	return (
        <div className="site-content">
            <div className="site-container">
                <div className="site-card">
                    <div className="accounts-content">
                        <h2>My Accounts</h2>
                        <input
                            type='text'
                            className="searchBar"
                            placeholder="Search....."
                            value={searchText}
                            onChange={(e)=>handleSearch(e.target.value)}
                        />
                        <div className="account-actions">
                            <button className='btn btn-outline-secondary btn-sm action-btn'>+ Add User</button>
                            {loginUser && loginUser.userRole && loginUser.userRole.name == "SystemAdmin" &&
                                <button className='btn btn-outline-secondary btn-sm btn-text action-btn ms-3'>+ Add Partner</button>
                            }
                        </div>

                        <div className="site-content-cards">
                            {userData && userData.length>0 && userData.map((userObj, ind)=>(
                                <div className="site-content-card" key={ind}>
                                    <h6>Name: <span>{userObj.firstName + ' ' + userObj.lastName}</span></h6>
                                    <h6>Email: <span>{userObj.email}</span></h6>
                                </div>
                            ))}
                            {loginUser && loginUser.userRole && loginUser.userRole.name == "SystemAdmin" &&
                                <div>
                                    {partnersData && partnersData.length>0 && partnersData.map((partnerObj, ind)=>(
                                        <div className="site-content-card" key={ind}>
                                            <h6>Name: <span>{partnerObj.name}</span></h6>
                                            <h6>Manager: <span>{partnerObj.managerName}</span></h6>
                                        </div>
                                    ))}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};
export default MyAccounts;
