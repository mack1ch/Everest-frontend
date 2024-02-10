import Image from "next/image";
import styles from "./ui.module.scss";
import ProductLogo from "../../../../../public/assets/productLogo-blue.svg";
import Link from "next/link";
import { ContactData, headerData } from "../data";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <section className={styles.first}>
          <Image src={ProductLogo} width={190} height={38} alt="ЭVЕРЕСТ" />
          <div className={styles.column}>
            <h5 className={styles.brand}>© 2024 Эvерест</h5>
            <Link className={styles.link} href="document">
              Политика обработки персональных данных
            </Link>
          </div>
        </section>
        <section className={styles.second}>
          <nav className={styles.nav}>
            <h5 className={styles.h5}>Навигация</h5>

            {headerData.map((item) => (
              <Link className={styles.item} key={item.id} href={item.href}>
                {item.name}
              </Link>
            ))}
          </nav>
          <div className={styles.nav}>
            <h5 className={styles.h5}>Контакты</h5>
            <ul className={styles.column}>
              <dt className={styles.row}>
                {ContactData.slice(0, 2).map((item) => (
                  <li className={styles.contact} key={item.id}>
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt={item.value}
                    />
                    <p className={styles.value}>{item.value}</p>
                  </li>
                ))}
              </dt>
              <dt className={styles.row}>
                {ContactData.slice(2, 4).map((item) => (
                  <li className={styles.contact} key={item.id}>
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt={item.value}
                    />
                    <p className={styles.value}>{item.value}</p>
                  </li>
                ))}
              </dt>
            </ul>
          </div>
        </section>
      </footer>
    </>
  );
};
