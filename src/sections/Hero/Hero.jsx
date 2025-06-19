import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heroImg.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
          className={styles.hero} 
          src={heroImg} 
          alt="Cartoon Profile Picture of Dan June" 
        />
        <img 
          className={styles.colorMode} 
          src={themeIcon} 
          alt="Color mode icon" 
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Dan
          <br />
          June
        </h1>
        <h2>
          Frontend Developer and Endpoint Engineer
        </h2>
        <span>
          <a href="https://x.com/imnotdruish" target="_blank">
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a href="https://github.com/imnotdruish" target="_blank">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="https://linkedin.com/in/danjune" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </span>
        <p className={styles.description}>
          I have spent 12+ years as a Endpoint Engineer while working towards a career in full stack development. I love coding, web development, and video games.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
