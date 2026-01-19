interface ProjectCardProps {
  name: string
  description: string
  githubUrl?: string
  isPlaceholder?: boolean
}

function GitHubIcon() {
  return (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default function ProjectCard({
  name,
  description,
  githubUrl,
  isPlaceholder = false,
}: ProjectCardProps) {
  if (isPlaceholder) {
    return (
      <div
        className="p-4 rounded-lg border border-white/10 bg-white/5 opacity-50"
        aria-label={`${name}: ${description}`}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-white/50 font-medium">{name}</h3>
            <p className="text-sm text-white/30 mt-1">{description}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
      aria-label={`${name}: ${description}. Opens GitHub repository in new tab.`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-white font-medium group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{description}</p>
        </div>
        <div
          className="text-gray-500 group-hover:text-white transition-colors"
          aria-hidden="true"
        >
          <GitHubIcon />
        </div>
      </div>
    </a>
  )
}
