import React from "react";
import styles from "../styles";
import HeroBgAnimation from "./HeroBgAnimation";
// import TypeWriter from "./TypeWriter";
import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants";

const Hero = () => (
  <section
    id="home"
    className={`flex ${styles.paddingX} ${styles.paddingY} flex-row`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[48px] text-[48px] text-white">
          Howdy! <br className="sm:block hidden" /> I am Sithara
          <br className="sm:block hidden" />
          <div className="text-gradient">
            <Typewriter
              options={{
                strings: Bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          I am a highly skilled Computer Engineering professional with a passion
          for innovation, to make your ideas in real. I am committed to
          delivering excellence, leveraging cutting-edge technologies to solve
          complex challenges.
        </p>
        <button className="bg-blue-gradient px-3 py-2 rounded-lg text-poppins font-semibold mt-10">
          Contact Me
        </button>
      </div>
    </div>

    <div className={`w-[450px]`}>
      <HeroBgAnimation />
      <div className="absolute z-[0] w-[40%] h-[35%] top-60 pink__gradient" />
    </div>
  </section>
);

export default Hero;
