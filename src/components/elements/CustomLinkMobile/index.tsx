import { usePathname, useRouter } from 'next/navigation';

interface CustomLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomLinkMobile = ({
  href,
  title,
  className = '',
  toggle,
}: CustomLinkProps) => {
  const pathname = usePathname();

  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light 
        absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] 
        ease duration-300 ${pathname === href ? 'w-full' : 'w-0'} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default CustomLinkMobile;
