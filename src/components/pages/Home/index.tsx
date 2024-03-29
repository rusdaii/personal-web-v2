'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

import heroImage from '@/assets/images/illustrations/hero.png';
import AnimatedText from '@/components/elements/AnimatedText';
import Layout from '@/components/pages/layout';
import { CONTACT, URL } from '@/lib/constants/common';

const Home = () => {
  return (
    <>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light ">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={heroImage}
                alt="HeroImage"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                priority
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center
              lg:text-6xl md:!text-5xl sm:!text-3xl xs:!text-2xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base
                "
                  href={URL.RESUME}
                  target="_blank"
                  download={true}
                >
                  Resume
                  <FaExternalLinkAlt className="ml-1 w-6" />
                </Link>
                <Link
                  href={`mailto:${CONTACT.EMAIL}`}
                  target="_blank"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Home;
