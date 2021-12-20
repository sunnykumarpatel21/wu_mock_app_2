import { NextPage } from "next";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout: NextPage = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
