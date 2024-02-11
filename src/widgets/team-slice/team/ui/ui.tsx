"use client";

import { CSSProperties, useEffect, useState } from "react";
import styles from "./ui.module.scss";
import Image from "next/image";
import ArrowRight from "../../../../../public/icons/arrowRight.svg";
import ArrowLeft from "../../../../../public/icons/arrowLeft.svg";
import Flash from "../../../../../public/icons/flash-2d.png";
import { TeamData } from "../data";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { arrowSize, flashSize } from "../model";

export const Team = () => {
  const [offset, setOffset] = useState<CSSProperties["width"]>();
  const [arrowSizeState, setArrowSize] = useState<number>(48);
  const [flashSizeState, setFlashSize] = useState<number>(34);
  const windowSize = useWindowSize();
  useEffect(() => {
    setArrowSize(arrowSize(windowSize));
    setFlashSize(flashSize(windowSize));
  }, [windowSize]);

  const handleLeftArrowClick = () => {
    setOffset("0");
  };

  const handleRightArrowClick = () => {
    setOffset("-100%");
  };

  return (
    <>
      <div className={styles.layout}>
        <h2 id="team" className={styles.h2}>
          Команда
        </h2>
        <div className={styles.slider}>
          <Image
            style={{ cursor: "pointer" }}
            src={ArrowLeft}
            width={arrowSizeState}
            height={arrowSizeState}
            alt="left"
            onClick={handleLeftArrowClick}
          />
          <div className={styles.wrap}>
            <div
              style={{
                transform: `translateX(${offset})`,
              }}
              className={styles.container}
            >
              {TeamData.map((item) => (
                <article
                  style={{ minWidth: "100%", maxWidth: "auto" }}
                  key={item.id}
                  className={styles.article}
                >
                  <div className={styles.header}>
                    <div className={styles.head}>
                      <h3 className={styles.h3}>{item.FIO}</h3>
                      <h4 className={styles.h4}>{item.role}</h4>
                    </div>
                    <div className={styles.row}>
                      <ul className={styles.achievementList}>
                        {item.achievements.map((achievement, index) => (
                          <li className={styles.achievement} key={index}>
                            <Image
                              src={Flash}
                              width={flashSizeState}
                              height={flashSizeState}
                              alt="Flash"
                            />
                            <span className={styles.value}>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div
                        className={styles.img}
                        style={{
                          background: `url(${item.profileLogo?.src})`,
                          backgroundPosition: "center center",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                        }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <Image
            style={{ cursor: "pointer" }}
            src={ArrowRight}
            width={arrowSizeState}
            height={arrowSizeState}
            alt="right"
            onClick={handleRightArrowClick}
          />
        </div>
      </div>
    </>
  );
};
