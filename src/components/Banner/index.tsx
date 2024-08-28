import Link from "next/link";
import styles from "../Banner/Banner.module.css";
import Image from "next/image";
import bannercarro from "../../../public/bannercarro.png";
import { ButtonBanner } from "../Button";

export function Banner() {
  return (
    <section>
      <Image className={styles.bannerfilme} src={bannercarro} alt="" />
      <div className={styles.divavatar}>
        <h1 className={styles.h1avatar}>
          BMW <span className={styles.i4}>i4</span>
        </h1>
        <h2 className={styles.h2theway}>The Electric Future</h2>
        <p className={styles.pgavatar}>
          The new BMW i4 have 340cv, perfect to all your daily needs.
        </p>
        <ButtonBanner>
          <p className={styles.pgbutton}>Saiba Mais</p>
        </ButtonBanner>
      </div>
    </section>
  );
}
