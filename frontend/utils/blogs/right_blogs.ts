interface BlogPost {
  Title: string;
  Content: string;
  Author: string;
  category: string;
  Image: string;
  Date: string;
  Time: string;
}

const blogPosts: BlogPost[] = [
  {
    Title: "Exploring the Universe",
    Content:
      "A deep dive into the mysteries of the cosmos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vitae error",
    Author: "Jane Doe",
    category: "Sports",
    Image: "/companies/brand1.png",
    Date: "2024-10-01",
    Time: "10:00 AM"
  },
  {
    Title: "The Art of Cooking",
    Content: "Delicious recipes and cooking tips from around the world.",
    Author: "John Smith",
    category: "Sports",
    Image: "/companies/brand2.png",
    Date: "2024-10-01",
    Time: "11:00 AM"
  },
  {
    Title: "Tech Innovations",
    Content: "Latest trends and breakthroughs in technology.",
    Author: "Alice Johnson",
    category: "Sports",
    Image: "/companies/brand4.png",
    Date: "2024-10-01",
    Time: "12:00 PM"
  }
];

export default blogPosts;
