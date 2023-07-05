import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Qué la creatividad <br className="sm:block hidden ml-5" /> de tu hijo vuele!
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      En nuestra escuela, la creatividad de tu hijo vuela sin límites. Nuestro enfoque innovador y apasionado estimula su imaginación y habilidades artísticas. 
      </p>

      <Button styles={`mt-20`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
