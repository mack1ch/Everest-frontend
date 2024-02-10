import { ReactNode } from "react";
import styles from "./ui.module.scss";
export const Layout = ({
  children,
  isWithOutMainTag = false,
}: {
  children: ReactNode;
  isWithOutMainTag?: boolean;
}) => {
  return (
    <>
      {isWithOutMainTag ? (
        <div className={styles.layout}>{children}</div>
      ) : (
        <main className={styles.layout}>{children}</main>
      )}
    </>
  );
};
