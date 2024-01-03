'use client';
import React from 'react';

import AnimatedText from '@/components/elements/AnimatedText';
import ProjectCard from '@/components/elements/ProjectCard';
import Layout from '@/components/pages/layout';

const DATA = [
  {
    id: 1,
    title: 'Project 1 Featured',
    // eslint-disable-next-line max-len
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellat non reiciendis eaque est distinctio dolore quasi officiis ea hic quaerat asperiores, laboriosam aperiam, quod voluptates, dolorem fugiat. Quidem, a.',
    imgUrl:
      'https://res.cloudinary.com/dxqil5iuv/image/upload/v1702819918/r8dmicb5ydbwus9ey0b0.jpg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    type: 'Featured',
  },
  {
    id: 2,
    title: 'Project 2 Featured',
    // eslint-disable-next-line max-len
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellat non reiciendis eaque est distinctio dolore quasi officiis ea hic quaerat asperiores, laboriosam aperiam, quod voluptates, dolorem fugiat. Quidem, a.',
    imgUrl:
      'https://res.cloudinary.com/dxqil5iuv/image/upload/v1702819918/r8dmicb5ydbwus9ey0b0.jpg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    type: 'Featured',
  },
  {
    id: 3,
    title: 'Project 3',
    // eslint-disable-next-line max-len
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellat non reiciendis eaque est distinctio dolore quasi officiis ea hic quaerat asperiores, laboriosam aperiam, quod voluptates, dolorem fugiat. Quidem, a.',
    imgUrl:
      'https://res.cloudinary.com/dxqil5iuv/image/upload/v1702379819/cld-sample-5.jpg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    type: 'Common',
  },
  {
    id: 4,
    title: 'Project 4',
    // eslint-disable-next-line max-len
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellat non reiciendis eaque est distinctio dolore quasi officiis ea hic quaerat asperiores, laboriosam aperiam, quod voluptates, dolorem fugiat. Quidem, a.',
    imgUrl:
      'https://res.cloudinary.com/dxqil5iuv/image/upload/v1702379819/cld-sample-5.jpg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    type: 'Common',
  },
  {
    id: 5,
    title: 'Project 5',
    // eslint-disable-next-line max-len
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellat non reiciendis eaque est distinctio dolore quasi officiis ea hic quaerat asperiores, laboriosam aperiam, quod voluptates, dolorem fugiat. Quidem, a.',
    imgUrl:
      'https://res.cloudinary.com/dxqil5iuv/image/upload/v1702379819/cld-sample-5.jpg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    type: 'Common',
  },
  {
    id: 6,
    title: 'Project 6',
    // eslint-disable-next-line max-len
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellat non reiciendis eaque est distinctio dolore quasi officiis ea hic quaerat asperiores, laboriosam aperiam, quod voluptates, dolorem fugiat. Quidem, a.',
    imgUrl:
      'https://res.cloudinary.com/dxqil5iuv/image/upload/v1702379819/cld-sample-5.jpg',
    githubUrl: 'https://github.com',
    demoUrl: 'https://github.com',
    type: 'Common',
  },
];

export interface Project {
  id: number;
  title: string;
  desc: string;
  imgUrl: string;
  githubUrl: string;
  demoUrl: string;
  type: string;
}

const Projects = () => {
  const [projectMapping, setProjectMapping] = React.useState<Project[]>([]);

  React.useEffect(() => {
    // @ts-ignore
    const mappingType = Object.groupBy(DATA, ({ type }) => type);

    let indexFeatured = 0;

    let indexCommon = 0;

    let step = 'Featured';

    const resultMapping: Project[] = [];

    while (
      indexFeatured < mappingType.Featured.length ||
      indexCommon < mappingType.Common.length
    ) {
      if (indexFeatured < mappingType.Featured.length && step === 'Featured') {
        resultMapping.push(mappingType.Featured[indexFeatured++]);
        step = 'Common';
      } else if (indexCommon < mappingType.Common.length && step === 'Common') {
        resultMapping.push(mappingType.Common[indexCommon++]);
        step = indexCommon % 2 === 0 ? 'Featured' : 'Common';
      } else if (indexFeatured >= mappingType.Featured.length) {
        resultMapping.push(mappingType.Common[indexCommon++]);
      } else {
        resultMapping.push(mappingType.Featured[indexFeatured++]);
      }
    }

    setProjectMapping(resultMapping);
  }, []);

  return (
    <main className="flex flex-col w-full mb-16 items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="mb-16 lg:text-7xl sm:mb-8 
          sm:!text-6xl xs:!text-2xl"
        />

        <div
          className="grid grid-cols-12 gap-24 gap-y-32 
        xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0"
        >
          {projectMapping.map((item) => (
            <ProjectCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              imageUrl={item.imgUrl}
              githubUrl={item.githubUrl}
              demoUrl={item.demoUrl}
              type={item.type}
            />
          ))}
        </div>
      </Layout>
    </main>
  );
};

export default Projects;
