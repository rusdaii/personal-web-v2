'use client';
import Image from 'next/image';

import AnimatedText from '@/components/elements/AnimatedText';
import Layout from '@/components/pages/layout';
import Education from '@/components/parts/Education';
import Experience from '@/components/parts/Experience';
import Skills from '@/components/parts/Skills';
import { URL } from '@/lib/constants/common';

const About = () => {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Innovation is the outcome of a habit, not a random act."
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus at labore eos quae modi voluptate illum itaque vero
                veritatis quaerat. Iure quod dignissimos esse repudiandae non
                vel quo distinctio optio.
              </p>
              <p className="font-medium my-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus at labore eos quae modi voluptate illum itaque vero
                veritatis quaerat. Iure quod dignissimos esse repudiandae non
                vel quo distinctio optio.
              </p>
              <p className="font-medium">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus at labore eos quae modi voluptate illum itaque vero
                veritatis quaerat. Iure quod dignissimos esse repudiandae non
                vel quo distinctio optio.
              </p>
            </div>
            <div
              className="col-span-3 relative h-max rounded-full border  border-solid
               border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 
               md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-6 -z-10 w-[102%] h-[103%] rounded-full bg-dark dark:bg-light " />
              <Image
                src={URL.PROFILE_IMAGE}
                width={500}
                height={500}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                alt="about"
                className="w-full h-auto rounded-full"
              />
            </div>
            <div
              className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 
          xl:flex-row xl:items-center md:order-3"
            >
              <div className="flex flex-col items-end justify-center xl:items-center">
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 ">
                  Good
                </h2>
                <span
                  className="inline-block text-4xl font-bold 
                xl:text-center md:text-lg
                sm:text-base xs:text-sm"
                >
                  Problem Solver
                </span>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 ">
                  Have
                </h2>
                <span
                  className="inline-block text-3xl font-bold  xl:text-center md:text-lg
              sm:text-base xs:text-sm"
                >
                  Analytical Thinker
                </span>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <h2
                  className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg
             sm:text-base xs:text-sm"
                >
                  Be
                </h2>
                <span
                  className="inline-block text-3xl font-bold xl:text-center md:text-lg
                sm:text-base xs:text-sm"
                >
                  Able Teamwork
                </span>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
