import Link from "next/link";

function Cards() {
  const testimonials = [
    {
      name: "John Doe",
      testimonial:
        "This product has changed my life! Highly recommend to everyone.",

    },
    {
      name: "Jane Smith",
      testimonial: "Great service and support. Will definitely use again.",

    },
    {
      name: "Sam Wilson",
      testimonial: "Good value for money. Satisfied with the purchase.",

    },
    {
      name: "Captain Uganda",
      testimonial: "Good value for money. Satisfied with the purchase.",

    },
  ];

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
        {testimonials.map(
          (
            card: {
              name: string;
              testimonial: string;
            },
            i: number
          ) => (
            <Link
                    href={"/about"}
                    key={i}
              className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
            >
              <div className="p-4 md:p-5">
                <div className="flex justify-between items-center gap-x-3">
                  <div className="grow">
                    <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
                      {card.name}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                     {card.testimonial}
                    </p>
                  </div>
                  <div>
                    <svg
                      className="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default Cards;
