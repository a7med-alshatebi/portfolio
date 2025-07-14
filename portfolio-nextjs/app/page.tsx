import Layout from '../components/Layout/Layout'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
                Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">AHMED</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6">
                Web Developer & Designer
              </h2>
              <p className="text-lg mb-6 dark:text-gray-300">
                I&apos;m a passionate developer with one year of experience creating beautiful, 
                functional websites and applications. I specialize in front-end development 
                but also have experience with back-end technologies.
              </p>
              <div className="flex space-x-4">
                <Link 
                  href="/projects" 
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition"
                >
                  View My Work
                </Link>
                <Link 
                  href="/contact" 
                  className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-6 py-3 rounded-lg transition"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 text-center">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-950 rounded-full flex items-center justify-center p-2">
                  <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <Image
                      src="/me1.jpeg"
                      alt="Ahmed Al-Shatebi Profile Picture"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">About Me</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    My Journey
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    I started my journey into web development with a passion for creating 
                    digital experiences that make a difference. Over the past year, I&apos;ve 
                    honed my skills in modern web technologies and frameworks.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    My expertise spans across frontend technologies like HTML5, CSS3, 
                    JavaScript, and React, as well as backend technologies including 
                    Node.js and databases.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      Frontend Development
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      UI/UX Design
                    </span>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                      Problem Solving
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-white">
                    <h4 className="text-2xl font-bold mb-4">Let&apos;s Build Something Amazing</h4>
                    <p className="mb-6">
                      I&apos;m always excited to work on new projects and collaborate with 
                      creative minds to bring ideas to life.
                    </p>
                    <Link 
                      href="/contact" 
                      className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-lg transition inline-block"
                    >
                      Start a Project
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Explore My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/skills" className="group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">🛠️</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">My Skills</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Discover the technologies and tools I work with to create amazing digital experiences.
                  </p>
                </div>
              </Link>
              
              <Link href="/projects" className="group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">💼</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">My Projects</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Check out some of my recent work and see what I&apos;ve been building lately.
                  </p>
                </div>
              </Link>
              
              <Link href="/contact" className="group">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">📧</div>
                  <h3 className="text-xl font-bold mb-2 dark:text-white">Get In Touch</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ready to start a project? Let&apos;s discuss how we can work together.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
