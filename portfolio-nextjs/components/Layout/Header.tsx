'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Mobile Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-900 fixed top-4 right-4 z-50 bg-gray-900 shadow-lg"
      >
        <span className="sr-only">Open sidebar</span>
        <Bars3Icon className="w-6 h-6" />
      </button>

      {/* Dark Mode Toggle Button - Mobile */}
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden hover:bg-gray-900 fixed top-4 right-16 z-50 bg-gray-900 shadow-lg"
      >
        <span className="sr-only">Toggle dark mode</span>
        {theme === 'dark' ? (
          <SunIcon className="w-6 h-6" />
        ) : (
          <MoonIcon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-40 w-64 h-screen transition-transform ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-900 shadow-xl">
          <div className="mb-5 pb-3 border-b border-gray-700">
            <h2 className="text-xl font-bold text-white">Side Bar</h2>
          </div>
          
          <ul className="space-y-2 font-medium">
            <li>
              <Link href="/" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group" onClick={() => setSidebarOpen(false)}>
                <svg className="w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                </svg>
                <span className="ms-3">About</span>
              </Link>
            </li>
            <li>
              <Link href="/skills" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group" onClick={() => setSidebarOpen(false)}>
                <svg className="shrink-0 w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Skills</span>
              </Link>
            </li>
            <li>
              <Link href="/projects" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group" onClick={() => setSidebarOpen(false)}>
                <svg className="shrink-0 w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 18 18">
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Projects</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center p-2 text-white rounded-lg hover:bg-gray-700 group" onClick={() => setSidebarOpen(false)}>
                <svg className="shrink-0 w-5 h-5 text-gray-300 transition duration-75 group-hover:text-white" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Header/Navigation */}
      <header className="bg-gray-900 text-white fixed w-full z-30 shadow-lg dark:bg-gray-800">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              MyPortfolio
            </Link>
            
            {/* Desktop Menu with Dark Mode Toggle */}
            <div className="flex items-center space-x-6">
              <ul className="hidden md:flex space-x-8">
                <li>
                  <Link href="/" className="hover:text-blue-400 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/skills" className="hover:text-blue-400 transition">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-blue-400 transition">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400 transition">
                    Contact
                  </Link>
                </li>
              </ul>
              
              {/* Desktop Dark Mode Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="hidden md:inline-flex items-center p-2 text-sm text-white rounded-lg transition"
              >
                <span className="sr-only">Toggle dark mode</span>
                {theme === 'dark' ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
