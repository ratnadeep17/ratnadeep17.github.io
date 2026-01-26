function Experience() {
  const experiences = [
    {
      title: "Software Developer",
      company: "IIT Bombay (Application Software Centre)",
      period: "10/2025 – Present",
      description: [
        "Payment Link Service: Designed and developed a secure backend system to generate one-click payment links embedded in invoices",
        "Estate Management System: Contributed to backend development for IIT Bombay's estate operations platform",
        "Hospital Management System (Medsum): Supported development of a healthcare platform for IIT Bombay hospital"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "IIT Bombay (Application Software Centre)",
      period: "10/2024 – 10/2025",
      description: [
        "Contributed to various projects including payment systems and estate management",
        "Gained hands-on experience with Spring Boot and enterprise application development"
      ]
    },
    {
      title: "Software Developer",
      company: "RI Equation LLP",
      period: "09/2023 – 08/2024",
      description: [
        "Developed a scalable backend for SOLINAS using Spring Boot and MySQL",
        "Implemented seamless integration with Angular frontend",
        "Set up automated deployment pipelines (GitLab, WinSCP, PuTTY)"
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-scaleIn">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover-lift">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-purple-400">{exp.company}</p>
                </div>
                <span className="text-gray-400">{exp.period}</span>
              </div>
              <ul className="text-gray-300 space-y-2">
                {exp.description.map((desc, idx) => (
                  <li key={idx}>• {desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
