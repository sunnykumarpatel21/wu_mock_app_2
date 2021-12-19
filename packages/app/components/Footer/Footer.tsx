import { NextPage } from "next";
import { strings } from "../../common/utils/utils";
import styles from "./footer.module.css";
const Footer: NextPage = () => {
    return (
        <div className={styles.footer}>
            <h3>{strings("Footer.title")}</h3>
        </div>
    );
};

export default Footer;
