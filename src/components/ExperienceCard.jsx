import React from "react";
import { experiences } from "../data/constants";
import styles from "../styles";

const ExperienceCard = ({ expDetail, index }) => (
  <>
    <div className="relative border-s border-dimWhite mr-4 ">
      <div className="absolute w-3 h-3 mr-4  bg-dimWhite rounded-full -mt-6 -start-1.5 border border-dimWhite " />
      <div
        className={`flex flex-col p-4 rounded-[20px] ${
          index !== experiences.length - 1 ? "mb-10" : "mb-0"
        } `}
      >
        <div className="flex gap-6">
          <img
            src={expDetail.img}
            alt="Company Name"
            className="w-[48px] h-[48px] object-contained rounded-lg mt-15"
          />
          <div className={``}>
            <h3
              className={`font-poppins font-normal text-[24px] text-gradient`}
            >
              {expDetail.role}
            </h3>
            <p className={`${styles.subParagraph}`}>{expDetail.company}</p>
            <p className={`${styles.lightParagraph}`}>{expDetail.date}</p>
            <p className={`${styles.subParagraph}`}>{expDetail.desc}</p>
          </div>
        </div>

        {/* <p>{expDetail.role}</p> */}
      </div>
    </div>
  </>
);

export default ExperienceCard;
