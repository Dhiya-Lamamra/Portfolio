"use client";

import { Header } from "@/components/ui/Header";
import { Hero } from "@/components/ui/Hero";
import { Skills } from "@/components/ui/Skills";
import { Spacing } from "@/components/ui/Spacing";
import { Status } from "@/components/ui/Status";
import Image from "next/image";
import { Skills2 } from "@/components/ui/Skills2";
import { Footer } from "@/components/ui/Footer";
import { motion, Variants } from "framer-motion";
import { ContactForm } from "@/components/ui/ContactForm";  
import { ContactSection } from "@/components/ui/ContactSection";

// Animation en Cascade
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Délai
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut"  } }, 

};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header/>

      <Spacing height={100} />


      <motion.div
       variants={itemVariants}
       initial="hidden"
       animate="show"
      >
      
      <Hero/>
      </motion.div>

      <Spacing height={64} />

      <motion.div
       variants={itemVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true , margin: "-100px" }}
      >
        <Status/>
      </motion.div>

      <Spacing height={64} />

      <motion.div
       variants={itemVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true , margin: "-100px" }}
      >
        <Skills/> 
      </motion.div>

      <Spacing height={64} />

      <motion.div
       variants={itemVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true , margin: "-100px" }}
      >
        <Skills2/>
      </motion.div>

      <Spacing height={64} />

      <motion.div
       variants={itemVariants}
       initial="hidden"
       whileInView="show"
       viewport={{ once: true , margin: "-100px" }}
      >
        <ContactSection/>
      </motion.div>


        <Spacing height={100} />

      <Footer/>

    </main>
  );
}
