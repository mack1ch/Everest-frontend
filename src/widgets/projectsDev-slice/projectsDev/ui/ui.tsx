import { ProjectDevData } from "../data";
import styles from "./ui.module.scss";
import TickSqr from "../../../../../public/icons/tickSqr.svg";
import Image from "next/image";
export const ProjectDev = () => {
  return (
    <>
      <div className={styles.layout}>
        <h2 className={styles.h2}>Развитие проекта</h2>
        <div className={styles.wrap}>
          <ul className={styles.itemList}>
            {ProjectDevData.map((item) => (
              <li key={item.id} className={styles.item}>
                <Image
                  src={TickSqr}
                  width={30}
                  height={30}
                  alt={item.boldText}
                />
                <span className={styles.text}>
                  {item.text_first}{" "}
                  <span className={styles.bold}>{item.boldText}</span>{" "}
                  {item.text_second}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.img}></div>
        </div>
      </div>
    </>
  );
};
