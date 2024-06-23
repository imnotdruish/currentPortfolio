import React from 'react'
import styles from './ProjectsStyles.module.css';
import refineLight from '../../assets/refineLight.svg';
import refineDark from '../../assets/refineDark.svg';
import todoListLight from '../../assets/todoListLight.svg';
import todoListDark from '../../assets/todoListDark.svg';
import pokemonSearchLight from '../../assets/pokemonSearchLight.svg';
import pokemonSearchDark from '../../assets/pokemonSearchDark.svg';
import frontendMentorLight from '../../assets/frontendMentorLight.svg';
import frontendMentorDark from '../../assets/frontendMentorDark.svg';
import ProjectCard from '../../common/ProjectCard';
import { useTheme } from '../../common/ThemeContext';

function Projects() {
  const { theme } = useTheme();

  const refineIcon = theme === 'light' ? refineLight : refineDark;
  const todoIcon = theme === 'light' ? todoListLight : todoListDark;
  const pokemonSearchIcon = theme === 'light' ? pokemonSearchLight : pokemonSearchDark;
  const frontendMentorIcon = theme === 'light' ? frontendMentorLight : frontendMentorDark;

  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">
        Projects
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={refineIcon} 
          link='https://github.com/imnotdruish/dashboard' 
          h3="Refine"
          p="Admin Kanban Board"
        />
        <ProjectCard 
          src={todoIcon} 
          link='https://github.com/imnotdruish/reactjs-todolist' 
          h3="Todo List"
          p="React Todo List"
        />
        <ProjectCard 
          src={pokemonSearchIcon} 
          link='https://github.com/imnotdruish/pokemonSearch' 
          h3="Pokemon"
          p="Pokemon API Page"
        />
      <ProjectCard 
          src={frontendMentorIcon} 
          link='https://frontendmentor.io/profile/imnotdruish' 
          h3="Frontend Mentor"
          p="Challenges"
        />
      </div>
    </section>
  )
}

export default Projects