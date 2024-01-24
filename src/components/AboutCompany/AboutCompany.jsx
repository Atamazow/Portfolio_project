import React from "react";
import style from "./AboutCompany.module.css";
function AboutCompany(props) {
  return (
    <div>
      <div className={style.wrapper_aboutCompany}>
        <div className={style.wrapper_about_title_text}>
          <div className={style.about_title}>О компании СПЕЦ-ТРАНС</div>
          <div className={style.about_text}>
            Наша фирма существует уже многие годы, заработав репутацию на рынке
            предлагаемых услуг как надежного и ответственного партнера. В число
            наших клиентов вошли крупнейшие организации. При этом стоит
            отметить, что на индивидуальный подход при заказе наших услуг могут
            рассчитывать как крупные компании, так и частные лица.
          </div>
        </div>
        <div className={style.wrapper_count_about}>
          <div className={style.about_count_relative}>
            <div className={style.about_count}>
              60 <span className={style.about_count_plus}>+</span>
            </div>
            <div className={style.about_count_title}>Единиц техники</div>
          </div>
          <div>
            <div className={style.about_count}>15</div>
            <div className={style.about_count_title}>Карьеров</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCompany;
