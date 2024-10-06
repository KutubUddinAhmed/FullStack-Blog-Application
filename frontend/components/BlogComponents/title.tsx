"use client"
import Link from "next/link";
import Image from "next/image";
import photo from "@/public/hero/h1.jpg" 

function Title() {
    return (
        <Link href="/some-path" className="cursor-default">
        <div className="mx-[3px] sm:mx-[4px] md:mx-[6px] lg:mx-2 mt-[-25px] z-[-10]">

                 <div className="relative h-[200px] w-full rounded-xl sm:h-[300px] md:h-[400px] lg:h-[400px] xl:h-[400px]">
                    <Image
                      src={photo}
                      alt="Blog Photo"
                      quality={100}
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      className="rounded-xl z-[-100]"
                    />
                    {/* Overlay for large text */}
                    <div className="absolute bottom-5 left-5 p-4 bg-white/30 rounded-lg backdrop-blur-lg sm:bottom-10 sm:left-10 md:bottom-20 md:left-16 lg:bottom-20 lg:left-20 xl:bottom-16 xl:left-24 412px:bottom-8 412px:left-8">
                      <h1 className="text-xl text-black font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 412px:text-2xl">
                        Blog Title
                      </h1>
                    </div>
                  </div>
                </div>
      </Link>
    )
}

export default Title;
