import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSelector, RootStateOrAny,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Layout from '../../../components/Layout/Layout';
import { strings } from '../../../common/utils/utils';
import { getReportData } from '../../../store/actions';
import { ReportData } from '../../../common/types/Types';

const Reports: NextPage = ({}) => {
	const navigate = useNavigate();
	const loginUser = useSelector((state: RootStateOrAny) => state.main.loginUser);
	const reportDetails:ReportData = useSelector((state: RootStateOrAny) => state.main.reportData);
	
	const [ searchFilters, setSearchFilters ] = useState({
		reportType: 'All',
		from: '',
		to: ''
	});
	const [ reportsData, setReportsData ] = useState(reportDetails?.reports);
	const [ reportsType, setReportsType ] = useState(reportDetails?.reportType);
	const dispatch = useDispatch()
	useEffect(() => {
		if (!loginUser) {
			navigate('/login');
		}
		if (!reportDetails) {
			dispatch(getReportData(loginUser))
		}
		setReportsData(reportDetails?.reports);
		setReportsType(reportDetails?.reportType);
	},
		[loginUser, reportDetails]
	);

	useEffect(() => {
			let reportData = [];
			if (searchFilters.reportType !== 'All') {
				reportData = reportsData.filter((report) => report.reportType == searchFilters.reportType);
			} else {
				reportData = reportsData;
			}
			if (searchFilters.from !== '') {
				let x = new Date(searchFilters.from);
				reportData = reportData.filter((report) => x <= new Date(report.date));
			}
			if (searchFilters.to !== '') {
				let x = new Date(searchFilters.to);
				reportData = reportData.filter((report) => x >= new Date(report.date));
			}
			setReportsData(reportData);
		},
		[ searchFilters ]
	);

	const handleFilterChange = (e: any) => {
		setSearchFilters({ ...searchFilters, [e.target.name]: e.target.value });
	};

	return (
		<Layout>
			<div className="site-content">
				<div className="site-container">
					<div className="site-card">
						<div className="reports-content">
							<h2>{strings("Reports.title")}</h2>

							<div className="filterSection">
								<select
									className="custom-select custom-select-lg"
									name="reportType"
									value={searchFilters.reportType}
									onChange={handleFilterChange}
								>
									<option selected value="All">
										{strings("Reports.placeholderDropown")}
									</option>
									{reportsType && reportsType.map((type) => <option value={type.id}>{type.name}</option>)}
								</select>
								<input
									type="date"
									className="searchBar"
									placeholder="From"
									name="from"
									value={searchFilters.from}
									onChange={handleFilterChange}
								/>
								<input
									type="date"
									className="searchBar"
									placeholder="To"
									name="to"
									value={searchFilters.to}
									onChange={handleFilterChange}
								/>
							</div>

							<div className="site-content-cards">
								{reportsData &&
									reportsData.length > 0 &&
									reportsData.map((reportObj, ind) => (
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
		</Layout>
	);
};
export default Reports;
