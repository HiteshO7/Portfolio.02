import './globals.css'
import Header from '../components/Header/Header'

export const metadata = {
  title: 'Portfolio',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/bgg.jpg" />
        <link rel="apple-touch-icon" href="/images/bgg.jpg" />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
