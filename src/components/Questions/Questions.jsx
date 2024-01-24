import React from "react";
import style from "./Questions.module.css";
function Questions(props) {
  return (
    <div className={style.wrapper_questions}>
      <div className={style.wrapper_questions_two}>
        <div>
          <div className={style.questions_title}>Остались вопросы?</div>
          <div className={style.questions_textGreen}>
            Закажите обратный звонок и <br /> узнайте больше о наших услугах!
          </div>
          <div className={style.questions_textGrey}>
            Оставьте заявку и наш менеджер перезвонит <br /> вам в течении 10
            минут
          </div>
          <div className={style.questions_btn}>Заказать звонок</div>
        </div>
        <div className={style.questions_wrapper_input}>
          <div className={style.questions_wrapper_inputPadding}>
            <div className={style.questions_inputDiv}>
              <input
                className={style.questions_inputName}
                type="text"
                placeholder="Имя"
              />
            </div>
            <div className={style.questions_inputDiv}>
              <input
                className={style.questions_inputPhone}
                type="text"
                placeholder="Телефон"
              />
            </div>
            <div className={style.questions_inputDivComm}>
              <input
                className={style.questions_inputComm}
                type="text"
                placeholder="Комментарии"
              />
            </div>
            <div className={style.questions_inputNext}>
              Соглашение о персональных данных
            </div>
          </div>
        </div>

        <div className={style.questions_BlockGreen}></div>
      </div>
    </div>
  );
}

export default Questions;
