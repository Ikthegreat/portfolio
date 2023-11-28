import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@styles/global.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '진익근 - 포트폴리오 [프론트엔드 개발자]',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className={inter.className} style={{ margin: 0 }}>
        {children}
      </body>
    </html>
  );
}