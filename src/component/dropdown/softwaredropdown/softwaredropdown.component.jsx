import { useState } from "react";

import { Softwaresubnav } from "../../../Asset/dropdowndata";

import './softwaredropdown.styles.scss'

const SoftwareDropdown = () => {
    const [dropdown, setDropdown] = useState(false)
    return (
        <ul
        className={dropdown ? "SoftwareGame clicked" : "SoftwareGame"}
        onClick={() => setDropdown(!dropdown)}
      >
        {Softwaresubnav.map((item) => {
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

export default SoftwareDropdown;