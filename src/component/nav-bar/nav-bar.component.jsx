import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";


import { NavItem } from "../../Asset/dropdowndata";
import AmiiboDropdown from "../dropdown/amiibodropdown/amiibodropdown.component";
import SoftwareDropdown from "../dropdown/softwaredropdown/softwaredropdown.component";
import NewsDropdown from "../dropdown/newsdropsdown/newsdropdown.component"
import HelpDropdown from "../dropdown/helpdropdown/helpdropdown.component";

import "./nav-bar.styles.scss";

const Navbar = () => {
  const [showsoftwaredropdown, setShowsoftwaredropdown] = useState(false);
  const [showamiibodropdown, setShowamiibodropdown] = useState(false);
  const [shownewsdropdown, setShownewsdropdown] = useState(false);
  const [showhelpdropdown, setShowhelpdropdown] = useState(false);

  return (
    <Fragment>
      <nav className="navbar">
        <Link to="/" className="Logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"
            alt=""
          />
        </Link>
        <ul className="nav-items">
          {NavItem.map((item) => {
            if (item.subtitle === "ConsoleAndAmiibo") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowamiibodropdown(true)}
                  onMouseLeave={() => setShowamiibodropdown(false)}
                >
                  <div to={item.path}>
                    <item.icon /> {item.title}
                  </div>
                  {showamiibodropdown && <AmiiboDropdown />}
                </li>
              );
            }
            if (item.subtitle === "SoftwareGame") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowsoftwaredropdown(true)}
                  onMouseLeave={() => setShowsoftwaredropdown(false)}
                >
                  <div to={item.path}>
                    <item.icon /> {item.title}
                  </div>
                  {showsoftwaredropdown && <SoftwareDropdown />}
                </li>
              );
            }
            if (item.subtitle === "News") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShownewsdropdown(true)}
                  onMouseLeave={() => setShownewsdropdown(false)}
                >
                  <div to={item.path}>
                    <item.icon /> {item.title}
                  </div>
                  {shownewsdropdown && <NewsDropdown />}
                </li>
              );
            }
            if (item.subtitle === "Help") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setShowhelpdropdown(true)}
                  onMouseLeave={() => setShowhelpdropdown(false)}
                >
                  <div to={item.path}>
                    <item.icon /> {item.title}
                  </div>
                  {showhelpdropdown && <HelpDropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <div to={item.path}>
                  <item.icon /> {item.title}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Navbar;
