export default function Projects() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold border-b-4 border-cmyk-cyan inline-block pb-2">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="border-2 border-gray-200 p-6 hover:border-cmyk-cyan transition-colors group">
            <h2 className="text-2xl font-bold mb-2 group-hover:text-cmyk-cyan">Project {i}</h2>
            <p className="text-gray-600 mb-4">A brief description of project {i}. This explains what the project does, the technologies used, and the problems it solves.</p>
            <a href="#" className="font-medium text-cmyk-black hover:text-cmyk-magenta underline decoration-2 decoration-cmyk-yellow underline-offset-4">View Project &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
}
