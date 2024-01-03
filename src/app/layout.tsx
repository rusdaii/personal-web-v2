import '@/assets/styles/globals.css';

import montserrat from '@/assets/fonts/montserrat';
import Navbar from '@/components/parts/Navbar';
import Providers from '@/components/parts/Providers';
import generateMetadata from '@/lib/metadata';

export const metadata = generateMetadata();

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} font-montserrat bg-light dark:bg-dark w-full min-h-screen`}
      >
        <Providers>
          <Navbar />

          {children}
        </Providers>
      </body>
    </html>
  );
}
