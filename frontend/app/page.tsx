import Companies from "@/components/companies";
import Footer from "@/components/footer";
import Hero from "@/components/Hero/hero";
import Multi_blog from "@/components/multi_blog";

export default function Home() {
  return (
    <main className="m-0 p-0 overflow-x-hidden">
      <Hero />
      <Companies />
      <Multi_blog />
      <Footer />
    </main>
    
  )
}
