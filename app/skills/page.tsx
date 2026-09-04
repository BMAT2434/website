export default function Skills() {
  const skillCategories = [
    { title: "Languages", skills: ["JavaScript", "TypeScript", "Python", "HTML/CSS"] },
    { title: "Frameworks & Libraries", skills: ["React", "Next.js", "Tailwind CSS", "Node.js"] },
    { title: "Tools", skills: ["Git", "GitHub", "VS Code", "Figma"] },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold border-b-4 border-cmyk-yellow inline-block pb-2">Skills</h1>
      <div className="space-y-12 pt-4">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span key={skill} className="px-4 py-2 border-2 border-cmyk-black hover:bg-cmyk-yellow transition-colors font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
