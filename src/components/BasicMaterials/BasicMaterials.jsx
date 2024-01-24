import React from "react";
import style from "./BasicMaterials.module.css";
import Rectangle10 from "../../assets/image/Rectangle 10.png";
import Rectangle11 from "../../assets/image/Rectangle 11.png";
import Rectangle12 from "../../assets/image/Rectangle 12.jpg";
import Rectangle13 from "../../assets/image/Rectangle 13.png";

function YourComponent(props) {
  const imagesWithText = [
    { src: Rectangle10, text: "Песок" },
    { src: Rectangle11, text: "Щебень" },
    { src: Rectangle12, text: "Асфальтная крошка" },
    { src: Rectangle13, text: "Аренда техники" },
  ];

  return (
    <div className={style.imageContainer}>
      {imagesWithText.map((item, index) => (
        <div className={style.wrapper_img_title} key={index}>
          <img
            className={style.img_basic}
            src={item.src}
            alt={`Изображение ${index + 1}`}
          />
          <div className={style.overlayText}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export default YourComponent;
