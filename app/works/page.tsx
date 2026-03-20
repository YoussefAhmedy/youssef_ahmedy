import { PixelSeparator } from "@/components/pixel-separator";
import { WorksCard } from "@/components/works-card";

// Sample works data
const works = [
  {
    title: "Hospital Management System",
    description: "A comprehensive healthcare management solution for digitizing hospital operations.",
    slug: "hospital-management-system",
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013741/Gemini_Generated_Image_A1_fkjfs9.png",
    tags: ["Full-Stack", "Healthcare", "Management System", ".NET Core & API", "Database"]
  },
  {
    title: "Learnfy - IBSRA Educational Platform",
    description: "A comprehensive educational platform for online learning and course management.",
    slug: "learnfy-educational",
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014251/Gemini_Generated_Image_D_aneamo.png",
    tags: ["Full-Stack", "Mobile Development", "Education", ".NET Core & API"]
  },
  {
    title: "The Pixel Portfolio",
    description: "A modern pixel portfolio website showcasing professional capabilities.",
    slug: "new-portfolio",
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014271/Gemini_Generated_Image_E1_xxwjn2.png",
    tags: ["Full-Stack", "React", "TypeScript", "Web Design", "UI/UX", "Node.js"]
  },
  {
    title: "IBSRA E-commerceHub",
    description: "A sophisticated custom poster printing platform with full e-commerce capabilities.",
    slug: "ibsra-e-commerceHub",
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014198/Gemini_Generated_Image_C1_kfyhqv.png",
    tags: ["Back-End", "E-commerce", ".NET Core & API", "Custom Printing"]
  },
  {
    title: "IBSRA StoreHub",
    description: "A retail management system for store operations and inventory.",
    slug: "ibsra-storeHub",
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014149/Gemini_Generated_Image_B_gtgluz.png",
    tags: ["Full-Stack", "E-commerce", "React", ".NET Core & API", "Business"]
  },
  {
    title: "Clothing Brand Full-Stack Website",
    description: "A professional fashion e-commerce platform.",
    slug: "clothing-brand-website",
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014391/Gemini_Generated_Image_F1_gzgkzf.png",
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
