import React from "react";
import "../baseStyles.css";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header_cont}>
      <p className={s.header_text}>Online appointment</p>
      <p className={s.header_text}>Hi, Doctor ;)</p>
    </div>
  );
};

export default Header;
