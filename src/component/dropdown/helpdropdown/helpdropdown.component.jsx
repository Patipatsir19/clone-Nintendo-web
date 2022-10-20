import { useState } from "react";

import { Helpsubnav } from "../../../Asset/dropdowndata";

import './helpdropdown.styles.scss'

const HelpDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <ul
        className={dropdown ? "help clicked" : "help"}
        onClick={() => setDropdown(!dropdown)}
      >
        {Helpsubnav.map((item) => {
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
    )
}

export default HelpDropdown;