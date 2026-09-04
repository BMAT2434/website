export default function Contact() {
  return (
    <div className="space-y-8 max-w-2xl">
      <h1 className="text-4xl font-bold border-b-4 border-cmyk-cyan inline-block pb-2">Contact</h1>
      <p className="text-lg text-gray-700">
        I am currently looking for new opportunities. My inbox is always open.
        Whether you have a question or just want to say hi, I will try my best to get back to you!
      </p>

      <div className="mt-8 space-y-4">
        <p className="flex items-center space-x-2">
          <span className="font-bold w-20">Email:</span>
          <a href="mailto:hello@example.com" className="text-cmyk-magenta hover:underline">hello@example.com</a>
        </p>
        <p className="flex items-center space-x-2">
          <span className="font-bold w-20">GitHub:</span>
          <a href="#" className="hover:text-cmyk-cyan hover:underline">github.com/BMAT2434</a>
        </p>
        <p className="flex items-center space-x-2">
          <span className="font-bold w-20">LinkedIn:</span>
          <a href="#" className="hover:text-cmyk-yellow hover:underline">linkedin.com/in/yourprofile</a>
        </p>
      </div>

      <div className="mt-12 p-8 border-4 border-cmyk-black bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Send a message (Placeholder)</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">Name</label>
            <input type="text" className="w-full border-2 border-gray-300 p-2 focus:border-cmyk-cyan focus:outline-none" disabled placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-bold mb-2">Message</label>
            <textarea className="w-full border-2 border-gray-300 p-2 h-32 focus:border-cmyk-magenta focus:outline-none" disabled placeholder="Your message here..."></textarea>
          </div>
          <button type="button" disabled className="bg-cmyk-black text-white px-6 py-3 font-bold hover:bg-cmyk-cyan transition-colors cursor-not-allowed opacity-50">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
