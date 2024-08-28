import styles from "./conforto.module.css";
import Image from "next/image";
import icondin from "../../../public/icondin.png";
import iconhours from "../../../public/iconhours.png";
import icoemens from "../../../public/iconmes.png";
import iconpess from "../../../public/iconpess.png";
import iconcar from "../../../public/iconcar.png";
import iconcertinho from "../../../public/iconcertinho.png";

export function Experience() {
  return (
    <section>
      <h1 className={styles.h1expercience}>
        We offer the best experience with our rental deals
      </h1>
      <div className={styles.div1}>
        <Image className={styles.icondin} src={icondin} alt=""></Image>
        <p className={styles.title}>Best price guaranteed</p>
        <p className={styles.pgtitle}>
          Find a lower price? We’ll refund you 100% of the difference.
        </p>
      </div>
      <div className={styles.div2}>
        <Image className={styles.icondin} src={iconhours} alt=""></Image>
        <p className={styles.title}>24 hour car delivery</p>
        <p className={styles.pgtitle}>
          Book your car anytime and we will deliver it directly to you.
        </p>
      </div>
      <div className={styles.div3}>
        <Image className={styles.icondin} src={iconpess} alt=""></Image>
        <p className={styles.title}>Experience driver</p>
        <p className={styles.pgtitle}>
          Don’t have driver? Don’t worry, we have many experienced driver for
          you.
        </p>
      </div>
      <div className={styles.div4}>
        <Image className={styles.icondin} src={icoemens} alt=""></Image>
        <p className={styles.title}>24/7 technical support</p>
        <p className={styles.pgtitle}>
          Have a question? Contact Rentcars support any time when you have
          problem.
        </p>
      </div>
      <div className={styles.div5}>
        <Image className={styles.icondin} src={iconcar} alt=""></Image>
        <p className={styles.title}>Book your car</p>
        <p className={styles.pgtitle}>
          Book your car and we will deliver it directly to you{" "}
        </p>
      </div>
      <div className={styles.div6}>
        <Image className={styles.icondin} src={iconcertinho} alt=""></Image>
        <p className={styles.title}>Choose location</p>
        <p className={styles.pgtitle}>Choose your and find your best car </p>
      </div>
    </section>
  );
}
