"use client";

import { ButtonCover } from "@/entities/buttons-slice/buttonCover";
import styles from "./ui.module.scss";
import Image from "next/image";
import Cover from "../../../../../public/assets/coverIMG.png";
import CoverSVG from "../../../../../public/assets/coverIMG.svg";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
export const CoverBlock = () => {
  const windowSize = useWindowSize();
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
        <Image
          className={styles.img}
          style={{ marginTop: "80px", userSelect: "none" }}
          src={CoverSVG}
          blurDataURL={Cover.src}
          width={windowSize < 800 ? 279 : windowSize > 1200 ? 542 : 387}
          height={windowSize < 800 ? 195 : windowSize > 1200 ? 379 : 271}
          alt="Cover"
        />
      </div>
    </>
  );
};
