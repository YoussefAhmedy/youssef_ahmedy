import Image from "next/image";
import { PixelSeparator } from "@/components/pixel-separator";
import { AboutSection } from "@/components/about-section";

export default function AboutPage() {
  return (
    <div className="pixel-grid min-h-screen">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get to know the person behind the pixels.
          </p>
        </div>
        
        <PixelSeparator />
        
        <AboutSection />
        
        <PixelSeparator />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">My Journey</h2>
            
            <p className="text-lg">
              My passion for web development grew from the versatility of the .NET framework, where I discovered the power to build secure, scalable, and high-performance applications.
            </p>
            
            <p className="text-lg">
              I specialize in Full-Stack solutions, blending robust Back-end architectures with seamless, user-friendly Front-end experiences.
            </p>
            
            <p className="text-lg">
              For me, development is more than code — it’s about crafting digital products that connect, inspire, and make a lasting impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://i.pinimg.com/1200x/ac/1e/8c/ac1e8cab799579ec33e604fb3540387a.jpg"
                alt="Working on designs"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Coding session"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Design workshop"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
            
            <div className="relative h-48 pixel-card overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Speaking at conference"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
