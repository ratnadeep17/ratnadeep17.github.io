function Projects() {
  const projects = [
    {
      title: "NSS Portal",
      description: "Web-based application using PHP to streamline and manage National Service Scheme (NSS) activities.",
      gradient: "from-purple-600 to-blue-600",
      tags: ["PHP", "Web Development"]
    },
    {
      title: "Payment Link Service",
      description: "Secure backend system for generating one-click payment links embedded in invoices.",
      gradient: "from-green-600 to-teal-600",
      tags: ["Spring Boot", "Java"]
    },
    {
      title: "Estate Management System",
      description: "Backend development for IIT Bombay's estate operations platform with improved data management.",
      gradient: "from-orange-600 to-red-600",
      tags: ["MySQL", "Spring Boot"]
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-scaleIn">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden hover:transform hover:scale-105 transition hover-lift animate-scaleIn animate-delay-100">
              <div className={`h-48 bg-gradient-to-br ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={`px-3 py-1 ${tag.includes('PHP') ? 'bg-purple-600/30 text-purple-300' : tag.includes('Spring') ? 'bg-green-600/30 text-green-300' : 'bg-orange-600/30 text-orange-300'} rounded-full text-sm`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
