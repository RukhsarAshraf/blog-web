import React from "react";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "../components/ui/card";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-6 ${isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"} rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300`}
    >
      <Image
        src={post.image}
        alt={post.title}
        width={500}
        height={300}
        className="rounded-lg mb-4"
      />

      <CardTitle className="text-2xl font-semibold text-center mt-4">
        {post.title}
      </CardTitle>

      <CardContent className="text-center mt-2">
        <p className="text-base md:text-lg">{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center">
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 text-white bg-blue-600 rounded-lg text-center mt-4 hover:bg-blue-500 transition-all duration-300 transform ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-black hover:bg-red-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
