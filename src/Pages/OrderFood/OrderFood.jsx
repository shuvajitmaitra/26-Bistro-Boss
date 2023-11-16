import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImage from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hook/useMenu";
import { useState } from "react";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";

const OrderFood = () => {
  const item = ['salad', 'pizza', 'dessert', 'soup', 'drinks']
  const {category} = useParams()
  const initialIndex = item.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();

  const pizzas = menus.filter((item) => item.category === "pizza");
  const dessert = menus.filter((item) => item.category === "dessert");
  const soup = menus.filter((item) => item.category === "soup");
  const salad = menus.filter((item) => item.category === "salad");
  const drink = menus.filter((item) => item.category === "drinks");

  return (
    <div className="max-w-screen-xl mx-auto">
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover
        description={"Would you like to try a dish?"}
        title={"OUR SHOP"}
        imageCover={coverImage}
      ></Cover>

      <Tabs
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
        className={"text-center mt-5"}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Desserts</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={drink}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default OrderFood;
