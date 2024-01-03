'use client';
import React from 'react';

import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary"
        animate={{
          x: ['0%', '100%', '200%'],
          scaleX: ['0%', '100%', '0%'],
          transformOrigin: ['left', 'left', 'right'],
        }}
        transition={{ duration: 1.5, ease: 'circInOut' }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        animate={{
          x: ['0%', '100%', '200%'],
          scaleX: ['0%', '100%', '0%'],
          transformOrigin: ['left', 'left', 'right'],
        }}
        transition={{ delay: 0.2, duration: 1.5, ease: 'circInOut' }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark"
        animate={{
          x: ['0%', '100%', '200%'],
          scaleX: ['0%', '100%', '0%'],
          transformOrigin: ['left', 'left', 'right'],
        }}
        transition={{ delay: 0.4, duration: 1.5, ease: 'circInOut' }}
      />
    </>
  );
};

export default TransitionEffect;
