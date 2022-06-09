import React from "react";
import "../baseStyles.css";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header_cont}>
      <p className={s.header_text}>Онлайн запись</p>
      <p className={s.header_text}><img className={s.header_image} src="https://media.istockphoto.com/photos/cropped-portrait-of-an-attractive-young-female-scientist-posing-in-picture-id1340903310?b=1&k=20&m=1340903310&s=612x612&w=0&h=I-LIGHNADUEBRBnYZKNYPs3AAzSsNmEuZ_C_1O99h7U="/></p>
    </div>
  );
};

export default Header;
