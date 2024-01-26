import React from "react";
import style from "./Delivery.module.css";
import star from "../../assets/Icons/start.svg";
function Delivery(props) {
  const data = [
    {
      icon: star,
      text: "Вы оставляете заявку через сайт или по телефону.",
    },
    {
      icon: star,
      text: "Мы производим точный расчет стоимости",
    },
    {
      icon: star,
      text: "Осуществляем поставку заказанного вами материала точно в срок",
    },
    {
      icon: star,
      text: "Соблюдаем своевременный документооборот",
    },
  ];
  return (
    <div className={style.wrapper_delivery}>
      <div className={style.wrapper_deliveryTwo}>
        <div className={style.delivery_title}>Доставка</div>
        <div className={style.delivery_text}>
          Основная миссия компании Спец-транс — комплексные поставки нерудных
          материалов для корпоративных клиентов и частных лиц. Мы осуществлем
          доставку по Санкт-Петербургу и Ленинградской области.
        </div>
        <div>
          {data.map((item) => (
            <div className={style.wrapper_delivery_iconText}>
              <img src={item.icon} />
              <div className={style.delivery_text_mini}>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Delivery;
