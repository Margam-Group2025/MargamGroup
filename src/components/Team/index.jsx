import React from "react";
import Title from "../Title";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Team = () => {
  useEffect(() => {
      AOS.init({
        duration: 800,
        delay: 200,
        once: false,
      });
    }, []);
    
  const teamData = [
    {
      name: "Haley Carter",
      title: "CEO & founder",
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    },
    {
      name: "James Walker",
      title: "Ads manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    {
      name: "Jessica Morgan",
      title: "Vice president",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
    },
    {
      name: "Ashley Bennett",
      title: "Marketing & sales",
      image: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      name: "Emily Parker",
      title: "Content marketer",
      image: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      name: "Ryan Mitchell",
      title: "Content writer",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      name: "Megan Brooks",
      title: "Performance manager",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Amber Foster",
      title: "Senior writer",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-800 dark:text-white"
    data-aos="fade-up">
      {/* Title Section */}
      <Title
        title="Meet Our Margveer"
        desc="Our diverse team of passionate experts combines creativity, technical excellence, and strategic thinking to deliver exceptional results for every project."
      />

      {/* Team Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 w-full mt-10"
      data-aos="fade-down">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl
             shadow-gray-100 dark:shadow-white/5 hover:scale-105 transition-all duration-300"
          >
            <img
              src={team.image}
              className="w-16 h-16 rounded-full object-cover"
              alt={team.name}
            />
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
