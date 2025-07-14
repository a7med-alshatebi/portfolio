import Layout from '../../components/Layout/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image: "/IMG/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/IMG/project2.jpg",
      technologies: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard that displays current weather and forecasts for multiple cities with beautiful data visualizations.",
      image: "/IMG/project3.jpg",
      technologies: ["JavaScript", "CSS3", "Weather API", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.",
      image: "/IMG/project4.jpg",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A full-featured blog platform with content management, user authentication, and SEO optimization.",
      image: "/IMG/project5.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "JWT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    },
    {
      id: 6,
      title: "Social Media Dashboard",
      description: "A comprehensive social media analytics dashboard with data visualization and reporting features.",
      image: "/IMG/project6.jpg",
      technologies: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack"
    }
  ]

  const categories = ["All", "Frontend", "Full Stack", "Backend"]

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              My <span className="text-blue-600 dark:text-blue-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of web applications and websites I&apos;ve built using modern technologies 
              and best practices in web development.
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center">
                      <span className="text-4xl text-blue-600 dark:text-blue-400">🚀</span>
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex space-x-4">
                        <a
                          href={project.liveUrl}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.githubUrl}
                          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold dark:text-white">{project.title}</h3>
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex-1 text-center border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 py-2 rounded-lg transition text-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Project Statistics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-lg text-white">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-lg opacity-90">Projects Completed</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-lg text-white">
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-lg opacity-90">Technologies Used</div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-lg text-white">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-lg opacity-90">Happy Clients</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-lg text-white">
                <div className="text-4xl font-bold mb-2">1+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Have a Project in Mind?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to work on new projects and bring creative ideas to life. 
              Let&apos;s discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition font-semibold"
              >
                Start a Project
              </Link>
              <Link 
                href="/skills"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded-lg transition font-semibold"
              >
                View My Skills
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
