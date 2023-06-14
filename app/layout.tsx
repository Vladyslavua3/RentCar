import './globals.css'
import {Footer, Navbar} from "@/components";
import React from "react";




export const metadata = {
  title: 'Rent Car',
  description: 'Discover the best cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
