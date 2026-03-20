import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";

// Sample blog data
const blogPosts = [
  {
    title: "The Rise of JAMstack Architecture in Modern Web Development",
    excerpt: "Explores the modern architectural approach revolutionizing web development.",
    slug: "rise-of-JAMstack-architecture",
    date: new Date("2023-05-12"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/f_auto,q_auto/Gemini_Generated_Image_1_mrmu9b",
    readTime: 6
  },
  {
    title: "The Evolution of CSS: From Stylesheets to Component Systems",
    excerpt: "Traces CSS from simple stylesheets to powerful component systems.",
    slug: "evolution-of-CSS",
    date: new Date("2023-06-08"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/f_auto,q_auto/Gemini_Generated_Image_2_seyddh",
    readTime: 8
  },
  {
    title: "The JavaScript Framework Wars: Choosing the Right Tool in 2023",
    excerpt: "Helps navigate the complex landscape of JS frameworks.",
    slug: "javaScript-framework-wars",
    date: new Date("2023-07-03"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774012185/Gemini_Generated_Image_3_ugc5zg.png",
    readTime: 7
  },
  {
    title: "Full-Stack Development: Bridging Frontend and Backend Expertise",
    excerpt: "Discusses the bridging of frontend and backend expertise.",
    slug: "full-stack-development",
    date: new Date("2023-08-15"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013571/Gemini_Generated_Image_4_ov7bwo.png",
    readTime: 9
  },
  {
    title: "The Mobile-First Revolution: Responsive Design in the Modern Era",
    excerpt: "Covers responsive design in the modern era.",
    slug: "mobile-first-revolution",
    date: new Date("2023-09-22"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013687/Gemini_Generated_Image_5_pj1ew5.png",
    readTime: 6
  },
  {
    title: "Web Performance Optimization: Building Lightning-Fast Applications",
    excerpt: "Focuses on building lightning-fast applications.",
    slug: "web-performance-optimization",
    date: new Date("2023-10-18"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013953/Gemini_Generated_Image_6_ohm1cr.png",
    readTime: 8
  }
];

export default function BlogPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Thoughts, stories, and ideas about problem solving, web development, and creative coding.
          </p>
        </div>
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {blogPosts.map((post, index) => (
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
