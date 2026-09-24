"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { GmailIcon } from "./icons/GmailIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { GithubIcon } from "./icons/GithubIcon";
import { ETSIcon } from "./icons/ETSIcon";
import { X, Calendar, MapPin, GraduationCap, ArrowLeft,LibraryBig, FileText,ZoomIn} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type SpacingProps = {
  height: number;
};

type DocumentType ="diplome a Ahuntsic" | "ets" | "ID"| null;


const Code = ({className, ...props}: ComponentPropsWithoutRef<"span">) => {
  return(
    <span className={cn(
      "bg-muted/75 text-foreground font-mono border border-border/20 p-0.5 py-px transition-colors hover:bg-muted", 
      className)} 
    {...props}>
    </span>
    )
  }


export const Hero = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const [activeDoc,setActiveDoc] = useState<DocumentType>(null);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null); // gere le zoom de l'image 

  const toggleDoc = (docType: DocumentType) => {
  setActiveDoc((prev) => (prev === docType ? null : docType));
}
  return(
    <Section className="flex max-lg:flex-col item-start gap-8 md:gap-12 ">
      <div className="flex-3 flex flex-col gap-1.5">
        <h2 className="font-robot text-primary font-bold text-4xl">
          Dhiya-Eddine Lamamra
        </h2>
        <h3 className="font-robot text-2xl">Étudiant à l'ÉTS en génie Logiciel</h3>
        <p className="font-robot gap-6">
          Passionné par le développement de logiciels, je suis un étudiant en génie logiciel à l'<Link href="https://www.etsmtl.ca/programmes-formations/baccalaureat-genie-logiciel" target="_blank"><Code><ETSIcon size={12} className="inline"/>ÉTS</Code></Link>. 
          J'aime créer des applications web et mobiles qui résolvent des problèmes réels et améliorent la vie des utilisateurs. 
          Mon objectif est de devenir un développeur compétent et de contribuer à des projets innovants dans le domaine de la technologie. 
          J'utilise principalement <Link href ="mailto:lamamra.dhiya@gmail.com" ><Code><GmailIcon size={12} className = "inline"/>Gmail</Code></Link>
          pour les courriels professionnels, mais n'hésitez pas à me contacter via <Link href = "https://www.linkedin.com/in/dhiya-eddine-lamamra-421a28412/" target="_blank"><Code><LinkedInIcon size={12} className = "inline"/>LinkedIn</Code></Link> 
          ou <Link href = "https://github.com/Dhiya-Lamamra" target="_blank"><Code><GithubIcon size={12} className = "inline"/>GitHub</Code></Link> pour toute collaboration ou opportunité de stage.
        </p>
      </div>
      <div className="flex-2 max-w-150 flex justify-center lg:justify-center">
       {/* Conteneur principal avec le clic et le curseur */}
        <div className="relative group">
          <button
            type="button"
            aria-label="Agrandir la photo de profil"
            className="relative block w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 shadow-2xl shadow-black/40 dark:shadow-white/40"
            onClick={() => setIsOpen(true)}
          >
          {/* Contour haute visibilité (ring) */}
          <div className="absolute inset-0 z-10 rounded-full ring-2 ring-black/20 dark:ring-white/30 pointer-events-none" />
          
          {/* Image */}
        <Image 
          src="/photo.jpg"
          width={150}
          height={150}
          /* On utilise shadow-2xl et shadow-black/40 pour une ombre circulaire propre */
          className="w-full h-full object-cover object-[80%_15%] rounded-full" 
          style={{ filter: "brightness(1.20) contrast(1.04) saturate(0.96)", transform: "scale(1.03)" }}
          alt="Photo de profil de Dhiya-Eddine Lamamra"
        />
          </button>
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Cliquez pour agrandir
          </span> 
        </div>
      </div>
      {/* Fenêtre Premier Plan (Modal) */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-background/60 backdrop-blur-md animate-in fade-in duration-300 zoom-in-90"
          onClick={() => {
            setIsOpen(false);
            setActiveDoc(null);
          }}
        >
          {/*Document a gauche "Diplome a Ahuntsic"*/}
          <div className = "relative flex items-center justify-center">
            {activeDoc == 'diplome a Ahuntsic' && (
              <div className = "absolute right-[105%] hidden xl:block w-72 animate-in slide-in-from-right-5 fade-in duration-300">
                <div 
                  onClick={(e) => {
                    e.stopPropagation(); // Empêche de fermer en cliquant sur le document
                    setZoomedImg("/preuveAhuntsic.jpg"); // Ouvre l'image en plein écran
                  }}
                  className="bg-card border shadow-2xl rounded-xl p-2 cursor-zoom-in group relative hover:border-primary/40 transition-colors">
                  <p className="text-[10px] font-bold text-center uppercase mb-2 bg-muted py-1 rounded">Diplome Ahuntsic</p>
                  <Image 
                    src="/preuveAhuntsic.jpg"
                    alt="Diplome Ahuntsic" 
                    className="w-full h-auto rounded-lg group-hover: opaciity-90 transition-opacity"
                    width={300}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                </div>
              </div>
            )}
            {/*Carte centrale*/}
            <div 
              className="relative bg-card border shadow-2xl rounded-2xl p-8 max-w-md w-full flex flex-col items-center gap-6 animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()} // Empêche de fermer en cliquant sur la carte elle-même
            >

              {/* Photo en premier plan */}
            <Image
              src="/photo.jpg"
              /* shadow-md donne une profondeur légère, black/10 rend l'ombre très douce */
              className="w-[min(60vw,18rem)] h-[min(60vw,18rem)] rounded-full object-cover object-[80%_15%] shadow-2xl shadow-black/40 dark:shadow-white/40"
              style={{ filter: "brightness(1.20) contrast(1.04) saturate(0.96)", transform: "scale(1.03)" }}
              width={288}
              height={288}
              alt="Photo de profil de Dhiya-Eddine Lamamra"
            />

              {/* Informations détaillées */}
              <div className="text-center space-y-4 w-full">
                <div className="flex flex-col gap-3 pt-4 border-t text-left w-full">
                  {/* Item Date de Naissance (ID) */}
                  <div 
                  onClick={() => toggleDoc("ID")}
                  className={cn("flex items-center gap-3 text-sm cursor-pointer hover:text-primary transition-colors p-1 rounded", activeDoc === "ID" && "bg-primary/10 text-primary")}
                  >
                    <Calendar size={18} className="text-primary" />
                    <span>Né le 03 octobre 2004</span>
                    <FileText size={14} className="opacity-50" />
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <MapPin size={18} className="text-primary" />
                    <span>Montréal, Québec</span>
                  </div>
                  {/* Item Diplome a Ahuntsic */  }
                  <div 
                    onClick={() => toggleDoc("diplome a Ahuntsic")}
                    className={cn("flex items-center gap-3 text-sm cursor-pointer hover:text-primary transition-colors p-1 rounded", activeDoc === "diplome a Ahuntsic" && "bg-primary/10 text-primary")}
                  >
                    <GraduationCap size={18} className="text-primary" />
                    <span>Diplôme à Ahuntsic (Science de la nature)</span>
                    <FileText size={14} className="opacity-50" />
                  </div>
                  {/* Item ETS */  }
                  <div 
                    onClick={() => toggleDoc("ets")}
                    className={cn("flex items-center gap-3 text-sm cursor-pointer hover:text-primary transition-colors p-1 rounded", activeDoc === "ets" && "bg-primary/10 text-primary")}
                  >
                    <LibraryBig size={18} className="text-primary" />
                    <span>Étudiant à l'ÉTS (Génie Logiciel)</span>
                    <FileText size={14} className="opacity-50" />
                  </div>
                </div>
              </div>
            </div>
            {/* DOCUMENT À DROITE (ex: ID ou ETS) */}
            {(activeDoc === "ID" || activeDoc === "ets") && (
              <div className="absolute left-[105%] hidden xl:block w-72 animate-in slide-in-from-left-5 fade-in duration-300">
                <div
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedImg(activeDoc === "ID" ? "/preuveID.jpg" : "/preuveETS.jpg");
                  }}
                  className="bg-card border shadow-2xl rounded-xl p-2 cursor-zoom-in group relative hover:border-primary/40 transition-colors">
                  <p className="text-[10px] font-bold text-center uppercase mb-2 bg-muted py-1 rounded">
                    {activeDoc === "ID" ? "Carte d'identité" : "Preuve d'inscription ÉTS"}
                  </p>
                  <Image
                    src={activeDoc === "ID" ? "/preuveID.jpg" : "/preuveETS.jpg"}
                    className="rounded-lg w-full h-auto group-hover:opacity-90 transition-opacity"
                    alt="Document"
                    width={300}
                    height={200}
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                    <ZoomIn className="text-white" size={20} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/*Couche de lightBox isolee pour le zoom de l'image*/}
      {zoomedImg && (
        <div
          className="fixed inset-0 z-200 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setZoomedImg(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 transition-colors z-210 border border-white/10"
            onClick={() => setZoomedImg(null)}
          >
            <X size={20} />
          </button>
          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl max-h-[85vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={zoomedImg}
              className="object-contain select-none"
              alt="Document agrandi"
              fill
              sizes="(max-width:1024px) 90vw, 1200px"
              quality={100}
              priority
            />
          </div>
          <p className="text-white/40 text-xs mt-4 pointer-events-none select-none font-sans tracking-wide">
            Cliquez n&apos;importe où pour fermer le zoom
          </p>
        </div>
      )}
    </Section>
  )
}