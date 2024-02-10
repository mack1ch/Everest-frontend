import { ButtonCover } from "@/entities/buttons-slice/buttonCover";
import styles from "./ui.module.scss";

export const CoverBlock = () => {
  return (
    <>
      <div className={styles.coverBlock}>
        <section className={styles.cover__left}>
          <h1 className={styles.cover__title}>
            Электрические подстанции нового поколения
          </h1>
          <h3 className={styles.cover_under__title}>
            Улучшение электросетевой энергетики при строительстве и
            реконструкции распредустройств
          </h3>
          <ButtonCover style={{ marginTop: "8px" }}>
            Отправить заявку
          </ButtonCover>
        </section>
      </div>
    </>
  );
};
