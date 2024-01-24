import React from "react";
import style from "../../page/style.module.css";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import BasicMaterials from "../BasicMaterials/BasicMaterials";

function Main(props) {
  return (
    <main className={style.main}>
      <h1 className={style.main_title}>Почему выбирают нас</h1>
      <WhyChooseUs />
      <h1 className={style.main_title}>Основные материалы</h1>
      <BasicMaterials />
    </main>
  );
}

export default Main;
