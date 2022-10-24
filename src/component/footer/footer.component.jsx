import { Link } from "react-router-dom";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import "./footer.sttyles.scss";
import Button from "../button/button.component";

const Footer = () => {
    const backToTop = () => {
        window.scrollTo({
            top: 0,
            behavior:"smooth"
        })
    }

  return (
    <div>
      <div className="back-to-top-bar">
        <Link to="/" className="Logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Nintendo.svg"
            alt=""
          />
        </Link>
        <Button buttonType="returntotop" className="btn" onClick={backToTop}>
          <ExpandLessIcon />
        </Button>
      </div>
      <div className="menu-list">
        <div className="group1">
          <ul>
            <h2>เครื่องเกม และ Amiibo</h2>
            <li>Nintendo Switch Family</li>
            <li>Nintendo Switch - OLED Model</li>
            <li>Nintendo Switch</li>
            <li>Nintendo Switch Lite</li>
            <li>เปรียบเทียบฟีเจอร์และจุดเด่น</li>
            <li>อุปกรณ์เสริม</li>
            <li>amiibo</li>
          </ul>
        </div>
        <div className="group2">
          <ul>
            <h2>ซอฟต์แวร์เกม</h2>
            <li>บริการช่วยเหลือ Nintendo Switch</li>
            <li>แอปพลิเคชั่นสำหรับสมาร์ตโฟน</li>
            <li>กำหนดการวางขาย</li>
            <li>Parental Controls</li>
            <li>เกี่ยวกับการซื้อเกม</li>
          </ul>
          <ul>
            <h2>ข่าวการและการอัพเดท</h2>
            <li>ข่าวสารและการอัพเดท</li>
          </ul>
        </div>
        <div className="group3">
          <ul>
            <h2>บริการช่วยเหลือ</h2>
            <li>บริการช่วยเหลือNintendo Switch</li>
            <li>คำถามที่พบบ่อย</li>
            <li>การซ่อมอุปกรณ์</li>
          </ul>
        </div>
        <div className="group4">
          <span>Youtube</span>
          <span>Facebook</span>
          <span>Instragram</span>
          <span>ข้อมูลสำหรับผู้ปกครอง</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
