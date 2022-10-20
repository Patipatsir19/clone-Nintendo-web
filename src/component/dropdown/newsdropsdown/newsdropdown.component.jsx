import { useState } from "react";

import { Newssubnav } from "../../../Asset/dropdowndata";

import "./newsdropdown.styles.scss";

const NewsDropdown = () => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <ul
      className={dropdown ? "News clicked" : "News"}
      onClick={() => setDropdown(!dropdown)}
    >
      {Newssubnav.map((item) => {
        const { id, path, cName, title } = item;
        return (
          <li key={id}>
            <div to={path} className={cName} onClick={() => setDropdown(false)}>
              {title}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default NewsDropdown;
