import React from "react";
import style from "./HeaderContent.module.css";
function HeaderContent(props) {
  return (
    <div>
      <div className={style.header_content}>
        <div className={style.header_content_title}>
          Продажа и доставка нерудных материалов
        </div>
        <div className={style.header_content_text}>
          У нас вы можете заказать материалы премиального качества.
          Индивидуальный подход и качественная продукция – ключевые преимущества
          нашей компании.
        </div>
        <div className={style.header_content_btn}>Заказать звонок</div>
      </div>
    </div>
  );
}

export default HeaderContent;
