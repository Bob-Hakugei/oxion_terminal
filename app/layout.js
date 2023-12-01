"use client"
import './globals.scss'
import Menu from 'app/components/Menu/page.jsx'





export default function RootLayout({ children }) {
  
  return (
    <html lang="fr">
      <body className='green'>
        <Menu />
        {children}
      </body>
    </html>
  )
}
