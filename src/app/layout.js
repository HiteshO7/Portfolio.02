import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Porfolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/bgg.jpg" />
        <link rel="apple-touch-icon" href="/images/bgg.jpg" />

      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
