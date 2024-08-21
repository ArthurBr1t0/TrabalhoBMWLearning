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
      <Image className={styles.cineartlogo} src={BMWlogo} alt="" />
      <Link href="#" className={styles.home}>
        HOME
      </Link>
      <Link href="#" className={styles.filmes}>
        CARROS
      </Link>
      <Link href="#" className={styles.series}>
        PEDIDOS
      </Link>
      <Link href="#" className={styles.series}>
        CLASSICOS
      </Link>
      <Image className={styles.pesquisar} src={pesquisar} alt="" />
      <Image className={styles.notf} src={notf} alt="" />
      <ButtonNavigation>
        <Link href="#" className={styles.pgplus}>
          ENTRAR
        </Link>
      </ButtonNavigation>
    </nav>
  );
}
