import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../../components/data/blogPosts";

const PostDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));
  const [likes, setLikes] = useState(0);

  if (!post) return <h2 className="text-center text-red-600">Post Not Found</h2>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">

      <Link to="/blog" className="text-blue-600 hover:underline">
        ← Back to Blog
      </Link>

      <img
        src={post.image}
        alt={post.title}
        className="w-96 rounded-xl shadow-lg my-8"
      />

      <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>

      <p className="text-gray-600 mt-2">
        By {post.author} • {post.date}
      </p>

      <article className="mt-2 text-gray-800 leading-relaxed whitespace-pre-line">
        {post.content}
      </article>
       <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => setLikes(likes + 1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          👍 Like ({likes})
        </button>

        <button
          onClick={() => navigator.share && navigator.share({
            title: post.title,
            text: "Read this article",
            url: window.location.href
          })}
          className="px-4 py-2 bg-green-600 text-white rounded-lg"
        >
          🔗 Share
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
