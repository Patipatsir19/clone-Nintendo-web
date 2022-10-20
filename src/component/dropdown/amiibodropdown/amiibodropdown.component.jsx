import { useState } from "react";

import { AmiiboSubNav } from "../../../Asset/dropdowndata";

import './amiibodropdown.styles.scss'

const AmiiboDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <ul
        className={dropdown ? "ConsoleAndAmiibo clicked" : "ConsoleAndAmiibo"}
        onClick={() => setDropdown(!dropdown)}
      >
        {AmiiboSubNav.map((item) => {
          const { id, path, cName, title } = item;
          return (
            <li key={id}>
              <div
                to={path}
                className={cName}
                onClick={() => setDropdown(false)}
              >
                {title}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AmiiboDropdown;
