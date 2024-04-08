import { NavbarComponent } from "../components/header/Navbar";
import HeroCompo from "../components/header/HeroCompo";
import Category from "../components/header/category/Category";

const Home = () => {
  return (
    <div className="">
      <NavbarComponent></NavbarComponent>
      <HeroCompo></HeroCompo>
      <Category></Category>
    </div>
  );
};

export default Home;
