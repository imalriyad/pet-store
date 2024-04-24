import { NavbarComponent } from "../components/header/Navbar";
import HeroCompo from "../components/header/HeroCompo";
import Category from "../components/header/category/Category";
import PetClothing from "../components/Section/PetClothing";


const Home = () => {
 
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <HeroCompo></HeroCompo>
      <div className="max-w-screen-xl px-4 md:px-8 lg:px-14 py-10 mx-auto">
        <Category></Category>
        <PetClothing></PetClothing>
      
      </div>
    </div>
  );
};

export default Home;
