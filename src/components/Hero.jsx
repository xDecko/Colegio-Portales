import styles from "../style";
import { discount, robot } from "../assets";


const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>


        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[82px] text-[52px] text-black ss:leading-[90.8px] leading-[75px]">
          Brindamos <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Educación</span>{" "}
          </h1>

        </div>

        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-black ss:leading-[90.8px] leading-[75px] w-full">
          para toda la vida.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Nuestro equipo de docentes evalua cuidadosamente los programas académicos, las actividades divertidas y la atención individualizada. Queremos asegurarnos de que tu hijo se sienta cómodo y feliz mientras aprende.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />


      </div>


    </section>
  );
};

export default Hero;
