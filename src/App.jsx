import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import toast, { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Business from "./pages/Business";
import Career from "./pages/Career";
import Agriculture from "./pages/Agriculture";
import Education from "./pages/Education";
import Realestate from "./pages/Realestate";
import BlogPage from "./pages/BlogPage";
import AboutUs from "./pages/AboutUs";
import PostDetails from "./components/PostDetails";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/SrcollToTop";
function App() {
  return (
    <> 
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={true} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/career" element={<Career />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/post" element={<BlogPage />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <Route path ="*" element={<h2 className="text-center text-red-600">Page Not Found</h2>} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
