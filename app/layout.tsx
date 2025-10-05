import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jara Launch - Turn Ideas into Revenue in 48 Hours',
  description: 'Validate micro-skill services and digital products through social proof, instant payments, and community discovery.',
  openGraph: {
    title: 'Jara Launch',
    description: 'Turn ideas into revenue in 48 hours',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
