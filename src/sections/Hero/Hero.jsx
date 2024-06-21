import styles from './HeroStyles.module.css';
import heroImg from '../../assets/heroImg.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitterLight.svg';
import twitterDark from '../../assets/twitterDark.svg';
import githubLight from '../../assets/githubLight.svg';
import githubDark from '../../assets/githubDark.svg';
import linkedinLight from '../../assets/linkedinLight.svg';
import linkedinDark from '../../assets/linkedinDark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

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
          Frontend Developer
        </h2>
        <span>
          <a href="https://x.com/imnotdruish" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/imnotdruish" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="www.linkedin.com/in/dan-june-97909520" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Special Information about me and my goals here
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero