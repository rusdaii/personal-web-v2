import React from 'react';

import FeaturedProjects from './FeaturedProject';
import Project from './Project';
import { ProjectCardProps } from './types';

const ProjectCard = ({ ...props }: ProjectCardProps) => {
  return (
    <>
      {props.type === 'Featured' ? (
        <>
          <FeaturedProjects
            title={props.title}
            desc={props.desc}
            imageUrl={props.imageUrl}
            githubUrl={props.githubUrl}
            demoUrl={props.demoUrl}
            type={props.type}
          />
        </>
      ) : (
        <>
          <Project
            title={props.title}
            desc={props.desc}
            imageUrl={props.imageUrl}
            githubUrl={props.githubUrl}
            demoUrl={props.demoUrl}
            type={props.type}
          />
        </>
      )}
    </>
  );
};

export default ProjectCard;
