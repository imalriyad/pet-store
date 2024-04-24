import { NavbarComponent } from "../components/header/Navbar";
import HeroCompo from "../components/header/HeroCompo";
import Category from "../components/header/category/Category";
import PetClothing from "../components/Section/PetClothing";
import Card from "../components/Card";

const Home = () => {
  const cradNum = [1,2,43,5,87,67,8,6,9,0,5,9]
  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <HeroCompo></HeroCompo>
      <div className="max-w-screen-xl px-4 md:px-8 lg:px-14 py-10 mx-auto">
        <Category></Category>
        <PetClothing></PetClothing>
        <div className="grid grid-cols-4 gap-4">
          {cradNum.map((map) => (
            <Card key={map}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
