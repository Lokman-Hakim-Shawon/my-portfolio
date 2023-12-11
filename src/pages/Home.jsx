import Banner from "../componets/Banner";
import MyProjects from "../componets/MyProjects";
import MySkill from "../componets/MySkill";
import Myresume from "../componets/Myresume";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="p-10">
            <div className="flex justify-center  w-full">
            <Myresume ></Myresume>
            </div>
            <MyProjects></MyProjects>
            <MySkill></MySkill>
            <div className="flex justify-center py-10 w-full">
            <Myresume ></Myresume>
            </div>
            </div>
        </div>
    );
};

export default Home;