import type { NextPage } from "next";
import {  reports } from '../mock_data.json';
import { useState } from 'react';
import { useEffect } from "react";

const Reports: NextPage = ({}) => {
    const [loginUser, setLoginUser] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [reportsData, setReportsData] = useState(reports);

    useEffect(()=>{
        let userObj = localStorage.getItem('user');
        if(userObj) userObj = JSON.parse(userObj);
        else userObj = null;
        setLoginUser(userObj);
    },[]);

    const handleSearch = (text) => {
        let value = text.toLowerCase();
        let reportData = reports.filter((item)=> item.name.toLowerCase().includes(value));
        setSearchText(text);
		setReportsData(reportData);
    }

	return (
        <div className="site-content">
            <div className="site-container">
                <div className="site-card">
                    <div className="accounts-content">
                        <h2>Reports</h2>
                        <input
                            type='text'
                            className="searchBar"
                            placeholder="Search....."
							value={searchText}
                            onChange={(e)=>handleSearch(e.target.value)}
                        />

                        <div className="site-content-cards">
                            {reportsData && reportsData.length>0 && reportsData.map((reportObj, ind)=>(
                                <div className="site-content-card" key={ind}>
                                    <h6>{reportObj.name}</h6>
									<p>{reportObj.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
};
export default Reports;
