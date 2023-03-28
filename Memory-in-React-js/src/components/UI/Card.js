import "./Card.css";

const Card = ({ item, id, handleClick, blockClick }) => {
  const itemClass = item.stat ? " active " + item.stat : "";

  return (
    <div
      className={"card" + itemClass}
      onClick={() => (!blockClick ? handleClick(id) : "")}
    >
      <img src={item.img} alt="" />
    </div>
  );
};

export default Card;
