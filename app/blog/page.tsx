export default function Blog() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold border-b-4 border-cmyk-black inline-block pb-2">Blog</h1>
      <p className="text-xl text-gray-500">Thoughts, learnings, and updates.</p>

      <div className="space-y-8 mt-8">
        {[1, 2, 3].map((i) => (
          <article key={i} className="group border-b border-gray-200 pb-8">
            <time className="text-sm text-gray-500 mb-2 block">October {i}, 2023</time>
            <h2 className="text-2xl font-bold mb-3 group-hover:text-cmyk-magenta transition-colors">
              <a href="#">Blog Post Title {i}</a>
            </h2>
            <p className="text-gray-700 mb-4">
              This is a brief excerpt from the blog post. It gives a summary of what the article is about before the user clicks to read more...
            </p>
            <a href="#" className="text-cmyk-cyan font-medium hover:underline">Read more &rarr;</a>
          </article>
        ))}
      </div>
    </div>
  );
}
