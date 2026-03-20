"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

/* NavMenu uses lucide-react icons inside framer-motion — their SVG paths
   differ between server and client, causing hydration mismatches.
   Rendering client-only eliminates all 5 hydration errors. */
const NavMenu = dynamic(
  () => import("@/components/nav-menu").then((mod) => mod.NavMenu),
  { ssr: false, loading: () => <div className="h-14 w-[520px]" /> }
);

export function PixelHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-2 bg-background/95 backdrop-blur-sm shadow-md border-b border-border"
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="flex items-center"
        >
          <div className="flex items-center space-x-2">
            <div className="mcdonalds-arch"></div>
            <h1 className="text-xl md:text-2xl font-pixel tracking-tight">
              <span className="text-primary font-bold">Youssef</span>
              <span className="text-foreground">Ahmedy</span>
            </h1>
          </div>
        </motion.div>

        <div className="flex items-center space-x-4">
          <NavMenu />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
