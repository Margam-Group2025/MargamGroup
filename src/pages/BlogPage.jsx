import React, { useState } from "react";
import { motion } from "framer-motion";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

/* -------------------- LOCAL DATA (YAHI STORE HAI) -------------------- */

const BLOG_POSTS = [
  {
    id: 1,
    title: "Future of Education in India",
    content:
      "Education in India is evolving rapidly with digital platforms, AI tools, and skill-based learning becoming mainstream.",
    category: "Education",
    author: "Margam Group",
    date: "2025-01-10",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
  },
  {
    id: 2,
    title: "Sustainable Farming Practices",
    content:
      "Modern agriculture focuses on sustainability, organic farming, and efficient water management.",
    category: "Agriculture",
    author: "Margam Group",
    date: "2025-01-08",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  },
  {
    id: 3,
    title: "Real Estate Trends",
    content:
      "Smart homes, green buildings, and township projects are shaping the future of real estate.",
    category: "Real Estate",
    author: "Margam Group",
    date: "2025-01-05",
    image:
      "https://nirmalyasaiannex.com/wp-content/uploads/elementor/thumbs/1-Aerial-1-scaled-q9xj4vbaywz5gevekoozjalnw9j9645upejwei3kbk.jpg",
  },
  {
    id: 4,
    title: "Technology in Agriculture",
    content:
      "AI, IoT, and data analytics are transforming traditional farming into smart agriculture.",
    category: "Agriculture",
    author: "Margam Group",
    date: "2025-01-03",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399",
  },
  {
    id: 5,
    title: "Margamgroup Update",
    content:
      "Recent developments and community initiatives related to the Margam area and associated groups show ongoing growth, social action, and infrastructure focus.",
    category: "Margam Group Update",
    author: "Margam Group",
    date: "2025-25-01",
    image:
      "https://www.dfpmill.com/assets/img/Our-Group-of-Companies.jpg",
  },
  {
  id: 6,
  title: "Modern Agriculture",
  content:
    "Modern agriculture is transforming through technology-driven practices that improve productivity, resource efficiency, and sustainability. Smart irrigation, data-based crop planning, and mechanized farming are enabling farmers to increase yield while maintaining soil health and environmental balance.",
  category: "Agriculture",
  author: "Margam Group",
  date: "2025-25-01",
  image:
    "https://media.licdn.com/dms/image/v2/D4E12AQEbV7iElvNdEA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1664364231248?e=2147483647&v=beta&t=Z2ZLIdKTbolLHyaUWbkFR81jLmGOaJdtHIumOwrOlFk",
},
{
  id: 7,
  title: "Sustainable Agriculture Development",
  content:
    "Sustainable agriculture focuses on long-term food security by adopting eco-friendly practices, efficient water management, and climate-resilient crops. These approaches support rural livelihoods while protecting natural resources for future generations.",
  category: "Agriculture",
  author: "Margam Group",
  date: "2025-25-01",
  image:
    "https://www.samglobaluniversity.ac.in/wp-content/uploads/2025/05/Future-of-Agriculture-in-India-2025-Smart-Farming-Careers.webp",
},
{
  id: 8,
  title: "Digital Transformation in Education",
  content:
    "Education systems are evolving with digital platforms, smart classrooms, and online learning tools that enhance accessibility and learning outcomes. Technology-enabled education prepares students with skills aligned to modern industry needs.",
  category: "Education",
  author: "Margam Group",
  date: "2025-25-01",
  image:
    "https://mondo.com/wp-content/uploads/2023/05/digital-transformation-trends-enhancing-education-2023.jpg",
},
{
  id: 9,
  title: "Skill-Based Education for Career Growth",
  content:
    "Modern education emphasizes practical skills, critical thinking, and professional development. Industry collaboration and experiential learning ensure students are career-ready and adaptable to a rapidly changing job market.",
  category: "Education",
  author: "Margam Group",
  date: "2025-25-01",
  image:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7",
},

{
  id: 11,
  title: "Margam Group Growth and Vision",
  content:
    "Margam Group continues to strengthen its multi-sector presence through innovation, professional management, and customer-centric practices, aiming to create long-term value for stakeholders and communities.",
  category: "Margam Group Update",
  author: "Margam Group",
  date: "2025-25-01",
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
},
{
  id: 12,
  title: "Modern Real Estate Development",
  content:
    "The real estate sector is adopting modern design, smart infrastructure, and sustainable construction practices to meet evolving lifestyle needs and support organized urban growth.",
  category: "Real Estate",
  author: "Margam Group",
  date: "2025-25-01",
  image:
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
},
{
  id: 13,
  title: "Customer-Centric Real Estate Solutions",
  content:
    "Real estate development today prioritizes transparency, quality construction, and long-term value creation, focusing on building sustainable communities rather than just properties.",
  category: "Real Estate",
  author: "Margam Group",
  date: "2025-25-01",
  image:
    "https://images.unsplash.com/photo-1501183638710-841dd1904471",
}

];

/* CATEGORY BUTTONS */
const CATEGORIES = ["All", "Education", "Agriculture", "Real Estate","Margam Group Update"];

/* -------------------- COMPONENT -------------------- */

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts =
    selectedCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter(
          (post) => post.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10" />
          </div>
          <h1 className="text-5xl font-bold mb-6">
            Insights & Updates
          </h1>
          <p className="text-lg text-white/80">
            Education, Agriculture & Real Estate insights from Margam Group
          </p>
        </motion.div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="py-10 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition
                ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold text-blue-600 bg-blue-100 rounded-full">
                  {post.category}
                </span>

                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  {post.content}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </span>
                </div>

                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
                
              </div>
            </motion.article>
          ))}
        </div>
        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No posts available in this category.
          </p>
        )}
      </section>
    </div>
  );
}
