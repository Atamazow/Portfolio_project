import React from "react";
import Frame from "../../assets/Icons/Frame.svg";
import Frame1 from "../../assets/Icons/Frame (1).svg";
import Frame2 from "../../assets/Icons/Frame (2).svg";
import Frame3 from "../../assets/Icons/Frame (3).svg";
import Star from "../../assets/Icons/star.svg";
import style from "./WhyChooseUs.module.css";
function WhyChooseUs(props) {
  const data = [
    { icon: Frame, title: "Мы работаем с 2000 года", number: 2000 },
    { icon: Frame1, title: "Более 5000 счастливых клиентов", number: 5000 },
    { icon: Frame2, title: "Лучшие цены" },
    { icon: Star, title: "Качественная продукция" },
    { icon: Frame3, title: "Оперативность" },
  ];
  return (
    <div>
      <div className={style.wrapper_main_choose}>
        {data.map((item) => (
          <div className={style.wrapper_icon_title}>
            <img className={style.img_icon} src={item.icon} alt="" />
            <div className={`${style.choose_title}`}>{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
