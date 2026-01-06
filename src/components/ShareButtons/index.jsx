import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
  FaShareAlt
} from "react-icons/fa";

const ShareButtons = () => {
  const url = window.location.href;
  const text = "Check this out!";

 const shareLinks = {
  facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
  twitter: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
  whatsapp: `https://api.whatsapp.com/send?text=${text} ${url}`,
  linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
};


  return (
    <div className="flex items-center gap-3">
      {/* Main Share Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white cursor-pointer">
        <FaShareAlt />
      </div>

      {/* Social Icons */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:scale-110 transition"
      >
        <FaFacebookF />
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-500 text-white hover:scale-110 transition"
      >
        <FaTwitter />
      </a>

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:scale-110 transition"
      >
        <FaWhatsapp />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-800 text-white hover:scale-110 transition"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default ShareButtons;