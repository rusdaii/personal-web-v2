import React from 'react';

import BackendSkillsCard from '@/components/elements/Skills/BackendSkillsCard';
import FrontendSkillsCard from '@/components/elements/Skills/FrontendSkillsCard';

const Skills = () => {
  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
      md:text-6xl xs:text-4xl md:mb-16"
      >
        Skills
      </h2>
      <div className="w-[100%] mx-auto relative grid grid-cols-2 gap-16 md:grid-cols-1 lg:grid-cols-1 xs:w-full">
        <div>
          <FrontendSkillsCard />
        </div>
        <div>
          <BackendSkillsCard />
        </div>
      </div>
    </div>
  );
};

export default Skills;
