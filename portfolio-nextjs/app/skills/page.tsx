import Layout from '../../components/Layout/Layout'
import Image from 'next/image'

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90, icon: "🌐" },
        { name: "CSS3", level: 85, icon: "🎨" },
        { name: "JavaScript", level: 80, icon: "⚡" },
        { name: "React", level: 75, icon: "⚛️" },
        { name: "Next.js", level: 70, icon: "🚀" },
        { name: "Tailwind CSS", level: 85, icon: "💨" },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 75, icon: "🟢" },
        { name: "Express.js", level: 70, icon: "🛣️" },
        { name: "MongoDB", level: 65, icon: "🍃" },
        { name: "MySQL", level: 60, icon: "🐬" },
        { name: "PostgreSQL", level: 55, icon: "🐘" },
        { name: "Firebase", level: 70, icon: "🔥" },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 80, icon: "📝" },
        { name: "GitHub", level: 85, icon: "🐙" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "Figma", level: 75, icon: "🎭" },
        { name: "Photoshop", level: 70, icon: "🖼️" },
        { name: "npm/yarn", level: 80, icon: "📦" },
      ]
    }
  ]

  const softSkills = [
    { skill: "Problem Solving", description: "Breaking down complex problems into manageable solutions" },
    { skill: "Communication", description: "Clear and effective communication with team members and clients" },
    { skill: "Time Management", description: "Meeting deadlines and managing multiple projects efficiently" },
    { skill: "Continuous Learning", description: "Staying updated with latest technologies and best practices" },
    { skill: "Team Collaboration", description: "Working effectively in team environments using agile methodologies" },
    { skill: "Attention to Detail", description: "Ensuring high-quality, pixel-perfect implementations" }
  ]

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              My <span className="text-blue-600 dark:text-blue-400">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A comprehensive overview of the technologies, tools, and soft skills I&apos;ve developed 
              throughout my journey as a web developer.
            </p>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Technical Skills</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg">
                  <h3 className="text-2xl font-bold mb-8 text-blue-600 dark:text-blue-400 text-center">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="skill-item">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="text-2xl mr-3">{skill.icon}</span>
                            <span className="font-semibold dark:text-white">{skill.name}</span>
                          </div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                          <div 
                            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full h-3 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Soft Skills */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Soft Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {softSkills.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                    {item.skill}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Goals */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Currently Learning</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-lg text-white text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-2">TypeScript</h3>
                <p className="text-sm opacity-90">Adding type safety to JavaScript projects</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-teal-600 p-6 rounded-lg text-white text-center">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold mb-2">AWS</h3>
                <p className="text-sm opacity-90">Cloud services and deployment</p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-lg text-white text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Vue.js</h3>
                <p className="text-sm opacity-90">Expanding frontend framework knowledge</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-6 rounded-lg text-white text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-2">Three.js</h3>
                <p className="text-sm opacity-90">3D graphics and animations</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-lg text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s discuss how my skills can help bring your project to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg transition font-semibold"
                >
                  Get In Touch
                </a>
                <a 
                  href="/projects" 
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg transition font-semibold"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
