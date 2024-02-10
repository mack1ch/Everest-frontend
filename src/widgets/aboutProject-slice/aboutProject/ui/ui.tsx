import Image from "next/image";
import { AboutProjectBlackBlockItems } from "../data";
import styles from "./ui.module.scss";
export const AboutProject = () => {
  return (
    <>
      <div className={styles.layout}>
        <h2 id="about" className={styles.sectionTitle}>
          О проекте
        </h2>
        <div className={styles.projectDescription}>
          <dt className={styles.info}>
            <h3 className={styles.h3}>
              Распределительное устройство 110-220 кВ с топологией схемы в виде
              многогранника
            </h3>
            <p className={styles.p}>
              Снизить потери для промышленности, повысить качество жизни и
              безопасность населения - наша цель
            </p>
          </dt>
          <dt className={styles.img}></dt>
        </div>
        <div className={styles.black_block}>
          {AboutProjectBlackBlockItems.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.header}>
                <Image
                  src={item.icon}
                  width={34}
                  height={34}
                  alt={item.title}
                />
                <h4 className={styles.h4}>{item.title}</h4>
              </div>
              <p className={styles.p}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
