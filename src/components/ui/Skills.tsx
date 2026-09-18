"use client"
import React from "react";
import { Section } from "./Section";
import { Badge } from "./badge";
import { ReactLogo } from "./icons/ReactLogo";
import { NextLogo } from "./icons/NextLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { motion } from "framer-motion";


export const Skills = () => {
  return(
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Compétences</Badge>
      <h2 className="scroll-m-2 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'aime travailler avec
      </h2>
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className = "w-fit"
            >
              <ReactLogo size={42} className="text-[#61dafb]" /> 
            </motion.div>
            <h3 className="mb-2 text-2xl font-semibold dark:text-white">React</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Mon framework principal pour créer des interfaces dynamiques et réutilisables.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className = "w-fit"
            >
              <NextLogo size={42} className="text-black dark:text-white transition-colors duration-300" />  
            </motion.div>
            <h3 className="mb-2 text-2xl font-semibold dark:text-white">Next</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Mon framework pour créer des applications web performantes et évolutives.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className = "w-fit"
            >
              <TailwindLogo size={42} className="text-white" />  
            </motion.div>
            <h3 className="mb-2 text-2xl font-semibold dark:text-white">Tailwind CSS</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Mon framework de styles pour créer des interfaces modernes et responsives.
            </p>
          </div>
        </div>

    </Section>
  )
}
