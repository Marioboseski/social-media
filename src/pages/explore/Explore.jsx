import exploreData from "../../data/exploreData";

const Explore = () => {
  return (
    <div className="grid grid-cols-3 gap-[0.1rem]">
      {exploreData.map((explore) => (
        <img key={explore.id} src={explore.image} alt="explore-img" className="h-full object-cover" />
      ))}
    </div>
  );
}

export default Explore;