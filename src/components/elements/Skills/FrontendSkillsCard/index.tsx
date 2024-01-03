import React from 'react';

import {
  SiBootstrap,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si';

const FrontendSkillsCard = () => {
  return (
    <div className="col-span-6">
      <article
        className="w-full flex flex-col items-center justify-center rounded-2xl
        border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light
        xs:p-4"
      >
        <div
          className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem]
         bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] "
        />

        <div className="w-full flex flex-col items-center justify-center mt-4">
          <h2
            className="my-2 w-full text-center text-3xl mb-8 font-bold dark:text-light
            lg:text-2xl"
          >
            Frontend Development
          </h2>

          <ul
            className="grid items-center justify-center grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1
          "
          >
            <li className="flex items-center justify-center gap-4">
              <SiJavascript className="text-5xl " />
              Javascript
            </li>

            <li className="flex items-center justify-center gap-4">
              <SiTailwindcss className="text-5xl" />
              Tailwind
            </li>
            <li className="flex items-center justify-center gap-4">
              <SiBootstrap className="text-5xl" />
              Bootstrap
            </li>
            <li className="flex items-center justify-center gap-4">
              <SiNextdotjs className="text-5xl" />
              Next
            </li>
          </ul>
        </div>
      </article>
    </div>
  );
};

export default FrontendSkillsCard;
