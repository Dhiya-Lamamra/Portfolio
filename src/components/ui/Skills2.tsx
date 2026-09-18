"use client"
import React from "react";
import { Section } from "./Section";
import { Badge } from "./badge";
import { ReactLogo } from "./icons/ReactLogo";
import { NextLogo } from "./icons/NextLogo";
import { TailwindLogo } from "./icons/TailwindLogo";
import { motion } from "framer-motion";
import { Premiere } from "./icons/Premiere";
import { PhotoShop } from "./icons/PhotoShop";
import { AfterEffect } from "./icons/AfterEffect";
import { Figma } from "./icons/Figma";
import { useState } from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import Image from "next/image";

type ShowcaseType = "premiere" | "photoshop" | "aftereffect" | "figma" | null;

export const Skills2 = () => {
  const [showcase, setShowcase] = useState<ShowcaseType>(null);
  return(
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Autres compétences</Badge>
      <h2 className="scroll-m-2 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        J'aime aussi travailler avec
      </h2>
      
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className = "w-fit"
            >
              <Premiere size={42} className="text-[#61dafb]" /> 
            </motion.div>
            <h3 className="mb-2 text-2xl font-semibold dark:text-white">PremierePro</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Montage vidéo dynamique et gestion de rythme.            
            </p>
            <button 
            onClick={() => setShowcase("premiere")} 
            className="group text-sm text-primary hover:underline flex items-center gap-1">
              Ouvrir les projets <ArrowUpRight size={10} className="inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-125 transition-all duration-200"/>
            </button>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <motion.div
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className = "w-fit"
            >
              <PhotoShop size={42} className="text-white" />  
            </motion.div>
            <h3 className="mb-2 text-2xl font-semibold dark:text-white">PhotoShop</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Édition d'images et conception graphique.
            </p>
            <button 
            onClick={() => setShowcase("photoshop")} 
            className="group text-sm text-primary hover:underline flex items-center gap-1">
              Ouvrir les projets <ArrowUpRight size={10} className="inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-125 transition-all duration-200"/>  
            </button>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <motion.div
              animate={{ rotate: [-2,2,-2], y:[0,-2,0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className = "w-fit"
            >
              <AfterEffect size={42} className="text-white" />  
            </motion.div>
            <h3 className="mb-2 text-2xl font-semibold dark:text-white">After Effects</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Création d'effets visuels et animation.
            </p>
            <button 
            onClick={() => setShowcase("aftereffect")} 
            className="group text-sm text-primary hover:underline flex items-center gap-1">
              Ouvrir les projets <ArrowUpRight size={10} className="inline group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-125 transition-all duration-200"/>
            </button>
          </div>
        </div>
        {/*
        <div className="flex max-md:flex-col gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className = "w-fit"
            >
              <Figma size={42} className="text-[#61dafb]" /> 
            </motion.div>
            <h3 className="mb-2 text-2xl font-semibold dark:text-white">Figma</h3>
            <p className="text-sm text-muted-foreground dark:text-gray-400">
              Mon framework principal pour créer des interfaces dynamiques et réutilisables.
            </p>
          </div>
        </div>
        */}
        {showcase && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md  animate-in fade-in duration-200 w-full"
            onClick={() => setShowcase(null)}
          >
            <div
              className="bg-card border shadow-2xl rounded-2xl max-w-4xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}>
                <div className="p-4 border-b flex justify-between items-center bg-muted/30">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-semibold capitalize">
                      {showcase === "premiere" ? "Projets Premiere Pro" : showcase === "photoshop" ? "Projets PhotoShop" : "Projets After Effects"}
                    </h3>
                    <p className="text-xs text-muted-foreground">Aperçu de mes créations et compétences</p>
                  </div>
                </div>
                <div className="p-6 flex-1 overflow-y-auto bg-background min-h-[200px]">
                  {showcase === "premiere" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-medium text-red-500 uppercase tracking-wider">Montage video #1</p>
                        <div className="rounded-lg overflow-hidden border bg-black aspect-video">
                          <video controls className="w-full h-full object-cover">
                            <source src="/videos/DSvideo.mp4" type="video/mp4" />
                          </video>
                          
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-medium text-red-500 uppercase tracking-wider">Montage video #2</p>
                        <div className="rounded-lg overflow-hidden border bg-black aspect-video">
                          <video controls className="w-full h-full object-cover">
                            <source src="/videos/L'Origine des DEMONS dans DEmon Slayer.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  )}

                  {showcase === "photoshop" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-medium text-primary uppercase tracking-wider"> Miniature #1 </p>
                        <div className="relative rounded-lg overflow-hidden border bg-muted aspect-video group">
                          <Image src="/miniature1.jpg" alt="Photoshop Render 1" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" onError={(e)=>{e.currentTarget.style.opacity='0.4'}} />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-medium text-primary uppercase tracking-wider"> Miniature #2 </p>
                        <div className="relative rounded-lg overflow-hidden border bg-muted aspect-video group">
                          <Image src="/miniature2.jpg" alt="Photoshop Render 2" fill className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" onError={(e)=>{e.currentTarget.style.opacity='0.4'}} />
                        </div>
                      </div>
                    </div>
                  )}

                  {showcase === "aftereffect" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-medium text-purple-400 uppercase tracking-wider">Effets Spéciaux / VFX (Boucle)</p>
                        <div className="rounded-lg overflow-hidden border bg-black aspect-video">
                          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="/videos/ae_loop1.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-xs font-medium text-purple-400 uppercase tracking-wider">Motion Design (Boucle)</p>
                        <div className="rounded-lg overflow-hidden border bg-black aspect-video">
                          <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src="/videos/ae_loop2.mp4" type="video/mp4" />
                          </video>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
            </div>
          </div>
        )}
    </Section>
  )
}
