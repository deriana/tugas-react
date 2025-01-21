import { useState } from "react";

const ListGroup = ({ items, heading }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
      <br />
    </>
  );
};

export default ListGroup;
