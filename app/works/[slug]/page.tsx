import Image from "next/image";
import Link from "next/link";
import { PixelSeparator } from "@/components/pixel-separator";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample works data (in a real app, this would come from a database)
const works = {
  "hospital-management-system": {
    title: "Hospital Management System",
    description: "A comprehensive healthcare management solution for digitizing hospital operations.",
    content: `
      Hospital Management System is a comprehensive healthcare management solution designed to streamline hospital operations while maintaining the efficiency of modern healthcare delivery systems.

      The project combines traditional hospital management workflows with contemporary web technologies to create an engaging administrative experience that appeals to both healthcare professionals and hospital administrators.

      Key Features:

      1. Patient Registration
      2. Appointment Scheduling
      3. Medical Records Management
      4. Staff Management
      5. Billing & Insurance
      6. Inventory Contro

      Technical Stack:

      - Frontend technologies for user interface components
      - Database management for patient records
      - Authentication system for secure access
      - Responsive design for desktop and mobile
      - Data validation for medical information integrity
    `,
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774013741/Gemini_Generated_Image_A1_fkjfs9.png",
    tags: ["Full-Stack", "Healthcare", "Management System", ".NET Core & API", "Database"],
    link: "https://github.com/YoussefAhmedy/HospitalManagement"
  },
  "ibsra-storeHub": {
    title: "IBSRA StoreHub",
    description: "A retail management system for store operations and inventory.",
    content: `
      IBSRA StoreHub is a comprehensive e-commerce and store management platform designed to provide modern retail solutions while maintaining the efficiency of traditional business operations.

      The project combines retail management principles with contemporary web development practices to create an engaging shopping and management experience for both store owners and customers.

      Key Features:

      1. Product Catalog Management
      2. Inventory Tracking
      3. Order Processing 
      4. Customer Management 
      5. Sales Analytics
      6. Multi-store Support

      Technical Stack:

      - Modern frontend framework for user interface
      - Backend API for store operations
      - Database for product and customer data
      - Payment gateway integration
      - Responsive design for cross-platform compatibility
    `,
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014149/Gemini_Generated_Image_B_gtgluz.png",
    tags: ["Full-Stack", "E-commerce", "React", ".NET Core & API", "Business"],
    link: "https://github.com/YoussefAhmedy/IBSRA-StoreHub"
  },
  "ibsra-e-commerceHub": {
    title: "IBSRA E-commerceHub",
    description: "A sophisticated custom poster printing platform with full e-commerce capabilities.",
    content: `
      IBSRA E-commerce Hub is a comprehensive, enterprise-grade e-commerce API platform built with .NET 8 and modern architectural patterns. The project specializes in custom poster creation and order management, combining robust backend services with scalable design principles to deliver a professional e-commerce solution.

      The project implements clean architecture principles with comprehensive authentication, order processing, and custom product management capabilities. It features advanced security measures, performance optimizations, and production-ready deployment configurations suitable for both small businesses and enterprise-level operations.

      Key Features:

      1. JWT Authentication & Authorization 
      2. Custom Poster Design & Pricing
      3. Advanced Order Management
      4. Product Catalog Management 
      5. Admin Dashboard Integration
      6. Health Monitoring & Diagnostics
      7. Rate Limiting & Security Headers
      8. Comprehensive API Documentation

      Technical Stack:

      - .NET 8 SDK - Modern framework with latest features
      - Entity Framework Core - Advanced ORM with SQL Server
      - JWT Bearer Authentication - Secure token-based auth
      - AutoMapper - Object-to-object mapping
      - BCrypt.Net - Password hashing and security
      - Swagger/OpenAPI - Interactive API documentation
      - Serilog - Structured logging framework
      - Docker & Azure - Containerization and cloud deployment
      - Memory Caching - Performance optimization
      - Rate Limiting - API protection and throttling
    `,
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014198/Gemini_Generated_Image_C1_kfyhqv.png",
    tags: ["Back-End", "E-commerce", ".NET Core & API", "Custom Printing"],
    link: "https://github.com/YoussefAhmedy/IBSRA-E.commerceHub"
  },
  "learnfy-educational": {
    title: "Learnfy - IBSRA Educational Platform",
    description: "A comprehensive educational platform for online learning and course management.",
    content: `
      Learnfy is a full-stack educational platform designed to deliver comprehensive online learning experiences while maintaining modern educational technology standards.
      
      The project combines traditional learning methodologies with contemporary web technologies to create an engaging educational experience that appeals to both students and educators.
      
      Key Features:

      1. Course Management 
      2. Student Enrollment
      3. Interactive Learning Materials
      4. Progress Tracking
      5. Assessment Tools
      6. Communication Features

      Technical Stack:

      - React/Angular for frontend components
      - Node.js/Express for backend services
      - Database for course and user data
      - Video streaming for educational content
      - Responsive design for mobile learning
    `,
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014251/Gemini_Generated_Image_D_aneamo.png",
    tags: ["Full-Stack", "Mobile Development", "Education", ".NET Core & API"],
    link: "https://github.com/YoussefAhmedy/learnfy"
  },
  "new-portfolio": {
    title: "The Pixel Portfolio",
    description: "A modern pixel portfolio website showcasing professional capabilities.",
    content: `
      The New Portfolio is a modern personal portfolio website designed to showcase professional work and achievements while maintaining contemporary web design standards.

      The project combines personal branding principles with modern web development practices to create an engaging portfolio experience that effectively presents professional capabilities.
      
      Key Features:

      1. Project Showcase 
      2. Skills Presentation
      3. Contact Information
      4. Resume/CV Display 
      5. Responsive Design
      6. Interactive Elements

      Technical Stack:

      - Modern JavaScript framework for interactivity
      - CSS3/SCSS for advanced styling
      - Responsive grid systems
      - Animation libraries for smooth transitions
      - Optimized performance for fast loading
    `,
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014271/Gemini_Generated_Image_E1_xxwjn2.png",
    tags: ["Full-Stack", "React", "TypeScript", "Web Design", "UI/UX", "Node.js"],
    link: "https://github.com/YoussefAhmedy/The_Pixel_Portfolio"
  },
  "clothing-brand-website": {
    title: "Clothing Brand Full-Stack Website",
    description: "A professional fashion e-commerce platform.",
    content: `
      A professional full-stack web application designed to showcase and sell fashion products online, combining a sleek user interface with powerful backend technologies to provide a seamless shopping experience for a modern clothing brand.
      
      The project integrates fashion retail principles with contemporary e-commerce development to create an engaging shopping experience that appeals to modern fashion consumers and brand enthusiasts.

      Key Features:

      1. Product Catalog
      2. Shopping Cart 
      3. User Authentication
      4. Order Management
      5. Payment Processing 
      6. Brand Showcase

      Technical Stack:

      - React/Vue.js for dynamic frontend
      - .NET Framework for backend services
      - MongoDB/T-SQL for product data
      - Stripe/PayPal for payment processing
      - Responsive design for mobile shopping
    `,
    imageUrl: "https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014391/Gemini_Generated_Image_F1_gzgkzf.png",
    tags: ["Full-Stack", "E-commerce", "React", "UI/UX", ".NET Core & API"],
    link: "https://github.com/YoussefAhmedy/Build-a-Full-Stack-Website-for-a-Clothing-Brand"
  }
};

export function generateStaticParams() {
  return Object.keys(works).map((slug) => ({
    slug,
  }));
}

export default function WorksPost({ params }: { params: { slug: string } }) {
  const work = works[params.slug as keyof typeof works];

  if (!work) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild variant="outline" className="pixel-button">
            <Link href="/works">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Works
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
            <Link href="/works" className="flex items-center">
              <ArrowLeftIcon className="mr-2 h-5 w-5" />
              Back to Works
            </Link>
          </Button>

          <div>
            <h1 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-bold mb-6 break-words leading-loose">{work.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {work.tags.map((tag) => (
                <span 
                  key={tag}
                  className="bg-primary text-foreground px-3 py-1 text-sm font-medium border-2 border-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="relative h-[220px] sm:h-[300px] md:h-[400px] w-full mb-8">
              <div className="absolute inset-4 border-4 border-foreground bg-primary/20 z-0"></div>
              <div className="absolute inset-0 pixel-card overflow-hidden">
                <Image
                  src={work.imageUrl}
                  alt={work.title}
                  fill
                  className="object-cover"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </div>

            <PixelSeparator />

            <div className="prose prose-lg dark:prose-invert mt-8 space-y-6">
              {work.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <PixelSeparator />

            <div className="mt-8 text-center">
              <Button asChild className="pixel-button text-lg py-6">
                <a href={work.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Visit Project
                  <ExternalLinkIcon className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
