import React from "react";
import style from "./header.module.css";
import icon from "../../assets/Icons/f_41164214e543b92c (1) 1.svg";
function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.wrapper_nav_log}>
        <img src={icon} className={style.header_navOne} />
        <div className={style.header_nav}>Материалы</div>
        <div className={style.header_nav}>Доставка и оплата</div>
        <div className={style.header_nav}>О компании</div>
        <div className={style.header_nav}>Контакты</div>
      </div>
    </header>
  );
}

export default Header;
