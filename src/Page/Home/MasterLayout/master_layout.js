import Footer from "../../../Components/Footer/footer";
import Header from "../../../Components/Header/header";

const MasterLayout = ({ children, ...props }) => {
    return (
        <div {...props}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MasterLayout;
