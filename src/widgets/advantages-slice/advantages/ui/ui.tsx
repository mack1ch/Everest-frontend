"use client";

import Image from "next/image";
import { AdvantagesItemsData } from "../data";
import styles from "./ui.module.scss";
import { useWindowSize } from "@/shared/hooks/useWindowSize";

export const Advantages = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className={styles.layout}>
        <h2 id="advantages" className={styles.h2}>
          Преимущества
        </h2>
        <div className={styles.cardsWrap}>
          <section className={styles.firstBlock}>
            <div className={styles.row}>
              {AdvantagesItemsData.slice(0, 2).map((item) => (
                <article
                  style={{
                    background: item.isActive ? "#2C7CC8" : undefined,
                  }}
                  className={styles.article}
                  key={item.id}
                >
                  <div className={styles.header}>
                    <Image
                      src={item.icon}
                      width={windowSize > 900 ? 150 : 102}
                      height={windowSize > 900 ? 135 : 92}
                      alt={item.title}
                    />
                    <h4
                      style={{ color: item.isActive ? "#fff" : undefined }}
                      className={styles.h4}
                    >
                      {item.title}
                    </h4>
                  </div>
                  <p
                    style={{ color: item.isActive ? "#fff" : undefined }}
                    className={styles.p}
                  >
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
            <article className={styles.article}>
              <div className={styles.header}>
                <Image
                  src={AdvantagesItemsData[3].icon}
                  width={windowSize > 900 ? 150 : 102}
                  height={windowSize > 900 ? 135 : 92}
                  alt={AdvantagesItemsData[3].title}
                />
                <h4
                  style={{
                    color: AdvantagesItemsData[3].isActive ? "#fff" : undefined,
                  }}
                  className={styles.h4}
                >
                  {AdvantagesItemsData[3].title}
                </h4>
              </div>
              <p
                style={{
                  color: AdvantagesItemsData[3].isActive ? "#fff" : undefined,
                }}
                className={styles.p}
              >
                {AdvantagesItemsData[3].description}
              </p>
            </article>
          </section>
          <section className={styles.secondBlock}>
            <article
              style={{
                background: AdvantagesItemsData[2].isActive
                  ? "#2C7CC8"
                  : undefined,
              }}
              className={styles.article}
              key={AdvantagesItemsData[2].id}
            >
              <div className={styles.header}>
                <Image
                  src={AdvantagesItemsData[2].icon}
                  width={windowSize > 900 ? 150 : 102}
                  height={windowSize > 900 ? 135 : 92}
                  alt={AdvantagesItemsData[2].title}
                />
                <h4
                  style={{
                    color: AdvantagesItemsData[2].isActive ? "#fff" : undefined,
                  }}
                  className={styles.h4}
                >
                  {AdvantagesItemsData[2].title}
                </h4>
              </div>
              <p
                style={{
                  color: AdvantagesItemsData[2].isActive ? "#fff" : undefined,
                }}
                className={styles.p}
              >
                {AdvantagesItemsData[2].description}
              </p>
            </article>

            <article
              style={{
                background: AdvantagesItemsData[4].isActive
                  ? "#2C7CC8"
                  : undefined,
              }}
              className={styles.article}
              key={AdvantagesItemsData[4].id}
            >
              <div className={styles.header}>
                <Image
                  src={AdvantagesItemsData[4].icon}
                  width={windowSize > 900 ? 150 : 102}
                  height={windowSize > 900 ? 135 : 92}
                  alt={AdvantagesItemsData[4].title}
                />
                <h4
                  style={{
                    color: AdvantagesItemsData[4].isActive ? "#fff" : undefined,
                  }}
                  className={styles.h4}
                >
                  {AdvantagesItemsData[4].title}
                </h4>
              </div>
              <p
                style={{
                  color: AdvantagesItemsData[4].isActive ? "#fff" : undefined,
                }}
                className={styles.p}
              >
                {AdvantagesItemsData[4].description}
              </p>
            </article>
          </section>
        </div>
      </div>
    </>
  );
};
