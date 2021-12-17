import { NextPage } from "next";
import Footer from "./Footer";
import Header from "./Header";
import LoginForm from "../module/login/screens/Login-form";

const Layout: NextPage = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
