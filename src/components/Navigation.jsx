function Navigation({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-white font-bold text-xl">Ratnadeep Kamble</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition">Skills</a>
            <a href="#education" className="text-gray-300 hover:text-white transition">Education</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#home" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#about" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#experience" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition" onClick={() => setIsMenuOpen(false)}>Experience</a>
            <a href="#projects" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#skills" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition" onClick={() => setIsMenuOpen(false)}>Skills</a>
            <a href="#education" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition" onClick={() => setIsMenuOpen(false)}>Education</a>
            <a href="#contact" className="block px-3 py-2 text-white hover:bg-white/10 rounded-md transition" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
