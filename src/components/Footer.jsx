import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4">
            <FaLinkedin className="cursor-pointer text-2xl"/>
            <FaFacebook className="cursor-pointer text-2xl"/>
            <FaInstagram className="cursor-pointer text-2xl"/>
            <FaXTwitter className="cursor-pointer text-2xl"/>
          </div>
           <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                <p>&copy; 2024 Intikhab. All rights reserved. </p>
                <p>Supportive Partner ❤️ Myself</p>
           </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
