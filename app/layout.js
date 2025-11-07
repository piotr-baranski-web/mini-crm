import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata = {
  title: 'Mini CRM',
  description: 'System zarządzania klientami i projektami',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}

