import React from "react";
import social from "@/utils/images/social_images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="my-3 h-[300px] p-1 ">
      <section className="bg-black/85 text-white px-2 py-4 h-full rounded-lg flex flex-col space-y-20">
        {/* Social media logos */}
        <div className="social-media flex space-x-2 justify-end">
          {social.map((logo: { images: string; slug: string }, i: number) => (
            <Link key={i} href={`${logo.slug}`} target="_blank">
              <div className="relative h-[26px] w-[28px] overflow-hidden rounded-full bg-white">
                <Image
                  src={logo.images}
                  alt="social media logos"
                  width={80}
                  height={80}
                  className="h-[26px] w-[28px] rounded-full mix-blend-multiply cursor-pointer"
                />
              </div>
            </Link>
          ))}
        </div>
        {/* Contact section */}
        <div className="flex items-center justify-center">
          <div className="flex items-center mb-2 space-x-16">
            <input
              type="email"
              placeholder="Enter your email"
              className="border rounded p-2 text-black"
            />
            <Button className="p-[21px]">Submit</Button>
          </div>
        </div>

        {/* Bottom conatiner */}
        <div className="font-sans flex items-center sm:flex-row sm:items-center sm:justify-between text-balance text-sm justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <span className="flex items-center text-balance">Logo and Text</span>
          <span className="font-sans">
            &copy; All rights reserved. {new Date().getFullYear()}.
          </span>
          <span>Made with love for readers</span>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
