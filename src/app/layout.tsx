import type { Metadata } from 'next';
import { ThemeProvider } from '~/components';

export const metadata: Metadata = {
  title: 'Next.js Template',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
