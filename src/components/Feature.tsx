import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-r from-slate-800 to-indigo-900">
        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-4xl font-bold text-center my-12 text-pink-300 animate-pulse">
            Discover Our Novel&apos;s Blog
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Namal",
              "Peer-e-Kamil",
              "Abe Hayat",
              "Yaram",
              "Bakht",
              "Usri Yusra",
            ].map((Category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-indigo-600 rounded-lg shadow-xl hover:bg-pink-500 hover:text-white transition duration-300 ease-in-out transform hover:scale-110 cursor-pointer flex items-center justify-center text-pink-100"
              >
                <p className="text-center text-lg font-semibold tracking-wide">
                  {Category}
                </p>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-300 rounded-lg transition duration-300 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-semibold md:text-lg text-pink-200 mt-16 px-6 animate-fade-in-down delay-100 leading-relaxed text-center max-w-3xl mx-auto">
        `Welcome to Our Novel&apos;s Blog, a haven for book lovers and storytelling enthusiasts! Here, we dive into the enchanting world of novels, exploring captivating stories, unforgettable characters, and the magic of words. Whether you&apos;re a fan of romance, mystery, fantasy, or historical fiction, our blog is your gateway to discovering the latest reads, timeless classics, and hidden literary gems. Join us on this journey as we unravel the beauty of storytelling, one novel at a time!`
        </p>
      </section>
    </div>
  );
}