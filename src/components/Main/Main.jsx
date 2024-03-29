import React from "react";
import style from "../../page/style.module.css";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import BasicMaterials from "../BasicMaterials/BasicMaterials";
import AboutCompany from "../AboutCompany/AboutCompany";
import Questions from "../Questions/Questions";
import Delivery from "../Delivery/Delivery";

function Main(props) {
  return (
    <div>
      <main className={style.main}>
        <h1 className={style.main_title}>Почему выбирают нас</h1>
        <WhyChooseUs />
        <h1 className={style.main_title}>Основные материалы</h1>
        <BasicMaterials />
        <AboutCompany />
      </main>
      <Questions />
      <Delivery />
    </div>
  );
}

export default Main;
