import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from "@/app/components/navbar/NavBar";
import Navabar from "@/app/components/navbar/NavBar";
import Navbar from "@/app/components/navbar/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AriBnB',
  description: 'this is aribnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
