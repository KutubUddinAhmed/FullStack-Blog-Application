import React from "react";
import social from "@/utils/images/social_images";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

function Footer() {
  return (
    <footer className="my-3 h-[300px] p-1 bg-black/85 mx-6 rounded-md">
      <div className=" container mx-auto h-full p-5">
        <section className="  text-white px-2 py-4 h-full rounded-lg flex items-center justify-center relative flex-col space-y-20">
          {/* Social media logos */}
          <div className=" flex justify-center flex-col">
            <div className="social-media flex space-x-2 items-center justify-end absolute right-5 top-5">
              {social.map(
                (logo: { images: string; slug: string }, i: number) => (
                  <Link key={i} href={`${logo.slug}`} target="_blank">
                    <div className="relative h-[28px] w-[28px] overflow-hidden rounded-full bg-white">
                      <Image
                        src={logo.images}
                        alt="social media logos"
                        width={80}
                        height={80}
                        className="h-[28px] w-full rounded-full mix-blend-multiply cursor-pointer"
                      />
                    </div>
                  </Link>
                )
              )}
            </div>
            {/* Contact section */}
            <div className="flex items-center justify-center">
              <div className="flex items-center mb-2 space-x-5">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="border p-[6px] rounded-md text-black w-full"
                />
                <Button className="p-[21px]">Submit</Button>
              </div>
            </div>

            {/* Bottom conatiner */}
            {/* <div className="font-sans flex items-center sm:flex-row sm:items-center sm:justify-between text-balance text-sm justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <p className="flex items-center text-balance justify-center">Logo and Text</p>
            <p className="font-sans flex justify-center items-center">
              &copy; All rights reserved. {new Date().getFullYear()}.
            </p>
            <p className="flex justify-center items-center">Made with love for readers</p>
          </div> */}
            <div className="absolute bottom-0 lg:bottom-5 w-full left-0 right-0">
              <div className=" space-y-2  lg:space-y-0 lg:flex justify-between items-center ">
                <p className="text-center">Logo and Text</p>
                <p className="text-center">
                  &copy; All rights reserved. {new Date().getFullYear()}.
                </p>
                <p className="text-center">Made with love for readers</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
