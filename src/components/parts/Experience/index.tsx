import React, { useRef } from 'react';

import { motion, useScroll } from 'framer-motion';

import ExperienceDetails from '@/components/elements/ExperienceDetails';

const DATA = [
  {
    CompanyName: 'Google Indonesia',
    Position: 'Software Engineer',
    CompanyUrl: 'https://www.google.com/',
    StartDate: '2022',
    EndDate: '2023',
    Address: 'Mountain View, CA',
    // eslint-disable-next-line max-len
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid ut temporibus, asperiores sint dolorum quasi quos voluptates distinctio rerum ipsam laboriosam maiores inventore. In quaerat illum quo temporibus ad?',
  },
  {
    CompanyName: 'Google Indonesia',
    Position: 'Software Engineer',
    CompanyUrl: 'https://www.google.com/',
    StartDate: '2022',
    EndDate: '2023',
    Address: 'Mountain View, CA',
    // eslint-disable-next-line max-len
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid ut temporibus, asperiores sint dolorum quasi quos voluptates distinctio rerum ipsam laboriosam maiores inventore. In quaerat illum quo temporibus ad?',
  },
  {
    CompanyName: 'Google Indonesia',
    Position: 'Software Engineer',
    CompanyUrl: 'https://www.google.com/',
    StartDate: '2022',
    EndDate: '2023',
    Address: 'Mountain View, CA',
    // eslint-disable-next-line max-len
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid ut temporibus, asperiores sint dolorum quasi quos voluptates distinctio rerum ipsam laboriosam maiores inventore. In quaerat illum quo temporibus ad?',
  },
  {
    CompanyName: 'Google Indonesia',
    Position: 'Software Engineer',
    CompanyUrl: 'https://www.google.com/',
    StartDate: '2022',
    EndDate: '2023',
    Address: 'Mountain View, CA',
    // eslint-disable-next-line max-len
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid ut temporibus, asperiores sint dolorum quasi quos voluptates distinctio rerum ipsam laboriosam maiores inventore. In quaerat illum quo temporibus ad?',
  },
  {
    CompanyName: 'Google Indonesia',
    Position: 'Software Engineer',
    CompanyUrl: 'https://www.google.com/',
    StartDate: '2022',
    EndDate: '2023',
    Address: 'Mountain View, CA',
    // eslint-disable-next-line max-len
    Desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid ut temporibus, asperiores sint dolorum quasi quos voluptates distinctio rerum ipsam laboriosam maiores inventore. In quaerat illum quo temporibus ad?',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-64">
      <h2
        className="font-bold text-8xl mb-32 w-full text-center
      md:text-6xl xs:text-4xl md:mb-16"
      >
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light 
        md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {DATA.map((exp, i) => (
            <ExperienceDetails
              key={i}
              companyName={exp.CompanyName}
              postion={exp.Position}
              companyUrl={exp.CompanyUrl}
              startDate={exp.StartDate}
              endDate={exp.EndDate}
              address={exp.Address}
              desc={exp.Desc}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
