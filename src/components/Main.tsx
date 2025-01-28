import React from "react";
import BlogCard from "../components/BlogCard";

export default function Main () {
  const Posts = [
    {
      id: "1",
      title: "Namal",
      description:"Namal inteqam, insaf aur rishton ki uljhi hui girhon ki ek gripping kahani hai.",
      date: "2025-1-5",
      image: "/images/namal.jpg",
    },
    {
      id: "2",
      title: "Peer-e-Kaamil",
      description:"Peer-e-Kamil ek spiritual aur emotional journey hai jo ishq-e-haqiqi aur khud ko pehchan-ne ka safar bayan karti hai.",
      date: "2025-1-5",
      image: "/images/PEK.jpg",
    },
    {
      id: "3",
      title: "Abe Hayat",
      description:"Abe Hayat zindagi, ishq aur adabi tehqiqaat ka ek la-jawab majmua hai jo rooh ko mutasir karta hai.",
      date: "2025-1-5",
      image: "/images/Ab.jpg",
    },
    {
      id: "4",
      title: "Yaram",
      description:"Yaram dosti aur mohabbat ki ek jazbati kahani hai jo rishton ke gehre asraat ko ujagar karti hai.",
      date: "2025-1-5",
      image: "/images/yarm.jpg",
    },
    {
      id: "5",
      title: "Bakht",
      description:"Bakht ek kirdar aur taqdeer ke darmiyan ladai ki dilchasp dastaan hai.",
      date: "2025-1-5",
      image: "/images/bakht.jpg",
    },
    {
      id: "6",
      title: "Usri Yusra",
      description:"Usri Yusra umeed aur sabr ke zariye mushkilat ka samna karne ki shandar kahani hai.",
      date: "2025-1-5",
      image: "/images/UY.jpg",
    },
  ];

  return (
    <div className="my-12">
      <h1 className="bg-gradient-to-r from-blue-500 to-indigo-900 text-4xl font-bold text-center my-8 py-6 text-red-600 animate-color-change">
        Exploring the collection of your favourite and inspiring Urdu Novels
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {Posts.map((post, index) => (
          <div
            className="fade-in transform transition duration-300 ease-in-out hover:scale-105"
            key={post.id}
          >
            <div className="blog-card p-4 rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
              <BlogCard post={post} isDarkBackground={index % 2 === 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
