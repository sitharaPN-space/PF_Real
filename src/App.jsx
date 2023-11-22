import React from "react";
import { Hero, Navbar } from "./components";
import Experience from "./components/Experience";
import styles from "./styles";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Experience />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} {${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          Projects Education Contact me
        </div>
      </div>
    </div>
  );
};

export default App;
