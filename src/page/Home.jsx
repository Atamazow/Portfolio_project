import React from "react";
import Header from "../components/header/Header";
import style from "./style.module.css";
import HeaderContent from "../components/header_content/HeaderContent";
function Home(props) {
  return (
    <div className={style.home}>
      <div className={style.wrapper_header}>
        <Header />
        <HeaderContent />
      </div>
    </div>
  );
}

export default Home;
