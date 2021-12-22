import { NextPage } from 'next';
import { strings } from '../../common/utils/utils';
import common from '../../locales/en/common.json';
const Footer: NextPage = () => {
	return (
		<div>
			{/* <h3>{strings("Footer.title")}</h3> */}
			<h3>{common.Footer.title}</h3>
		</div>
	);
};

export default Footer;
