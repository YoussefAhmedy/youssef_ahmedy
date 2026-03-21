"use client";

import { motion } from "framer-motion";
import { TerminalIcon, ServerIcon, CloudIcon, DatabaseIcon } from "lucide-react";

const services = [
  {
    title: "Full-Stack Web Development",
    description: "Scalable web applications built with ASP.NET Core and React.js for enterprise-grade performance and security.",
    icon: <TerminalIcon className="h-10 w-10" />,
  },
  {
    title: "RESTful API Development",
    description: "Robust and secure APIs designed for seamless integration with front-end applications and third-party services.",
    icon: <ServerIcon className="h-10 w-10" />,
  },
  {
    title: "Microservices Architecture",
    description: "Containerized solutions with Docker and Kubernetes for high availability and horizontal scaling.",
    icon: <CloudIcon className="h-10 w-10" />,
  },
  {
    title: "Database Design & Optimization",
    description: "Efficient database solutions using SQL Server and Entity Framework Core for optimal data management.",
    icon: <DatabaseIcon className="h-10 w-10" />,
  },
];

export function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Services</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="pixel-card p-6 bg-white dark:bg-black"
          >
            <div className="p-4 bg-primary text-black mb-6 inline-block border-2 border-black">
              {service.icon}
            </div>
            
            <h3 className="text-base lg:text-lg font-bold mb-3 break-words leading-snug">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
