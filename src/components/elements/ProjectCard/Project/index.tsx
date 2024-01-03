import React from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

import { ProjectCardProps } from '@/components/elements/ProjectCard/types';

const FramerImage = motion(Image);

const Project = ({ ...props }: ProjectCardProps) => {
  return (
    <div className="col-span-6 sm:col-span-12">
      <article
        className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light
        xs:p-4"
      >
        <div
          className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem]
         bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] "
        />
        <Link
          href={props.demoUrl}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={props.imageUrl}
            alt={props.title}
            width={1000}
            height={1000}
            className="w-full h-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
        </Link>
        <div className="w-full flex flex-col items-start justify-between mt-4">
          <span
            className="text-primary font-medium text-xl dark:text-primaryDark 
          lg:text-lg md:text-base"
          >
            {props.type === 'Common' ? 'Mini' : null} Project
          </span>
          <Link
            href={props.demoUrl}
            target="_blank"
            className="hover:underline underline-offset-2 dark:text-light"
          >
            <h2
              className="my-2 w-full text-left text-3xl font-bold dark:text-light
            lg:text-2xl"
            >
              {props.title}
            </h2>
          </Link>
          {/* <p className="my-2 font-medium text-dark">{props.desc}</p> */}
          <div className="w-full mt-2 flex items-center justify-between">
            <Link
              href={props.demoUrl}
              target="_blank"
              className=" rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark
              md:text-base"
            >
              Demo
            </Link>
            <Link href={props.githubUrl} target="_blank" className="w-8 md:w-6">
              <AiFillGithub className="w-full h-full dark:text-light" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Project;
