import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Home/Banner";
import ChafService from "../../Components/Home/ChafService";
import ChefRecommendation from "../../Components/Home/ChefRecommendation";
import Contacts from "../../Components/Home/Contacts";
import FromOurMenu from "../../Components/Home/FromOurMenu";
import OnlineOrder from "../../Components/Home/OnlineOrder";
import Testimonials from "../../Components/Home/Testimonials";
import MenuByCategory from "../../Shared/MenuByCategory/MenuByCategory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <OnlineOrder></OnlineOrder>
      <ChafService></ChafService>
      <MenuByCategory
        subTitle="---Check it out---"
        mainTitle="FROM OUR MENU"
        category="popular"
      ></MenuByCategory>
      <Contacts></Contacts>
      <ChefRecommendation></ChefRecommendation>
      <FromOurMenu></FromOurMenu>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
