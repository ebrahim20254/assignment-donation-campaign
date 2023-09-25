import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Pictures from "../../components/Pictures/Pictures";


const Home = () => {
    const pictures = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <Pictures pictures={pictures}></Pictures>
        </div>
    );
};

export default Home;