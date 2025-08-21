import { PixelSeparator } from "@/components/pixel-separator";
import { BlogCard } from "@/components/blog-card";

// Sample blog data
const blogPosts = [
  {
    title: "The Rise of JAMstack Architecture in Modern Web Development",
    excerpt: "Explores the modern architectural approach revolutionizing web development.",
    slug: "rise-of-JAMstack-architecture",
    date: new Date("2023-05-12"),
    imageUrl: "https://codeneos.com/public/assets/images/blog/blogimage_1721641897.jpg",
    readTime: 6
  },
  {
    title: "The Evolution of CSS: From Stylesheets to Component Systems",
    excerpt: "Traces CSS from simple stylesheets to powerful component systems.",
    slug: "evolution-of-CSS",
    date: new Date("2023-06-08"),
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E12AQHhsXdAyoX7aA/article-cover_image-shrink_720_1280/B4EZZTkZwmHMAI-/0/1745158864388?e=1761177600&v=beta&t=-VtGpau42us20uTRCoDeA-lyOyzgpfhjsJi_LKUGM1M",
    readTime: 8
  },
  {
    title: "The JavaScript Framework Wars: Choosing the Right Tool in 2023",
    excerpt: "Helps navigate the complex landscape of JS frameworks.",
    slug: "javaScript-framework-wars",
    date: new Date("2023-07-03"),
    imageUrl: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*iDHzfkfNGB-_fwbkPfZhZg.png",
    readTime: 7
  },
  {
    title: "Full-Stack Development: Bridging Frontend and Backend Expertise",
    excerpt: "Discusses the bridging of frontend and backend expertise.",
    slug: "full-stack-development",
    date: new Date("2023-08-15"),
    imageUrl: "https://www.launchidea.in/_next/image?url=https%3A%2F%2Fadmin.launchidea.in%2Ftemp-file%2Fc4da58150c354d34689b2b80d8ca238e35e020fd84bb0567253615701e9fa190%3Ffilename%3D1741691261White%252Band%252BBlue%252BProfessional%252BModern%252BTechnology%252BPitch%252BDeck%252BPresentation%252B%2525282%252529.webp&w=1920&q=75",
    readTime: 9
  },
  {
    title: "The Mobile-First Revolution: Responsive Design in the Modern Era",
    excerpt: "Covers responsive design in the modern era.",
    slug: "mobile-first-revolution",
    date: new Date("2023-09-22"),
    imageUrl: "https://www.finbar.co.za/wp-content/uploads/2023/09/Responsive-Web-Design-The-Importance-of.png.webp",
    readTime: 6
  },
  {
    title: "Web Performance Optimization: Building Lightning-Fast Applications",
    excerpt: "Focuses on building lightning-fast applications.",
    slug: "web-performance-optimization",
    date: new Date("2023-10-18"),
    imageUrl: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2025/03/Horizons_tutorials-2-1-1536x864.png",
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
