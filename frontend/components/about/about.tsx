import Cards from "./cards";
import TopAuthors from "./middle";
import Subscribe from "./subscribe";
import Topsection from "./top-section";
function About() {
  return (
    <section>
      <Topsection />
      <TopAuthors />
      <Cards />
      <Subscribe />
    </section>
  );
}

export default About;
