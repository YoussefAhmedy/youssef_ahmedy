"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function PixelHero() {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-24 md:pt-32 md:pb-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-w-0">

        {/* Left column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 min-w-0 overflow-hidden"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="px-4 py-2 bg-primary border-2 border-black inline-block"
            >
              <p className="text-black font-bold">Welcome to my pixel world</p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight min-w-0 overflow-hidden"
              style={{ overflowWrap: "break-word", wordBreak: "break-word" }}
            >
              Crafting Digital Experiences
            </motion.h1>

            {/* ✦ Pixel-Perfect — desktop only, sits below the main heading */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="hidden sm:flex items-center gap-2 text-primary text-base md:text-lg font-bold -mt-2"
            >
              <span>✦</span>
              <span>Pixel-Perfect</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl"
            >
              I architect and develop robust full-stack applications with
              microservices design, bringing scalable and secure solutions to
              complex enterprise environments.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild className="pixel-button text-base sm:text-lg py-5 sm:py-6 rounded-none w-full sm:w-auto">
              <Link href="/works">
                View My Work
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="pixel-button bg-white text-base sm:text-lg py-5 sm:py-6 rounded-none w-full sm:w-auto"
            >
              <Link href="/blog">Read My Blog</Link>
            </Button>
          </motion.div>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mt-6 sm:mt-0 pt-8 pb-10 sm:pt-0 sm:pb-0"
        >
          <div className="relative h-[260px] sm:h-[340px] md:h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-black bg-primary/20 z-0" />
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dkh59ytfc/image/upload/v1774014788/Gemini_Generated_Image_sss_j66j3g.png"
                alt="Pixel Art Portfolio"
                fill
                className="object-cover"
              />
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="absolute bottom-3 left-3 z-10"
            >
              <div className="bg-white dark:bg-background dark:text-foreground border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-base sm:text-lg font-bold">3+ Years Experience</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="absolute top-3 right-3 z-10"
            >
              <div className="bg-accent border-4 border-black p-3 sm:p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-base sm:text-lg font-bold text-white">15+ Projects</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
