import styles from "./HomePage.module.css";
import { Typewriter } from "react-simple-typewriter";

function HomePage() {
  return (
    <div className={styles.homeMain}>
      <h1>
        {" "}
        <Typewriter
          words={["Welcome to my Virtual Shop", "Feel free to navigate around"]}
          loop={-1}
          cursor
          cursorStyle="|"
          cursorColor="#535bf2"
          typeSpeed={70}
          deleteSpeed={0}
          delaySpeed={2000}
        />
      </h1>
    </div>
  );
}

export default HomePage;
