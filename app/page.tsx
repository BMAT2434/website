export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter">
        Creative <span className="text-cmyk-cyan">Thinker</span>.<br />
        Problem <span className="text-cmyk-magenta">Solver</span>.<br />
        <span className="bg-cmyk-yellow px-2 inline-block mt-2">Student</span>.
      </h1>
      <p className="max-w-2xl text-lg text-gray-600 md:text-xl">
        Welcome to my digital portfolio. I am a student passionate about design, development, and creating meaningful digital experiences.
      </p>
    </div>
  );
}
