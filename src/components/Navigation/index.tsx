import Link from "next/link";
import styles from "./Navigation.module.css";
import Image from "next/image";
import BMWlogo from "../../../public/BMWlogo.png";
import notf from "../../../public/notf.png";
import pesquisar from "../../../public/pesquisar.png";
import { ButtonNavigation } from "../Button";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <Image className={styles.logo} src={BMWlogo} alt="" />
      <Link href="#" className={styles.text}>
        HOME
      </Link>
      <Link href="#" className={styles.text}>
        MODELOS
      </Link>
      <Link href="#" className={styles.text}>
        PEDIDOS
      </Link>
      <Link href="#" className={styles.text}>
        CLASSICOS
      </Link>
      <Image className={styles.pesquisar} src={pesquisar} alt="" />
      <Image className={styles.notf} src={notf} alt="" />
    </nav>
  );
}
