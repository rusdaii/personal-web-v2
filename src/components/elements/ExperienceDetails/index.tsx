import React, { useRef } from 'react';

import { motion } from 'framer-motion';

import Lilcon from '@/components/elements/Lilcon';

type ExperienceDetailsProps = {
  companyName: string;
  postion: string;
  companyUrl: string;
  startDate: string;
  endDate: string;
  address: string;
  desc: string;
};

const ExperienceDetails = ({ ...props }: ExperienceDetailsProps) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col 
      items-center justify-between md:w-[80%]"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {props.postion}&nbsp;{' '}
          <a
            href={props.companyUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{props.companyName}
          </a>
        </h3>
        <span
          className="capitalize font-medium text-dark/75 dark:text-light/75
        xs:text-sm "
        >
          {props.startDate} - {props.endDate} | {props.address}
        </span>
        <p className="font-medium w-full md:text-sm">{props.desc}</p>
      </motion.div>
    </li>
  );
};

export default ExperienceDetails;
