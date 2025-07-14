import Layout from '../../components/Layout/Layout'
import ContactForm from '../../components/Forms/ContactForm'

export default function Contact() {
  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "ahmed@example.com",
      link: "mailto:ahmed@example.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: "📍",
      title: "Location",
      value: "New York, NY",
      link: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/ahmed",
      link: "https://linkedin.com/in/ahmed"
    }
  ]

  const socialLinks = [
    {
      platform: "GitHub",
      icon: "🐙",
      url: "https://github.com/ahmed",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      platform: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/ahmed",
      color: "hover:text-blue-400"
    },
    {
      platform: "Instagram",
      icon: "📷",
      url: "https://instagram.com/ahmed",
      color: "hover:text-pink-500"
    },
    {
      platform: "YouTube",
      icon: "🎥",
      url: "https://youtube.com/@ahmed",
      color: "hover:text-red-500"
    }
  ]

  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
              Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I&apos;m always excited to discuss new projects, creative ideas, or opportunities to be part of your visions. 
              Let&apos;s start a conversation!
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold mb-8 dark:text-white">Send Me a Message</h2>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 dark:text-white">Contact Information</h2>
                
                <div className="space-y-6 mb-12">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
                    >
                      <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-bold mb-6 dark:text-white">Follow Me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${social.color}`}
                        title={social.platform}
                      >
                        <span className="text-2xl">{social.icon}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-3">📅 Availability</h3>
                  <p className="mb-4">
                    I&apos;m currently available for new projects and collaborations. 
                    I typically respond to messages within 24 hours.
                  </p>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-sm">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">Frequently Asked Questions</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                  What services do you offer?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I offer full-stack web development, frontend development with React/Next.js, 
                  UI/UX design, and website optimization. I can help you build everything from 
                  simple landing pages to complex web applications.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                  What&apos;s your typical project timeline?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Project timelines vary depending on complexity and scope. A simple website 
                  might take 1-2 weeks, while a complex web application could take 1-3 months. 
                  I always provide detailed timelines during our initial consultation.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                  Do you work with international clients?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Yes! I work with clients from around the world. I&apos;m experienced in remote 
                  collaboration and use various communication tools to ensure smooth project delivery 
                  regardless of time zones.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                  What&apos;s your development process?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I follow an agile development approach: initial consultation → planning & design → 
                  development → testing → deployment → maintenance. I keep clients involved throughout 
                  the process with regular updates and feedback sessions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6 dark:text-white">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s turn your ideas into reality. I&apos;m here to help you create something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:ahmed@example.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition font-semibold"
              >
                Email Me Directly
              </a>
              <a 
                href="tel:+15551234567"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400 dark:hover:text-gray-900 px-8 py-3 rounded-lg transition font-semibold"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
