import React from "react";
import { Button } from "../ui/button";

const Subscribe = () => {
  return (
    <section>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="max-w-md">
            <h2 className="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">
              Subscribe
            </h2>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Subscribe and start making the most of every engagement.
            </p>
          </div>
          <form>
            <div className="w-full sm:max-w-lg md:ms-auto">
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full rounded-lg text-sm border-2 border-black dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:border-white"
                    placeholder="Enter your email"
                  />
                </div>

                <Button variant={"outline"} className="w-full sm:w-auto whitespace-nowrap py-5 px-4 bg-black  text-sm font-semibold rounded-lg text-white focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:border-white dark:text-white dark:bg-black ">
                  Subscribe
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
                No spam, unsubscribe at any time
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
