import GamepadIcon from "@mui/icons-material/Gamepad";
import StarIcon from "@mui/icons-material/Star";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import FeedIcon from "@mui/icons-material/Feed";

import pokemon from "../Asset/advert.image/pokemon.jpg";

export const NavItem = [
  {
    id: 1,
    icon: (props) => <GamepadIcon {...props} />,
    subtitle: "ConsoleAndAmiibo",
    title: "เครื่องเกมและ Amiibo",
    path: "./consoleAndAmiibo",
    cName: "nav-item",
  },
  {
    id: 2,
    icon: (props) => <StarIcon {...props} />,
    subtitle: "SoftwareGame",
    title: "ซอฟต์แวร์เกม",
    path: "./softWare",
    cName: "nav-item",
  },
  {
    id: 3,
    icon: (props) => <FeedIcon {...props} />,
    subtitle: "News",
    title: "ข่าวสาร",
    path: "./news",
    cName: "nav-item",
  },
  {
    id: 4,
    icon: (props) => <LiveHelpIcon {...props} />,
    subtitle: "Help",
    title: "บริการช่วยเหลือ",
    path: "./helps",
    cName: "nav-item",
  },
];

export const AmiiboSubNav = [
  {
    id: 1,
    Image: "../Asset/dropdown.image/switch_img.png",
    title: "Nintendo Switch Family/ อุปกรณ์เสริม",
    path: "./switch",
    cName: "ConsoleAndAmiibo-subnav",
  },
  {
    id: 2,
    Image: "../Asset/dropdown.image/amiibo.png",
    title: "amiibo",
    path: "./amiibo",
    cName: "ConsoleAndAmiibo-subnav",
  },
  {
    id: 3,
    Image:
      "https://www.nintendo.com/th/hardware/gamewatch/zelda/img/header_pc.jpg",
    title: "game & watch: The Legend of zelda",
    path: "./gamewatch",
    cName: "ConsoleAndAmiibo-subnav",
  },
];

export const Softwaresubnav = [
  {
    id: 1,
    title: "ซอฟต์แวร์เกม Nintendo Switch",
    path: "./softwareGame",
    cName: "SoftwareGame-subnav",
  },
  {
    id: 2,
    title: "แอปพลิเคชั่นสำหรับสมาร์ตโฟน",
    path: "./softwareGame",
    cName: "SoftwareGame-subnav",
  },
];

export const Newssubnav = [
  {
    id: 1,
    image: pokemon,
    title:
      "ใกล้ถึงเวลาออกเดินทางสู่ Pokémon Scarlet and Pokémon Violet แล้ว! เตรียมตัวเข้าสู่โลกแห่งการผจญภัยใบใหม่!",
    path: "./News",
    cName: "News-subnav",
  },
  {
    id: 2,
    image: (props) => (
      <img src="../Asset/advert.image/Splatoon.jpg" alt="" {...props} />
    ),
    title: "เปิดตัววีดีโอตัวอย่างสำหรับภาพรวม slatoon 3",
    path: "./News",
    cName: "News-subnav",
  },
  {
    id: 3,
    image: (props) => (
      <img
        src="https://img.4gamers.com.tw/ckfinder-th/image2/auto/2022-07/Bayonetta-220717-122816.webp?versionId=02Ahi1DRdj3MpGBOQojfZAaJT.YmkWkW"
        alt=""
        {...props}
      />
    ),
    title: "Bayonetta วางจำหน่ายแล้ววันนี้",
    path: "./News",
    cName: "News-subnav",
  },
];

export const Helpsubnav = [
  {
    id: 1,
    title: "บริการช่วยเหลือ Nintendo Switch",
    path: "./Helps",
    cName: "help-subnav",
  },
  {
    id: 2,
    title: "คำถามที่พบบ่อย",
    path: "./Helps",
    cName: "help-subnav",
  },
  {
    id: 3,
    title: "การซ่อมอุปกรณ์",
    path: "./Helps",
    cName: "help-subnav",
  },
];
