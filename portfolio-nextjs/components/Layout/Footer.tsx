import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-blue-400">Ahmed Al-Shatebi</h3>
            <p className="text-gray-300 dark:text-gray-400 mb-4 max-w-md">
              Passionate web developer creating beautiful, functional websites and applications. 
              Available for freelance projects and full-time opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/a7med-alshatebi" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                <i className="fab fa-github text-xl"></i>
              </a>
              <a href="https://www.instagram.com/a7med.alshatebi/profilecard/?igsh=MWF4dmlicmJ5NWpo" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="mailto:ahmedalshatibi22@gmail.com"
                 className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                <i className="fas fa-envelope text-xl"></i>
              </a>
              <a href="tel:+905364688506"
                 className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                <i className="fas fa-phone text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-400 dark:text-gray-400 dark:hover:text-blue-300 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <i className="fas fa-envelope w-4 text-blue-400 mr-2"></i>
                <span className="text-gray-300 dark:text-gray-400">ahmedalshatibi22@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone w-4 text-blue-400 mr-2"></i>
                <span className="text-gray-300 dark:text-gray-400">+90 (536) 46-88506</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt w-4 text-blue-400 mr-2"></i>
                <span className="text-gray-300 dark:text-gray-400">Bilecik, Turkey</span>
              </div>
              <div className="mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Available for hire
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
              <p>&copy; 2025 Ahmed Al-Shatebi. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 text-sm text-gray-400 dark:text-gray-500">
              <span>Built with</span>
              <div className="flex space-x-2">
                <span className="px-2 py-1 bg-gray-800 dark:bg-gray-700 rounded text-xs">Next.js</span>
                <span className="px-2 py-1 bg-gray-800 dark:bg-gray-700 rounded text-xs">Tailwind CSS</span>
                <span className="px-2 py-1 bg-gray-800 dark:bg-gray-700 rounded text-xs">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
