"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import images from "@/utils/images/images";
import { Pagination, Keyboard } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  return (
    <>
      <Link href="/some-path" className="cursor-default">
        <div className="mx-[3px] sm:mx-[4px] md:mx-[6px] lg:mx-2 ">
          <Swiper
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={1} // One image at a time
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            modules={[Pagination, Keyboard]}
          >
            {images.map(
              (
                image: { name: string; aurthor: string; src: string },
                index: number
              ) => (
                <SwiperSlide key={index}>
                  <div className="relative h-[200px] w-full rounded-xl sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[400px]">
                    <Image
                      src={image.src}
                      alt={image.name}
                      quality={100}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-xl z-[-100]"
                    />
                    {/* Overlay for large text */}
                    <div className="absolute bottom-5 left-5 p-4 bg-white/30 rounded-lg backdrop-blur-lg sm:bottom-10 sm:left-10 md:bottom-20 md:left-16 lg:bottom-24 lg:left-20 xl:bottom-28 xl:left-24 412px:bottom-8 412px:left-8">
                      <h1 className="text-xl text-black font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 412px:text-2xl">
                        {image.name}
                      </h1>
                      <span className="text-md text-black font-semibold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 412px:text-lg">
                        Aurthor:{" "}
                      </span>
                      <span className="text-black text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl 412px:text-md">
                        {image.aurthor}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
      </Link>
    </>
  );
}

export default Hero;