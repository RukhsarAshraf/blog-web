import Image from "next/image";

export default function AuthorCard() {
  return (
    <div className="bg-gradient-to-r from-slate-800 to-indigo-900 shadow-xl rounded-lg p-6 mt-12">
      <div className="flex items-center space-x-4">
        <Image
          className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500 shadow-md"
          src="/images/Author.jpg"
          alt="Author"
          width={80}
          height={80}
        />

        <div>
          <h3 className="text-2xl font-bold text-blue-500">Rukhsar Ashraf</h3>
          <p className="text-pink-200 italic">
            A storyteller crafting tales with passion and depth.
          </p>
        </div>
      </div>

      <p className="mt-6 text-pink-200 leading-relaxed text-justify">
        Hello! I am Rukhsar Ashraf, a passionate novelist and blogger who loves 
        exploring the depths of human emotions and weaving intricate stories. 
        Writing novels is more than a profession for me; it is my way of connecting 
        with readers, sharing insights, and leaving a lasting impact. Whether it’s 
        a gripping thriller, an inspiring tale of resilience, or a thought-provoking 
        blog post, my aim is to ignite curiosity and touch hearts through words.
      </p>

      <div className="mt-6 flex flex-wrap gap-4">
        <a
          href="https://github.com/RukhsarAshraf"
          className="flex items-center px-4 py-2 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition duration-300 shadow-lg transform hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
