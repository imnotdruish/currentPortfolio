import React from 'react'
import styles from './ProjectsStyles.module.css';
import adminPanel from '../../assets/adminPanel.png';
import todoList from '../../assets/todoList.svg';
import pokemonSearch from '../../assets/pokemonSearch.png';
import frontendMentor from '../../assets/frontendMentor.svg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">
        Projects
      </h1>
      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={adminPanel} 
          link='https://github.com/imnotdruish/dashboard' 
          h3="Refine"
          p="Admin Kanban Board"
        />
        <ProjectCard 
          src={todoList} 
          link='https://github.com/imnotdruish/reactjs-todolist' 
          h3="Todo List"
          p="React Todo List"
        />
        <ProjectCard 
          src={pokemonSearch} 
          link='https://github.com/imnotdruish/pokemonSearch' 
          h3="Pokemon"
          p="Pokemon API Page"
        />
      <ProjectCard 
          src={frontendMentor} 
          link='https://frontendmentor.io/profile/imnotdruish' 
          h3="Frontend Mentor"
          p="Challenges"
        />
      </div>
    </section>
  )
}

export default Projects