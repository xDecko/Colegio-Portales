import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section id="contacto" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>¿Quieres unirte a nuestra comunidad educativa?</h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        
        ¡Contáctanos ahora para inscribir a tu hijo en nuestro colegio! Ofrecemos educación de calidad en cualquier lugar..
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default CTA;
