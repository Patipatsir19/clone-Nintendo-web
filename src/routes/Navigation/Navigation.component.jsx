import { Fragment } from "react";

import GamepadIcon from "@mui/icons-material/Gamepad";
import StarIcon from "@mui/icons-material/Star";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import FeedIcon from "@mui/icons-material/Feed";

import { Link } from "react-router-dom";

import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="Navigation-Container">
        <Link className="Logo-Container" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"
            alt=""
          />
        </Link>
        <ul className="List-container">
          <li className="Amiibo-Link">
            <Link>
              <GamepadIcon />
              <span>เครื่องเกมและ amiibo</span>
            </Link>
          </li>
          <li className="Software-Link">
            <Link>
              <StarIcon /> <span>ซอฟต์แวร์เกม</span>
            </Link>
          </li>
          <li className="News-Link">
            <Link>
              <FeedIcon />
              <span>ข่าวสาร</span>
            </Link>
          </li>
          <li className="Helpservice-Link">
            <Link>
              <LiveHelpIcon />
              <span>บริการช่วยเหลือ</span>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Navigation;
