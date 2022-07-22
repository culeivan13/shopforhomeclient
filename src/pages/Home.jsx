import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Welcome />
            <Categories />
            <Footer />
        </div>
    );
}

export default Home;