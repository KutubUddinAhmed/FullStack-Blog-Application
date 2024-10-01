"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";  // Add this for autoplay
import "swiper/css/virtual";   // Add this for virtual slides (if needed)
import { Autoplay } from "swiper/modules";
import c_image from "@/utils/images/c_images"; // Assuming c_images is an array of image objects
import Image from "next/image";

function Companies() {
  return (
    <section className="mx-[6px] max-w-screen mt-2 border-b-2 p-2 dark:bg-white ">
      {/* <span className="flex justify-center font-bold sm:text-2xl">Our Readers</span> */}
      <Swiper
        spaceBetween={40}                 // Space between images
        slidesPerView={5}                 // Show 4 images at a time (you can adjust this)
        loop={true}                       // Enable looping for infinite scrolling
        autoplay={{
          delay: 2000,                       // No delay between scrolls
          disableOnInteraction: false,
          pauseOnMouseEnter: false,       // Keep autoplay running even when hovering
        }}
        speed={2000}
        grabCursor={true}                 // Changes cursor to grabbing style
        freeMode={true}                   // Enables free-flowing slides without snapping
        modules={[Autoplay]}              // Load autoplay module
        className="mySwiper mt-2"
      >
        {c_image.map((image: { src: string }, index: number) => (
          <div key={index}>
            <SwiperSlide>
              <div>
                <Image
                  src={image.src}
                  alt="companieslogos"
                  width={100}
                  height={100}
                  className="aspect-[3/2] sm:h-[50px] sm:aspect-[5/3] object-contain bg-white dark:bg-white"
                />
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
}

export default Companies;