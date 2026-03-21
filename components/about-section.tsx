"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BrainCircuitIcon, CodeIcon, LayoutIcon, DatabaseIcon, CloudIcon } from "lucide-react";

const TOTAL_BLOCKS = 12;

function getRank(blocks: number) {
  if (blocks >= 12) return { label: "MASTER",   color: "text-yellow-400",  bg: "bg-yellow-400" };
  if (blocks >= 11) return { label: "EXPERT",   color: "text-blue-400",   bg: "bg-blue-400"   };
  if (blocks >= 10) return { label: "ADVANCED", color: "text-green-400",  bg: "bg-green-400"  };
  if (blocks >= 9)  return { label: "SKILLED",  color: "text-purple-400", bg: "bg-purple-400" };
  return               { label: "JUNIOR",   color: "text-gray-400",   bg: "bg-gray-400"   };
}

const skills = [
  { name: "Back-End Development",  icon: <CodeIcon className="h-5 w-5" />,          blocks: 11, xp: "11,420 XP" },
  { name: "Front-End Development", icon: <LayoutIcon className="h-5 w-5" />,         blocks: 10, xp: "9,850 XP"  },
  { name: "Database Management",   icon: <DatabaseIcon className="h-5 w-5" />,       blocks: 11, xp: "10,700 XP" },
  { name: "Cloud & DevOps",        icon: <CloudIcon className="h-5 w-5" />,          blocks: 9,  xp: "8,340 XP"  },
  { name: "AI Integration",        icon: <BrainCircuitIcon className="h-5 w-5" />,   blocks: 9,  xp: "7,660 XP"  },
];

export function AboutSection() {
  const skillsRef = useRef(null);
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.1 });

  return (
    <section className="container mx-auto px-4 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-4 border-4 border-primary z-0"></div>
            <div className="absolute inset-0 pixel-card overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dkh59ytfc/image/upload/v1774024068/Gemini_Generated_Image_Abo_zis2ag.png"
                alt="Developer portrait"
                fill
                className="object-cover"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">Hi, I'm Youssef</h3>

          <p className="text-lg">
            I'm a motivated .NET Full-Stack Web Developer with a passion for creating scalable, secure, and maintainable web applications. With hands-on experience in building robust systems, I specialize in designing RESTful APIs and delivering dynamic user experiences.
          </p>

          <p className="text-lg">
            My background in both backend and frontend development allows me to create cohesive solutions from concept to implementation. I'm particularly skilled in ASP.NET Core architecture, microservices design, and modern JavaScript frameworks.
          </p>

          <div className="space-y-4 mt-8" ref={skillsRef}>
            <h4 className="text-xl font-bold flex items-center gap-2">
              <span className="inline-block w-3 h-3 bg-primary align-middle" />
              My Skills
              <span className="inline-block w-3 h-3 bg-primary align-middle" />
            </h4>

            <div className="space-y-3">
              {skills.map((skill, i) => {
                const rank = getRank(skill.blocks);
                return (
                  <div key={skill.name} className="border-2 border-black bg-white/5 dark:bg-black/20 p-3 space-y-2">
                    {/* Row 1: icon + name + rank badge + XP */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-primary text-black shrink-0">
                          {skill.icon}
                        </div>
                        <span className="font-bold text-sm leading-tight">{skill.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-[10px] font-bold tracking-widest border px-1.5 py-0.5 ${rank.color} border-current`}>
                          {rank.label}
                        </span>
                        <span className="text-[10px] font-mono text-muted-foreground">{skill.xp}</span>
                      </div>
                    </div>

                    {/* Row 2: pixel XP blocks */}
                    <div className="flex gap-[3px] items-center">
                      {Array.from({ length: TOTAL_BLOCKS }).map((_, bi) => (
                        <motion.div
                          key={bi}
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={skillsInView
                            ? { opacity: 1, scaleY: 1 }
                            : { opacity: 0, scaleY: 0 }}
                          transition={{ duration: 0.2, delay: 0.3 + i * 0.1 + bi * 0.04 }}
                          className={`flex-1 h-4 border border-black/30 ${
                            bi < skill.blocks ? rank.bg : "bg-gray-200 dark:bg-gray-700"
                          }`}
                          style={{ transformOrigin: "bottom" }}
                        />
                      ))}
                      <span className="ml-1 text-[10px] font-mono font-bold text-muted-foreground shrink-0">
                        LVL {skill.blocks}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
