import { useEffect, useState } from 'react';

type DarkModeState = 'dark' | 'light';

const useThemeSwitcher = () => {
  const preferDarkQuery = '(prefers-color-scheme: dark)';

  const [mode, setMode] = useState<DarkModeState>('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    const userPref = localStorage.getItem('theme');

    const handleMediaQueryChange = () => {
      if (userPref) {
        let check: DarkModeState = userPref === 'dark' ? 'dark' : 'light';

        setMode(check);

        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        let check: DarkModeState = mediaQuery.matches ? 'dark' : 'light';

        setMode(check);

        if (check === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    // handleMediaQueryChange();

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  useEffect(() => {
    if (mode === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    if (mode === 'light') {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  return [mode, setMode] as const;
};

export default useThemeSwitcher;
