import React, { FC, useEffect, useState } from 'react'
import CardImage from '../../public/passportal.png'
import CardImage1 from '../../public/sixvago.png'
import CardImage2 from '../../public/todoapp.png'
import ProjectCard from './projectCard';

type Project = {
  title: string;
  description: string;
  imageUrl: any;
  projectUrl: string;
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: CardImage,
    projectUrl: "https://example.com/project1"
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: CardImage1,
    projectUrl: "https://example.com/project2"
  },
    {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: CardImage2,
    projectUrl: "https://example.com/project1"
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: CardImage2,
    projectUrl: "https://example.com/project2"
  },
  {
    title: "Project One",
    description: "Description for project one.",
    imageUrl: CardImage,
    projectUrl: "https://example.com/project1"
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    imageUrl: CardImage1,
    projectUrl: "https://example.com/project2"
  },
  // Agrega más proyectos según sea necesario
];

const Projects: FC<Project> = () => {

  return (
    <div className='project-general'>
      <h1 className='project-title'>Proyectos</h1>
      <div className='projects-grid'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
