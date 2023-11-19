import { useEffect, useState } from "react";
import Title from "../Tilte/Title";
import Menu from "../Menu/Menu";
import { Link } from "react-router-dom";

const MenuByCategory = ({ mainTitle, subTitle, category }) => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const menus = data?.filter(
          (singleData) => singleData.category == category
        );
        setMenus(menus);
      });
  }, [category]);
  return (
    <div className="max-w-screen-2xl mx-auto mt-20 ">
      <Title
        subTitle={subTitle}
        mainTitle={mainTitle}
      ></Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {menus?.map((menu) => (
          <Menu
            key={menu._id}
            title={menu.name}
            image={menu.image}
            price={menu.price}
            description={menu.recipe}
          ></Menu>
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn border-b-4 btn-ghost border-b-black ">
          View Full Menu
        </button>
      </div>
      <Link to={`/order-food/${category}`}>
        <button className="btn border-b-4 btn-ghost border-b-black ">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuByCategory;
