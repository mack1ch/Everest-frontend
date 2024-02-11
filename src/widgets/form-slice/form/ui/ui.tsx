"use client";

import { Input, Toast } from "@skbkontur/react-ui";
import styles from "./ui.module.scss";
import { ValidationError, useForm } from "@formspree/react";
import Link from "next/link";

export const Form = () => {
  const [state, handleSubmit] = useForm("xoqgdaee");
  if (state.succeeded) {
    Toast.push("Форма отправлена", null, 1500);
  }
  return (
    <>
      <div id="form" className={styles.layout}>
        <dt className={styles.info}>
          <h3 className={styles.h3}>Остались вопросы или хотите заказать? </h3>
          <p className={styles.p}>
            Заполните форму и мы свяжется с вами в ближайшее время
          </p>
        </dt>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputLayout}>
            <Input
              id="FIO"
              type="text"
              name="FIO"
              style={{ fontWeight: "300" }}
              size="large"
              width={"100%"}
              placeholder="ФИО"
            />
            <Input
              id="email"
              type="email"
              name="email"
              style={{ fontWeight: "300" }}
              size="large"
              width={"100%"}
              placeholder="Электронная почта"
            />
            <Input
              style={{ fontWeight: "300" }}
              size="large"
              width={"100%"}
              id="phone"
              type="number"
              name="phone"
              placeholder="Номер телефона"
            />
          </div>
          <div className={styles.submit}>
            <button className={styles.submitBtn} type="submit">
              Отправить
            </button>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <span className={styles.text}>
              Заполняя форму, вы соглашаетесь <br />
              на 
              <Link href="/document" className={styles.link}>
                обработку персональных данных{" "}
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};
