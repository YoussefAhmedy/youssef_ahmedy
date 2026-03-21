import Image from "next/image";
import Link from "next/link";
import { PixelSeparator } from "@/components/pixel-separator";
import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample blog data (in a real app, this would come from a database)
const blogPosts = {
  "rise-of-JAMstack-architecture": {
    title: "The Rise of JAMstack Architecture in Modern Web Development",
    content: `
      JAMstack (JavaScript, APIs, and Markup) has revolutionized how we approach web development. What began as a simple concept has evolved into a comprehensive architecture that's reshaping the digital landscape.

      The shift toward JAMstack isn't just about performance – it's about fundamentally rethinking how we build and deploy web applications. By decoupling the frontend from the backend, developers can create faster, more secure, and more scalable websites.

      Modern JAMstack development combines static site generation with dynamic functionality through APIs. This hybrid approach delivers the speed of static sites with the interactivity users expect from modern web applications.

      Key benefits of JAMstack architecture :

      1. Enhanced Performance 
      2. Improved Security 
      3. Better Developer Experience 
      4. Scalability

      The future of JAMstack looks bright as more teams adopt this architecture for everything from simple blogs to complex enterprise applications.
    `,
    date: new Date("2023-05-12"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/f_auto,q_auto/Gemini_Generated_Image_1_mrmu9b",
    readTime: 6
  },
   "evolution-of-CSS": {
    title: "The Evolution of CSS: From Stylesheets to Component Systems",
    content: `
      CSS has transformed dramatically since its inception in 1996. What started as a simple styling language has evolved into a powerful system for creating complex, responsive, and maintainable user interfaces.
     
      The introduction of preprocessors like Sass and Less marked the first major evolution, bringing variables, mixins, and nested rules to CSS. This was followed by the revolutionary concept of CSS-in-JS, which fundamentally changed how we think about styling in component-based applications.

      Modern CSS development embraces utility-first frameworks like Tailwind CSS alongside component-based styling systems. This approach allows developers to build consistent design systems while maintaining flexibility and performance.

      The latest developments in CSS include :

      1. CSS Grid and Flexbox mastery
      2. Custom Properties (CSS Variables)
      3. Container Queries
      4. CSS Modules and Styled Components

      Looking ahead, CSS continues to evolve with new features like cascade layers and advanced color functions, making it more powerful than ever.
    `,
    date: new Date("2023-06-08"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/f_auto,q_auto/Gemini_Generated_Image_2_seyddh",
    readTime: 8
  },
   "javaScript-framework-wars": {
    title: "The JavaScript Framework Wars: Choosing the Right Tool in 2023",
    content: `
      The JavaScript ecosystem has exploded with frameworks and libraries, each promising to solve different problems in web development. Navigating this landscape requires understanding not just what these tools do, but when and why to use them.

      React continues to dominate the market with its component-based architecture and vast ecosystem. Vue.js offers a gentler learning curve while maintaining powerful features. Angular provides a comprehensive solution for enterprise applications with its opinionated structure.

      The emergence of newer frameworks like Svelte and SolidJS challenges traditional approaches with innovative compilation techniques and reactive systems. These tools represent the next evolution in frontend development.

      Choosing the right framework depends on several factors :

      1. Project Requirements
      2. Team Experience 
      3. Performance Needs
      4. Long-term Maintainability

      The key is understanding that there's no one-size-fits-all solution. Each framework excels in different scenarios, and the best choice depends on your specific context and goals.
    `,
    date: new Date("2023-07-03"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774012185/Gemini_Generated_Image_3_ugc5zg.png",
    readTime: 7
  },
   "full-stack-development": {
    title: "Full-Stack Development: Bridging Frontend and Backend Expertise",
    content: `
      Full-stack development has become essential in modern web development. The ability to work across the entire technology stack – from database design to user interface implementation – creates more versatile and valuable developers.

      The traditional separation between frontend and backend development is blurring as technologies like Node.js enable JavaScript everywhere, and frameworks like Next.js provide full-stack capabilities out of the box.

      Modern full-stack developers need to understand database design, API development, server management, and client-side technologies. This breadth of knowledge enables them to make better architectural decisions and optimize applications holistically.

      Essential skills for full-stack development include :

      1. Database Design and Management
      2. API Development and Integration
      3. Frontend Framework Proficiency
      4. DevOps and Deployment

      The future favors developers who can think across the entire stack while maintaining depth in their areas of expertise. This hybrid approach leads to more cohesive and efficient web applications.
    `,
    date: new Date("2023-08-15"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013571/Gemini_Generated_Image_4_ov7bwo.png",
    readTime: 9
  },
   "mobile-first-revolution": {
    title: "The Mobile-First Revolution: Responsive Design in the Modern Era",
    content: `
      Pixel art has come a long way from its origins in early video games. What was once a technical limitation has evolved into a deliberate artistic choice that brings charm and nostalgia to modern web designs.

      The resurgence of pixel art in contemporary web design isn't just about nostalgia – it's about making a bold statement. In an era of high-resolution displays and photorealistic graphics, pixel art stands out by embracing its digital roots.

      Modern pixel art in web design often combines retro aesthetics with contemporary design principles. This fusion creates unique experiences that feel both familiar and fresh.

      Key principles of mobile-first development :

      1. Responsive Scaling
      2. Color Theory Application
      3. Animation Integration
      4. User Interface Enhancement

      The future of pixel art in web design looks promising as more designers discover ways to incorporate this style into modern projects.
    `,
    date: new Date("2023-09-22"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013687/Gemini_Generated_Image_5_pj1ew5.png",
    readTime: 6
  },
  "web-performance-optimization": {
    title: "Web Performance Optimization: Building Lightning-Fast Applications",
    content: `
      Web performance has become a critical factor in user experience and business success. Users expect instant loading times, and search engines reward fast websites with better rankings.

      Performance optimization requires a holistic approach, considering everything from server response times to client-side rendering efficiency. Modern web applications must balance rich functionality with lightning-fast performance.

      The tools and techniques for performance optimization have evolved significantly. Code splitting, lazy loading, service workers, and edge computing enable developers to deliver fast experiences even with complex applications.
      
      Essential performance optimization strategies :

      1. Progressive Enhancement
      2. Touch-Friendly Interfaces 
      3. Performance Optimization
      4. Content Prioritization
      
      As devices continue to diversify, mobile-first thinking ensures our applications remain accessible and usable regardless of screen size or input method.
    `,
    date: new Date("2023-10-18"),
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013953/Gemini_Generated_Image_6_ohm1cr.png",
    readTime: 8
  }
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/blog">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-grid min-h-screen">
      <article className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Button asChild variant="outline" className="pixel-button mb-8">
            <Link href="/blog" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </Button>

          <div>
            <h1 className="text-[11px] sm:text-base md:text-xl lg:text-2xl font-bold mb-6 break-words leading-loose">{post.title}</h1>
            
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>{post.date.toLocaleDateString()}</span>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>

            <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full mb-8 overflow-hidden">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <div className="prose prose-lg dark:prose-invert mt-8 space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
