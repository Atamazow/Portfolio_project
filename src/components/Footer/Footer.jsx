import React from "react";
import style from "./Footer.module.css";
import Logo from "../../assets/Icons/spec.svg";
import Vk from "../../assets/Icons/vk.svg";
import Facebook from "../../assets/Icons/faceebok.svg";
import WhatsApp from "../../assets/Icons/whatsapp.svg";
function Footer(props) {
  return (
    <div className={style.footer}>
      <div className={style.footer_wrapper}>
        <div className={style.footer_info}>
          <img src={Logo} />
          <div className={style.footerText}>
            Политика конфиденциальности © спец-транс, 2023
          </div>
        </div>
        <div className={style.footerMaterial}>
          <div>Материалы</div>
          <div className={style.footerUslugi}>Услуги</div>
        </div>
        <div className={style.footerWrapperLogo}>
          <img src={Vk} alt="" />
          <img className={style.facebook} src={Facebook} alt="" />
          <img src={WhatsApp} alt="" />
          <div className={style.footerNumber}>+7 928 245 15 20</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
