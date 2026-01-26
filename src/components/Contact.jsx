function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12 animate-scaleIn">Get In Touch</h2>
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 hover-lift animate-fadeIn">
          <div className="text-center">
            <p className="text-gray-300 mb-6">I'm always interested in hearing about new opportunities and collaborations!</p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-300">ratnadeeepk@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-300">+91 7757 952 607</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Mumbai</span>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/ratnadeep17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="mailto:ratnadeeepk@gmail.com" className="text-gray-400 hover:text-white transition">Email</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
