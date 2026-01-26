function Skills() {
  const skillCategories = [
    {
      title: "Programming & Frameworks",
      skills: ["Spring Boot (Java)", "React JS", "PHP"]
    },
    {
      title: "API Development",
      skills: ["RESTful architecture", "Microservices", "Scalable API design"]
    },
    {
      title: "Databases",
      skills: ["SQL", "Schema design", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Spring Tool Suite", "DBeaver", "Postman", "Docker", "Git", "PuTTY", "WinSCP"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-scaleIn">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover-lift animate-slideInRight animate-delay-100">
              <h3 className="text-xl font-bold text-purple-400 mb-4">{category.title}</h3>
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-3">
                    <span className="text-white text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
