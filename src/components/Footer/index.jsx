import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Our Company</h2>
          <p className="text-sm leading-6">
            A diversified business group excelling in real estate, construction, interiors, education, textiles, and e-commerce.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Our Business</a></li>
            <li><a href="#" className="hover:text-white">Our Team</a></li>
            <li><a href="#" className="hover:text-white">Connect Us</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><MapPin size={18}/> Margam Group, Bhubaneswar, India</li>
            <li className="flex items-center gap-2"><Phone size={18}/> +1 234 567 890</li>
            <li className="flex items-center gap-2"><Mail size={18}/> margamgroup.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <Facebook size={20}/>
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <Twitter size={20}/>
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <Linkedin size={20}/>
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
              <Instagram size={20}/>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-themegreen">Margam Group</span>. All Rights Reserved.
      </div>
    </footer>
  );
}
