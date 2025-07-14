import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import BackToTop from '../UI/BackToTop'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
