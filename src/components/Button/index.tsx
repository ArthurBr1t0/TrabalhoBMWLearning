import style from "./Button.module.css";

export function ButtonNavigation({ children }: any) {
  return <button className={style.buttonnavigation}>{children}</button>;
}
