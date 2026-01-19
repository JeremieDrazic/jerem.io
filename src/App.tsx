import AnimatedBackground from './components/AnimatedBackground'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    name: 'Decksmith',
    description: 'Magic: The Gathering deck builder',
    githubUrl: 'https://github.com/JeremieDrazic/decksmith',
  },
  {
    name: 'jerem.io',
    description: 'Personal website with Three.js background',
    githubUrl: 'https://github.com/JeremieDrazic/jerem.io',
  },
  {
    name: 'Coming Soon',
    description: 'Next project in the works',
    isPlaceholder: true,
  },
  {
    name: 'Coming Soon',
    description: 'Future project',
    isPlaceholder: true,
  },
]

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
        <main className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl animate-fade-in">
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight">
              Jérémie
            </h1>
            <p className="text-lg text-gray-400">Software Engineer</p>
          </header>

          {/* Projects */}
          <section>
            <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
              Projects
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.name + project.description}
                  name={project.name}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  isPlaceholder={project.isPlaceholder}
                />
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-white/10 text-center">
            <a
              href="https://github.com/JeremieDrazic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors text-sm"
            >
              github.com/JeremieDrazic
            </a>
          </footer>
        </main>
      </div>
    </>
  )
}

export default App
