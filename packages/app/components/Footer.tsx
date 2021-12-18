import { NextPage } from "next";
import { strings } from "../common/utils/utils";
const Footer: NextPage = () => {
    return (
        <div>
            <h3>{strings("Footer.title")}</h3>
        </div>
    );
};

export default Footer;
