import TransitionEffect from '@/components/elements/TransitionEffect';

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TransitionEffect />
      {children}
    </>
  );
};

export default Template;
