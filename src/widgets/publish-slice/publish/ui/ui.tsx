"use client";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { PublishData } from "../data";
import styles from "./ui.module.scss";
import Image from "next/image";
import MainIMG from "../../../../../public/assets/main.jpg";
export const Publish = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <div className={styles.layout}>
        <h2 className={styles.h2}>Публикации и апробация</h2>
        <div className={styles.blocksWrap}>
          <section className={styles.header}>
            {windowSize > 640 ? (
              PublishData.map((item) => (
                <li key={item.id} className={styles.item}>
                  <h4 className={styles.h4}>{item.title}</h4>
                  <span className={styles.divider} />
                  <p className={styles.p}>{item.description}</p>
                </li>
              ))
            ) : (
              <>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  {PublishData.slice(0, 2).map((item) => (
                    <li key={item.id} className={styles.item}>
                      <h4 className={styles.h4}>{item.title}</h4>
                      <span className={styles.divider} />
                      <p className={styles.p}>{item.description}</p>
                    </li>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "12px",
                  }}
                >
                  {PublishData.slice(2, 4).map((item) => (
                    <li key={item.id} className={styles.item}>
                      <h4 className={styles.h4}>{item.title}</h4>
                      <span className={styles.divider} />
                      <p className={styles.p}>{item.description}</p>
                    </li>
                  ))}
                </div>
              </>
            )}
          </section>
          <section className={styles.assets}>
            <span className={styles.bigIMG} />
            <div className={styles.imgWrap}>
              <span className={styles.img1} />
              <span className={styles.img2} />
              <span className={styles.img3} />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
