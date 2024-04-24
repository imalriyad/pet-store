import Card from "../Card";
import SectionTitle from "./SectionTitle";


const PetClothing = () => {
  const cradNum = [1, 2, 3, 4];
  return (
    <div>
      <SectionTitle></SectionTitle>
      <div className="grid grid-cols-4 gap-4 pt-6">
        {cradNum.map((map) => (
          <Card key={map}></Card>
        ))}
      </div>
    </div>
  );
};

export default PetClothing;
