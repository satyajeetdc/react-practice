import { useState } from "react";
import Item from "./Item";

function FoodItems({ items }) {
  let [activeItems, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            buyHandler={(event) => onBuyButton(item, event)}
            bought={activeItems.includes(item)}
          />
        ))}
      </ul>
    </>
  );
}

export default FoodItems;
