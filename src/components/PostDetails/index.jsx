import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import blogPosts from "../../components/data/blogPosts";
import ShareButtons from "../ShareButtons";

const PostDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === Number(id));

  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const savedLikes = localStorage.getItem(`likes-${id}`);
    if (savedLikes) setLikes(Number(savedLikes));
  }, [id]);

  const handleLike = () => {
    const updated = likes + 1;
    setLikes(updated);
    localStorage.setItem(`likes-${id}`, updated);
  };

  const handleComment = () => {
    if (!comment.trim()) return;
    setComments([...comments, comment]);
    setComment("");
  };

  if (!post) {
    return (
      <h2 className="text-center text-red-600 mt-20 text-xl font-semibold">
        Post Not Found
      </h2>
    );
  }

  const readingTime = Math.ceil(post.content.split(" ").length / 200);

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">

      {/* Breadcrumb */}
      <div className="text-bold text-black mb-6 mt-12">
        <Link to="/" className="hover:underline">Home</Link> /{" "}
        <Link to="/blog" className="hover:underline">Blog</Link> /{" "}
        <span className="text-gray-800">{post.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

        {/* MAIN CONTENT */}
        <div className="lg:col-span-2">

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[420px] object-cover rounded-3xl shadow-lg mb-8"
          />

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>✍️ {post.author}</span>
            <span>📅 {post.date}</span>
            <span>⏱️ {readingTime} min read</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <article className="prose max-w-none prose-lg text-gray-700">
            {post.content}
          </article>

          {/* ACTIONS */}
          <div className="flex flex-wrap gap-4 mt-10">
            <button
              onClick={handleLike}
              className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            >
              ❤️ Like ({likes})
            </button>

            <ShareButtons/>
          </div>

          {/* COMMENTS */}
          <div className="mt-14">
            <h3 className="text-2xl font-semibold mb-4">💬 Comments</h3>

            <div className="flex gap-3 mb-6">
              <input
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 border rounded-xl px-4 py-3 focus:outline-none"
              />
              <button
                onClick={handleComment}
                className="bg-blue-600 text-white px-5 rounded-xl hover:bg-blue-700"
              >
                Post
              </button>
            </div>

            {comments.length === 0 && (
              <p className="text-gray-500">No comments yet</p>
            )}

            <ul className="space-y-3">
              {comments.map((c, i) => (
                <li key={i} className="bg-gray-50 p-4 rounded-xl">
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-8 sticky top-24">

          {/* AUTHOR CARD */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-semibold text-lg mb-2">👤 Author</h4>
            <p className="text-gray-700">{post.author}</p>
            <p className="text-sm text-gray-500 mt-2">
              Sharing insights & industry knowledge
            </p>
          </div>

          {/* TAGS */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-semibold mb-3">🏷️ Tags</h4>
            <div className="flex flex-wrap gap-2">
              {(post.tags || ["Business", "Growth", "Strategy"]).map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RELATED POSTS */}
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <h4 className="font-semibold mb-4">📌 Related Posts</h4>
            <ul className="space-y-4">
              {relatedPosts.map(p => (
                <Link
                  key={p.id}
                  to={`/blog/${p.id}`}
                  className="block hover:text-blue-600"
                >
                  <p className="font-medium">{p.title}</p>
                  <span className="text-sm text-gray-500">{p.date}</span>
                </Link>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default PostDetails;
