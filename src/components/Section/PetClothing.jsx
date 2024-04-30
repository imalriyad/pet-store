import Card from "../Card";
import SectionTitle from "./SectionTitle";


const PetClothing = () => {
  const cradNum = [1, 2, 3, 4];
  return (
    <div>
      <SectionTitle sectionTitle={"Pet Clothing"}></SectionTitle>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-2 pt-6">
        {cradNum.map((map) => (
          <Card key={map}></Card>
        ))}
      </div>
    </div>
  );
};

export default PetClothing;
