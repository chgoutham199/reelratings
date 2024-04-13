import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ReelRatings',
  description: 'Your Destination for movie ratings',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Providers>
       <Header />
        {children}  
      </Providers> 
      </body>
    </html>
  )
}
