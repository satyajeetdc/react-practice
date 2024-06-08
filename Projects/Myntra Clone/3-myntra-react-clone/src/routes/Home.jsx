import React from "react";
import HomeItem from "../components/HomeItem.jsx";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <div className="items-container">
        {items.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Home;
