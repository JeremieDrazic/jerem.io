import AnimatedBackground from './components/AnimatedBackground'

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">jerem.io</h1>
          <p className="text-gray-400 text-lg">
            Personal landing page with animated Three.js background
          </p>
          <div className="mt-8">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
