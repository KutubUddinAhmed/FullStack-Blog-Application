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
      <Link href="/some-path" className=" cursor-default">
        <div className="mx-2.5">
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
                  <div
                    className="relative h-[400px] w-[100%] rounded-xl"
                  >
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
                    <div className="absolute bottom-20 mb-5 ml-16 p-4 bg-white/30 rounded-lg backdrop-blur-lg">
                      <h1 className="text-5xl text-black font-bold">
                        {image.name}
                      </h1>
                      <span className="text-xl text-black font-semibold">
                        Aurthor:{" "}
                      </span>
                      <span className="text-black text-lg">
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
