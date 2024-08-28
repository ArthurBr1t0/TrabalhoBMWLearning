import Image from "next/image";
import styles from "./bannerthree.module.css";
import banner from "../../../public/bmwbanner.png";
import { ButtonBanner } from "../Button";

export function BannerThree() {
  return (
    <section>
      <Image className={styles.banner} src={banner} alt=""></Image>
      <div className={styles.divgrande}>
        <h1 className={styles.bmwm3}>
          BMW <span className={styles.h1span}>M3</span> Competition
        </h1>
        <h1 className={styles.pgbmwm3}>Motor: M TwimPower Turbo</h1>
        <p className={styles.pggbmwm3}>
          510 cv a 6.250 rpm, 66,3 kgf.m a 2.750 rpm, 290 km/h, 0-100 km/h: 3,9s
        </p>
        <ButtonBanner>
          <p className={styles.pgbutton}>Saiba Mais</p>
        </ButtonBanner>
      </div>
    </section>
  );
}
