import React from "react";
import Header from "../components/header/Header";
import style from "./style.module.css";
import HeaderContent from "../components/header_content/HeaderContent";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
function Home(props) {
  return (
    <div>
      <div className={style.home}>
        <div className={style.wrapper_header}>
          <Header />
          <HeaderContent />
        </div>
      </div>
      <main className={style.main}>
        <h1 className={style.main_title}>Почему выбирают нас</h1>
        <WhyChooseUs />
      </main>
    </div>
  );
}

export default Home;
