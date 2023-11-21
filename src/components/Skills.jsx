import React from "react";
import styles from "../styles";

const Skills = () => (
  <section
    id="skills"
    className={`flex ${styles.paddingX} ${styles.paddingY} flex-row`}
  >
    <div
      className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[48px] text-white">
          Skills
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Some of the technologies availalbe in the toolbox
        </p>
      </div>
    </div>
  </section>
);

export default Skills;
