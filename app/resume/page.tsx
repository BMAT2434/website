export default function Resume() {
  return (
    <div className="space-y-8 max-w-3xl">
      <div className="flex justify-between items-end border-b-4 border-cmyk-black pb-4">
        <h1 className="text-4xl font-bold">Resume / CV</h1>
        <a href="#" className="font-medium bg-cmyk-black text-white px-4 py-2 hover:bg-cmyk-cyan transition-colors">
          Download PDF
        </a>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-cmyk-magenta mb-4">Education</h2>
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="text-xl font-semibold">University Name</h3>
            <p className="text-gray-500 mb-2">Degree Name • Expected Graduation: YYYY</p>
            <p className="text-gray-700">Relevant Coursework: Course 1, Course 2, Course 3</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-cmyk-cyan mb-4">Experience</h2>
          <div className="border-l-4 border-gray-200 pl-4">
            <h3 className="text-xl font-semibold">Role / Title</h3>
            <p className="text-gray-500 mb-2">Company Name • Date - Date</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Accomplishment or responsibility 1.</li>
              <li>Accomplishment or responsibility 2.</li>
              <li>Accomplishment or responsibility 3.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
