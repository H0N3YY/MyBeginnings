import { useState } from "react";
import Card from "./Card";
import HalloweenVersionEasy from "../Version/Halloween/HalloweenVersionEasy";

const Cards = () => {
  const [items, setItems] = useState(
    HalloweenVersionEasy().sort(() => Math.random() - 0.5)
  );

  const [disabledCards, setDisabledCards] = useState([]);
  const [blockClick, setBlockClick] = useState(false);
  const [prev, setPrev] = useState(-1);

  const check = (current) => {
    if (items[current].id === items[prev].id && current !== prev) {
      items[current].stat = "correct";
      items[prev].stat = "correct";
      setItems([...items]);
      setPrev(-1);
      setBlockClick(false);
      setDisabledCards(disabledCards.concat([current, prev]));
    } else {
      items[current].stat = "wrong";
      items[prev].stat = "wrong";
      setItems([...items]);
      setTimeout(() => {
        items[current].stat = "";
        items[prev].stat = "";
        setItems([...items]);
        setPrev(-1);
        setBlockClick(false);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (!disabledCards.includes(id)) {
      if (prev === -1) {
        // pierwsze kliekniecie
        items[id].stat = "active";
        setItems([...items]);
        setPrev(id);
      } else {
        // drugie kliekniecie
        setBlockClick(true);
        check(id);
      }
    }
  };

  return (
    <div className="container">
      {items.map((item, index) => (
        <Card
          key={index}
          item={item}
          id={index}
          handleClick={handleClick}
          blockClick={blockClick}
        />
      ))}
    </div>
  );
};

export default Cards;
