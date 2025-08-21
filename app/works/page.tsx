import { PixelSeparator } from "@/components/pixel-separator";
import { WorksCard } from "@/components/works-card";

// Sample works data
const works = [
  {
    title: "Hospital Management System",
    description: "A comprehensive healthcare management solution for digitizing hospital operations.",
    slug: "hospital-management-system",
    imageUrl: "https://media.geeksforgeeks.org/wp-content/uploads/20240314153915/Hospital--management-system-project-team.webp",
    tags: ["Full-Stack", "Healthcare", "Management System", ".NET Core & API", "Database"]
  },
  {
    title: "IBSRA StoreHub",
    description: "A retail management system for store operations and inventory.",
    slug: "ibsra-storeHub",
    imageUrl: "https://www.appverticals.com/blog/wp-content/uploads/2021/09/Payment-Gateway.jpg",
    tags: ["Full-Stack", "E-commerce", "React", ".NET Core & API", "Business"]
  },
  {
    title: "IBSRA E-commerceHub",
    description: "A sophisticated custom poster printing platform with full e-commerce capabilities.",
    slug: "ibsra-e-commerceHub",
    imageUrl: "https://www.portotheme.com/wp-content/uploads/2023/10/ecommerce_-pos_-integration-2048x1448.jpg",
    tags: ["Back-End", "E-commerce", ".NET Core & API", "Custom Printing"]
  },
  {
    title: "Learnfy - IBSRA Educational Platform",
    description: "A comprehensive educational platform for online learning and course management.",
    slug: "learnfy-educational",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.5UR1gZMzwVIBER5U-OumOQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    tags: ["Full-Stack", "Mobile Development", "Education", ".NET Core & API"]
  },
  {
    title: "The New Portfolio",
    description: "A modern pixel portfolio website showcasing professional capabilities.",
    slug: "new-portfolio",
    imageUrl: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/9cb4f6190639649.65be1214bc755.jpg",
    tags: ["Full-Stack", "React", "TypeScript", "Web Design", "UI/UX", "Node.js"]
  },
  {
    title: "Clothing Brand Full-Stack Website",
    description: "A professional fashion e-commerce platform.",
    slug: "clothing-brand-website",
    imageUrl: "https://raw.githubusercontent.com/shabrina12/FullStack-Ecommerce-Clothing-Web/main/src/assets/header-section.png",
    tags: ["Full-Stack", "E-commerce", "React", "UI/UX", ".NET Core & API" ]
  }
];

export default function WorksPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Works</h1>
          <p className="text-xl max-w-2xl mx-auto">
            A collection of my projects, designs, and creative experiments.
          </p>
        </div>
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {works.map((work, index) => (
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
    </div>
  );
}
