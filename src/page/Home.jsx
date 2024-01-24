import React from "react";
import Header from "../components/header/Header";
import style from "./style.module.css";
import HeaderContent from "../components/header_content/HeaderContent";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Main from "../components/Main/Main";
function Home(props) {
  return (
    <div>
      <div className={style.home}>
        <div className={style.wrapper_header}>
          <Header />
          <HeaderContent />
        </div>
      </div>
      <Main />
    </div>
  );
}

export default Home;
