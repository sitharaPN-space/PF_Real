import React from "react";
import { experiences } from "../data/constants";
import styles from "../styles";
import ExperienceCard from "./ExperienceCard";

const Experience = () => (
  <section id="skills" className={` ${styles.paddingX} ${styles.paddingY} `}>
    <div className={`xl:px-0 sm:px-16 px-6`}>
      <div className={`text-center`}>
        <h1 className="font-poppins font-semibold ss:text-[48px] text-[48px] text-white">
          Experience
        </h1>
        <p className={`${styles.paragraph} mt-5`}>
          My work experience as a software engineer in different companies, in
          different domains, in different technologies
        </p>
      </div>
      <div className={`flex-col sm:px-48 px-6 mt-10`}>
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            expDetail={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
