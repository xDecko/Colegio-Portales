import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[84px] h-[84px] rounded-full ${styles.flexCenter} `}>
      <img src={icon} alt="star" className="w-[100%] h-[100%] object-contain " />
    </div>
    <div className=" justify-center flex-1 flex flex-col ml-7">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} >
       Colegio Portales <br className="sm:block hidden" /> Santa barbara - Cali
      </h2>
      <p className={`${styles.paragraph} max-w-[650px] mt-5`}>
        Somos una institución educativa avalada por el ministerio de educación que se enfoca en la formación pre-escolar y basica primaria.
        Somos una institución educativa avalada por el ministerio de educación que se enfoca en la formación pre-escolar y basica primaria
        institución educativa avalada.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
