const TopAuthors = () => {
  const authors = [
    {
      id: 1,
      name: "John Doe",
      slug: "john-doe",
      imageUrl: "/path/to/john-doe.jpg",
      bio: "A well-respected author in the tech industry with a focus on front-end development."
    },
    {
      id: 2,
      name: "Jane Smith",
      slug: "jane-smith",
      imageUrl: "/path/to/jane-smith.jpg",
      bio: "Writes compelling articles on UX/UI design and user-centric approaches."
    },
    {
      id: 3,
      name: "Mike Johnson",
      slug: "mike-johnson",
      imageUrl: "/path/to/mike-johnson.jpg",
      bio: "Specialist in backend development and cloud computing, sharing insights through blogs."
    }
  ];

  return (
    <section className="pb-[20px]">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-8">
          <h2 className="text-heading-5 font-semibold text-dark">Top Authors</h2>
          <a className="group leading-none text-dark" href="/author">
            <span className="flex items-center gap-2 bg-gradient-to-r from-dark to-dark bg-[length:0px_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_1px]">
              All Authors
              <svg className="fill-current transition-all group-hover:rotate-45" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <g clipPath="url(#clip0)">
                  <path d="M13.7734 3.59902L5.48035 3.53935C5.12237 3.53935 4.84395 3.81778 4.84395 4.17575C4.84395 4.53372 5.12237 4.81215 5.48035 4.81215L12.2222 4.87181L3.77003 13.3239C3.53138 13.5626 3.53138 13.9603 3.77003 14.199C4.00868 14.4376 4.42632 14.4575 4.66496 14.2189L13.1569 5.72696L13.2165 12.5483C13.2165 12.9063 13.495 13.1847 13.8529 13.1847C14.012 13.1847 14.1711 13.1052 14.2905 12.9859C14.4098 12.8665 14.4893 12.7074 14.4694 12.5284L14.4098 4.23541C14.4098 3.87744 14.1314 3.59902 13.7734 3.59902Z" fill=""></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="18" height="18" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopAuthors;