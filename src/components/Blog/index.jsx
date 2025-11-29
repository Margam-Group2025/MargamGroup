import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-center px-4">
      
      {/* Rocket Icon with Glow */}
      <motion.div
        className="text-pink-400 text-6xl mb-6 drop-shadow-[0_0_25px_rgba(236,72,153,0.8)]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        🚀
      </motion.div>

      {/* Neon Coming Soon Text */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold uppercase text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,1)]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Coming Soon
      </motion.h1>

      {/* Subtext */}
      <motion.p
        className="mt-4 text-lg md:text-2xl text-gray-200 font-medium tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Stay tuned for our blog launch!
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 hover:shadow-blue-500/50 transition-all duration-300"
        >
          ⬅ Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}
