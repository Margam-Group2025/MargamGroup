import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "../components/data/blogPosts";
const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12 mt-12">
          LATEST BLOG POSTS
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
              <img
                className="h-48 w-full object-cover"
                src={post.image}
                alt={post.title}
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.content.substring(0, 120)}...</p>

                <Link
                  to={`/blog/${post.id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
