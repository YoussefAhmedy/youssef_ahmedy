import { PixelHero } from "@/components/pixel-hero";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";
import { WorksCard } from "@/components/works-card";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample data
const featuredPosts = [
  {
    title: "The Rise of JAMstack Architecture in Modern Web Development",
    excerpt:
      "Explores the modern architectural approach revolutionizing web development.",
    slug: "rise-of-JAMstack-architecture",
    date: new Date("2023-05-12"),
    imageUrl:
      "https://codeneos.com/public/assets/images/blog/blogimage_1721641897.jpg",
    readTime: 6,
  },
  {
    title: "The JavaScript Framework Wars: Choosing the Right Tool in 2023",
    excerpt: "Helps navigate the complex landscape of JS frameworks.",
    slug: "javaScript-framework-wars",
    date: new Date("2023-07-03"),
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*iDHzfkfNGB-_fwbkPfZhZg.png",
    readTime: 7,
  },
  {
    title: "Full-Stack Development: Bridging Frontend and Backend Expertise",
    excerpt: "Discusses the bridging of frontend and backend expertise.",
    slug: "full-stack-development",
    date: new Date("2023-08-15"),
    imageUrl:
      "https://www.launchidea.in/_next/image?url=https%3A%2F%2Fadmin.launchidea.in%2Ftemp-file%2Fc4da58150c354d34689b2b80d8ca238e35e020fd84bb0567253615701e9fa190%3Ffilename%3D1741691261White%252Band%252BBlue%252BProfessional%252BModern%252BTechnology%252BPitch%252BDeck%252BPresentation%252B%2525282%252529.webp&w=1920&q=75",
    readTime: 9,
  },
];

const featuredWorks = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive healthcare management solution for digitizing hospital operations.",
    slug: "hospital-management-system",
    imageUrl:
      "https://media.geeksforgeeks.org/wp-content/uploads/20240314153915/Hospital--management-system-project-team.webp",
    tags: [
      "Full-Stack",
      "Healthcare",
      "Management System",
      ".NET Core & API",
      "Database",
    ],
  },
  {
    title: "IBSRA StoreHub",
    description:
      "A retail management system for store operations and inventory.",
    slug: "ibsra-storeHub",
    imageUrl:
      "https://www.appverticals.com/blog/wp-content/uploads/2021/09/Payment-Gateway.jpg",
    tags: ["Full-Stack", "E-commerce", "React", ".NET Core & API", "Business"],
  },
];

export default function Home() {
  return (
    <div className="pixel-grid min-h-screen">
      <PixelHero />

      <PixelSeparator />

      <AboutSection />

      <PixelSeparator />

      <ServicesSection />

      <PixelSeparator />

      {/* Featured Works Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Works</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works" className="flex items-center">
              View All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredWorks.map((work, index) => (
            <WorksCard
              key={work.slug}
              title={work.title}
              description={work.description}
              slug={work.slug}
              imageUrl={work.imageUrl}
              tags={work.tags}
              index={index}
            />
          ))}
        </div>
      </section>

      <PixelSeparator />

      {/* Blog Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Articles</h2>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog" className="flex items-center">
              Read All
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              slug={post.slug}
              date={post.date}
              imageUrl={post.imageUrl}
              readTime={post.readTime}
              index={index}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
