import { Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold">YouTube Agent</h2>
          <p className="mt-2 text-gray-400">
            Helping creators grow & monetize.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <a href="#" className="hover:text-blue-400">
            Home
          </a>
          <a href="#" className="hover:text-blue-400">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-400">
            Contact
          </a>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-gray-400 hover:text-red-500">
            <Youtube size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500">
            <Instagram size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} YouTube Agent. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
