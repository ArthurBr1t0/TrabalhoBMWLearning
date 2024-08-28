import style from "./Button.module.css";

export function ButtonNavigation({ children }: any) {
  return <button className={style.buttonnavigation}>{children}</button>;
}

export function ButtonBanner({ children }: any) {
  return <button className={style.buttonbanner}>{children}</button>;
}

export function ButtonBannertwo({ children }: any) {
  return <button className={style.buttonbannertwo}>{children}</button>;
}
