import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import NavBar from '@/components/NavBar'

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
       <NavBar />
        {children}  
      </Providers> 
      </body>
    </html>
  )
}
