import type { Metadata } from 'next'
import { Poppins } from 'next/font/google';
// 字体
import Header from '@/components/Header/Header';
import './globals.css'
import Footer from '@/components/Footer/Footer';

// 生成一组poppins字体的配置对象
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Hotel Management App',
  description: 'Discover the best hotel rooms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 简单的HTML样式
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className='font-normal'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
