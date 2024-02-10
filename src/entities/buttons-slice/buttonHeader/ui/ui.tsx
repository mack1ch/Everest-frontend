import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import styles from "./ui.module.scss";
import Link from "next/link";
export const ButtonHeader = ({
  children,
  style,
  ...btnProps
}: {
  children: ReactNode;
  style?: CSSProperties;
  btnProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <>
      <Link href="#form">
        <button
          className={styles.btn}
          style={style}
          {...btnProps}
          type="button"
        >
          {children}
        </button>
      </Link>
    </>
  );
};
