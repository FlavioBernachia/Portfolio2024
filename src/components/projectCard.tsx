import React, { FC } from 'react';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: any;
  projectUrl: string;
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, imageUrl, projectUrl }) => {
  return (
    <div className='project-card'>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="image-container">
          <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;