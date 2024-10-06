"user client"
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const BlogPost = () => {
  return (
    <section className="pb-17.5 pt-31.5 bg-dark-mode-bg text-dark-mode-text">
      <div className="mx-auto max-w-[1030px] px-4 sm:px-8 xl:px-0">
        <div className="mx-auto max-w-[770px] text-center">
          <Link href="/category/travel" passHref className="mb-1 inline-flex rounded-full bg-blue/[0.08] px-3 py-1 text-custom-sm font-medium capitalize text-blue">
            travel
          </Link>
          <h1 className="mb-5 text-2xl font-bold text-dark-mode-heading sm:text-4xl lg:text-custom-2">
            Traveller Visiting Ice Cave With Amazing Eye-Catching View of Nature
          </h1>
          <p className="text-dark-mode-body">
            In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
          </p>

          <div className="mt-7.5 flex items-center justify-center gap-4">
            <div className="flex h-12.5 w-12.5 overflow-hidden rounded-full">
              <Link href="/author/adrio-devid" passHref>
                <Image
                  src={"/companies/brand5.png"}
                  alt="Adrio Devid"
                  loading="lazy"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
            <div className="text-left">
              <p className="mb-1 text-custom-lg font-medium text-dark-mode-heading">
                <Link href="/author/adrio-devid" passHref>
                  Adrio Devid
                </Link>
              </p>
              <div className="flex items-center gap-1.5">
                <p>Aug 24 2023</p>
                <span className="flex h-[3px] w-[3px] rounded-full bg-dark-mode-divider"></span>
                <p>1 min read</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-11">
          <Image
            alt="Traveller Visiting Ice Cave With Amazing Eye-Catching View with Nature"
            loading="lazy"
            width={1030}
            height={550}
            src="/hero/h3.jpg"
            className="rounded-lg"
          />
        </div>

        <div className="mx-auto max-w-[770px]">
          <article className="blog-details blog-details-one text-dark-mode-body">
            <p>In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper...</p>
            <h4 className="font-bold text-dark-mode-heading">Introduction: Finding Bliss in Simplicity</h4>
            <p>
              In a culture that often celebrates excess and constant activity, the idea of a lifestyle centered around simplicity might
              seem counterintuitive...
            </p>
            <h4 className="font-bold text-dark-mode-heading">Clearing the Clutter</h4>
            <p>
              Simplicity starts at home. Decluttering your living space is an invigorating process that allows you to create physical and
              mental space for what truly resonates with you...
            </p>
            <h4 className="font-bold text-dark-mode-heading">Mindful Consumption</h4>
            <p>
              In a consumer-driven society, practicing mindful consumption is a revolutionary act...
            </p>
            <h4 className="font-bold text-dark-mode-heading">Nurturing Connections</h4>
            <p>
              In the quest for simplicity, nurturing relationships takes center stage. Cultivating deep connections with friends, family, and
              yourself...
            </p>

            <blockquote className="my-6 text-dark-mode-quote">So, take a moment to breathe, to reflect, and to appreciate the simple joys that surround you...</blockquote>

            <h4 className="font-bold text-dark-mode-heading">Pursuing Passions</h4>
            <p>
              Simplicity doesn’t mean boredom. Quite the opposite – it’s an opportunity to dive deeper into your passions...
            </p>
            <h4 className="font-bold text-dark-mode-heading">Embracing Mindfulness</h4>
            <p>
              At the heart of a simple lifestyle is mindfulness – the practice of being fully present in each moment...
            </p>
            <h4 className="font-bold text-dark-mode-heading">Conclusion</h4>
            <p>
              Embracing a simple lifestyle is a personal journey, unique to each individual. It's about finding your own balance between
              modern conveniences and the timeless virtues of minimalism...
            </p>
          </article>

          <div className="mx-auto mb-4 flex justify-center">
            <Link href="/archive" passHref className="mt-10 rounded-md border border-dark-mode-border px-7 py-3 font-medium text-dark-mode-text duration-200 ease-in hover:bg-dark-mode-hover hover:text-white">
              View all Posts
            </Link>
          </div>

          <div className="mt-12.5 border-t border-dark-mode-divider pb-17.5 pt-10">
            <div className="flex flex-col gap-9 sm:flex-row sm:items-center">
              <div className="flex h-[133px] w-full max-w-[133px] items-center justify-center rounded-full border border-dark-mode-border">
                <Link href="/author/adrio-devid" passHref className="h-[97px] w-full max-w-[97px] overflow-hidden rounded-full shadow-img">
                  <Image
                    alt="Adrio Devid"
                    loading="lazy"
                    width={101}
                    height={101}
                    src="/companies/brand2.png"
                  />
                </Link>
              </div>

              <div>
                <h4 className="mb-3 text-custom-lg font-medium text-dark-mode-heading">Adrio Devid</h4>
                <p className="text-dark-mode-body">
                  Mario, a co-founder of Acme and the content management system Sanity, is an accomplished Staff Engineer with a
                  specialization in Frontend at Vercel...
                </p>
                <Link href="/author/adrio-devid" passHref className="mt-4 flex text-custom-sm text-primary">
                  View profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="relative z-10 overflow-hidden bg-dark-mode-footer py-12.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <div className="rounded-[10px] bg-dark-mode-card px-4 py-9 shadow-1 sm:px-8 xl:px-10">
            <div className="flex flex-wrap items-center justify-between gap-10">
              <div className="w-full max-w-[455px]">
                <h3 className="mb-3 text-heading-6 font-semibold text-dark-mode-heading">Subscribe to Newsletter</h3>
                <p className="text-dark-mode-body">Provide your email to get email notifications when we launch new products or publish new articles.</p>
              </div>

              <div className="w-full max-w-[494px]">
                <form>
                  <div className="flex items-center gap-5">
                    <div className="w-full max-w-[350px]">
                      <input
                        id="email"
                        required
                        placeholder="Enter your Email"
                        className="w-full rounded-md border border-dark-mode-border bg-dark-mode-input px-5 py-3.5 outline-none placeholder:text-dark-mode-placeholder focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-mode-focus/20"
                        type="email"
                        name="email"
                      />
                    </div>
                    <Button className="flex items-center justify-center rounded-md bg-dark-mode-button px-6 py-[25px] font-medium text-white transition-all duration-300 ease-linear hover:opacity-90 dark:border-white dark:border-2 dark:hover:bg-black">Subscribe</Button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogPost;