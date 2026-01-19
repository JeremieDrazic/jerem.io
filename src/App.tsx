import { Suspense, lazy } from 'react'
import ProjectCard from './components/ProjectCard'

const AnimatedBackground = lazy(
  () => import('./components/AnimatedBackground')
)

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

function LoadingBackground() {
  return (
    <div
      className="fixed inset-0 -z-10"
      style={{
        background: 'linear-gradient(to bottom right, #0f172a, #1e1b4b)',
      }}
    />
  )
}

function App() {
  return (
    <>
      <Suspense fallback={<LoadingBackground />}>
        <AnimatedBackground />
      </Suspense>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
        <main
          className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl animate-fade-in"
          role="main"
        >
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight">
              Jérémie
            </h1>
            <p className="text-lg text-gray-300">Software Engineer</p>
          </header>

          {/* Projects */}
          <section aria-labelledby="projects-heading">
            <h2
              id="projects-heading"
              className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"
            >
              Projects
            </h2>
            <ul className="space-y-3" role="list">
              {projects.map((project) => (
                <li key={project.name + project.description}>
                  <ProjectCard
                    name={project.name}
                    description={project.description}
                    githubUrl={project.githubUrl}
                    isPlaceholder={project.isPlaceholder}
                  />
                </li>
              ))}
            </ul>
          </section>

          {/* Footer */}
          <footer className="mt-10 pt-6 border-t border-white/10 text-center">
            <a
              href="https://github.com/JeremieDrazic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded"
              aria-label="Visit Jérémie's GitHub profile"
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
