import Title from "../../Shared/Tilte/Title";
import Card from "../Card/Card";
import useMenu from "../../Hook/useMenu";

const ChefRecommendation = () => {
  const [menus] = useMenu();
  const data = menus?.filter((onData) => onData.category == "salad");

  return (
    <div className="mt-20 py-14 max-w-screen-2xl mx-auto">
      <Title
        subTitle="---Should Try---"
        mainTitle="CHEF RECOMMENDS"
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {data?.map((item) => (
          <Card
            key={item._id}
            item={item}
          ></Card>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommendation;
