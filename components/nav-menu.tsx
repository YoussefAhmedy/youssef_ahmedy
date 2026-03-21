"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gamepad2Icon,
  HomeIcon,
  FileTextIcon,
  BriefcaseIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

const navItems = [
  { path: "/", name: "Home", icon: <HomeIcon size={18} /> },
  { path: "/blog", name: "Blog", icon: <FileTextIcon size={18} /> },
  { path: "/works", name: "Works", icon: <BriefcaseIcon size={18} /> },
  { path: "/about", name: "About", icon: <UserIcon size={18} /> },
];

const allNavItems = [
  ...navItems,
  {
    path: "https://github.com",
    name: "Play",
    icon: <Gamepad2Icon size={18} />,
    external: true,
  },
];

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.2, type: "spring" as const, stiffness: 100 },
  }),
};

export function NavMenu() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop nav (md and up) ─────────────────────────────────── */}
      <nav className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href={item.path}
              className={cn(
                "pixel-button rounded-none flex flex-col items-center justify-center px-3 py-2 h-14 w-20 lg:w-24",
                pathname === item.path
                  ? "bg-primary text-foreground dark:bg-primary dark:text-foreground border-foreground"
                  : "bg-background dark:bg-secondary border-foreground hover:bg-primary/20 dark:hover:bg-primary/30"
              )}
            >
              <span className="mb-1">{item.icon}</span>
              <span className="text-xs lg:text-sm font-bold">{item.name}</span>
            </Link>
          </motion.div>
        ))}
        <motion.div
          custom={navItems.length}
          initial="hidden"
          animate="visible"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button rounded-none flex flex-col items-center justify-center px-3 py-2 h-14 w-20 lg:w-24 bg-background dark:bg-secondary border-foreground hover:bg-primary/20 dark:hover:bg-primary/30"
          >
            <span className="mb-1"><Gamepad2Icon size={18} /></span>
            <span className="text-xs lg:text-sm font-bold">Play</span>
          </Link>
        </motion.div>
      </nav>

      {/* ── Mobile hamburger button (below md) ─────────────────────── */}
      <button
        className="md:hidden pixel-button flex items-center justify-center w-10 h-10 border-2 border-foreground bg-background"
        onClick={() => setMobileOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={mobileOpen}
      >
        {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
      </button>

      {/* ── Mobile dropdown menu ────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-black/40 z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              key="menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="md:hidden fixed top-[60px] left-0 right-0 bg-background border-b-4 border-foreground z-50 py-4 px-4"
            >
              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto">
                {allNavItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {"external" in item && item.external ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pixel-button flex flex-col items-center justify-center py-3 w-full bg-background border-foreground hover:bg-primary/20"
                      >
                        <span className="mb-1">{item.icon}</span>
                        <span className="text-xs font-bold">{item.name}</span>
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        className={cn(
                          "pixel-button flex flex-col items-center justify-center py-3 w-full",
                          pathname === item.path
                            ? "bg-primary text-foreground border-foreground"
                            : "bg-background border-foreground hover:bg-primary/20"
                        )}
                      >
                        <span className="mb-1">{item.icon}</span>
                        <span className="text-xs font-bold">{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
