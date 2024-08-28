import Image from "next/image";
import banner from "../../../public/BMWe36.jpg";
import styles from "./bannertwo.module.css";
import { ButtonBannertwo } from "../Button";

export function BannerTwo() {
  return (
    <section>
      <Image className={styles.banner} src={banner} alt=""></Image>
      <div className={styles.divgrande}>
        <h1 className={styles.h1e36}>
          BMW <span className={styles.h1span}>E36</span>
        </h1>
        <h1 className={styles.pge36}>One of BMW's classics</h1>
        <p className={styles.pgge36}>
          282 HP / 286 PS / 210 kW, 236 lb-ft / 320 Nm, 5 marchas Manual
          Relações de Câmbio Final Drive Ratio: 3.15
        </p>
        <ButtonBannertwo>
          <p className={styles.pgbutton}>CLÁSSICOS</p>
        </ButtonBannertwo>
      </div>
    </section>
  );
}
