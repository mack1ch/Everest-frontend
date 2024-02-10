"use client";

import Image from "next/image";
import styles from "./ui.module.scss";
import ProductLogo from "../../../../../public/assets/productLogo.svg";
import { headerData } from "../data";
import Link from "next/link";
import { ButtonHeader } from "@/entities/buttons-slice/buttonHeader";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
export const Header = () => {
  const windowSize = useWindowSize();
  return (
    <>
      <header className={styles.header}>
        <section>
          <Image
            src={ProductLogo}
            width={windowSize < 768 ? 116 : 160}
            height={windowSize < 768 ? 23 : 32}
            alt="Эверест"
          />
        </section>
        <section className={styles.section__left}>
          {headerData.map((item) => (
            <Link
              className={styles.section__item}
              key={item.id}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
          <ButtonHeader>Отправить заявку</ButtonHeader>
        </section>
      </header>
    </>
  );
};
