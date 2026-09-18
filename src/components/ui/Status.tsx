"use client";
import { Card } from "./card";
import { Section } from "./Section";
import {ArrowUpRight, Badge, Code, LucideIcon, Phone, Globe, X, PhoneIcon} from "lucide-react"
import { StickyNote } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "./icons/GithubIcon";
import { YoutubeIcon } from "./icons/YoutubeIcon";
import { ReactNode, useState } from "react";
import Image from "next/image";
import { GmailIcon } from "./icons/GmailIcon";
import { OutlookIcon } from "./icons/OutlookIcon";

export const Status = () =>{
    return(
        <Section className="flex max-md:flex-col items-stretch gap-2"> 
          <div className="flex-3 min-w-0 flex flex-col">
            <Card className=" p-4 flex flex-col gap-2 w-full h-full rounded-2xl hover:bg-card/40 border border-transparent hover:border-border">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Mes projets</p>
              <div className="flex flex-1 flex-col gap-6 justify-between">
                {SIDE_PROJECTS.map((project, index) => (
                  <SideProjects 
                    key={index} 
                    Logo={project.Logo}
                    title={project.title}
                    description={project.description}
                    url={project.url || "#"}
                    videoUrl={project.videoUrl}
                     />
                ))}
              </div>
            </Card>
          </div>  
          <div className="flex-2 min-w-0 flex flex-col gap-4">
            <Card className="p-4 flex flex-col gap-2 flex-1 rounded-2xl border border-transparent hover:bg-card/40 hover:border-border">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Travaux</p> 
              <div className="flex flex-col gap-4">
                {WORK.map((work, index) => (
                  <Work 
                    key={index} 
                    {...work}
                  />
                ))}
              </div>
            </Card>

            <Card className="p-4 rounded-2xl border border-transparent hover:bg-card/40 hover:border-border">
              <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Contactez moi</p>
              <div className="flex flex-col gap-2">
                {CONTACT.map((contact, index) => (
                  <Contact 
                    key={index}
                    {...contact}
                  />
                ))}
              </div>
            </Card>
          </div>
        </Section>
    )
}

const SIDE_PROJECTS :SideProjectsProps[]= [
  {
    Logo: Code,
    title: "Portfolio",
    description: "Portfolio personnel developpé avec Next.js, React, TypeScript, Tailwind CSS et Framer Motion. Le projet presente mon parcours, mes competences et mes experiences à travers une interface responsive avec mode sombre, animations, modales interactives, liens de contact, documents et galeries de projets video pour Premiere Pro, Photoshop et After Effects.",
    url: "https://github.com/Dhiya-Lamamra/Portfolio.git",
    videoUrl: "https://youtube.com"
  },
  {
    Logo: StickyNote,
    title: "Dentify",
    description: "Projet realise en equipe de 6 collègues avec une organisation Agile Scrum et un developpement structure par sprints. Dentify est une application et un site web de reservation dentaire permettant de gérer les rendez-vous du point de vue du client comme de l'employé. J'ai principalement developpé le frontend mobile avec React Native et JavaScript, en realisant environ 70 % de cette partie avec un collegue qui a completé les 30 % restants, tout en collaborant sur les parcours, les interfaces et les fonctionnalites de gestion des reservations.",
    url: "https://github.com/Dhiya-Lamamra/Dentify.git",
    videoUrl: "https://youtube.com"
  },
]

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
  freelance?: boolean;
  phone?: string;
  fullDescription: string;
};

const WORK: WorkProps[] = [
  {
    image: "https://static.wixstatic.com/media/ef8474_31c2cca9d5ba43baa84e3660eb45b249~mv2.png/v1/crop/x_14,y_52,w_469,h_438/fill/w_79,h_74,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/B%26M%20G.png",
    title: "B&M Groupe",
    role: "Agent de securite",
    date: "2025 - present",
    url: "https://bm-groupe.ca",
    phone: "+1 438-870-7418",
    fullDescription: "En tant qu'agent de securite chez B&M Groupe, je suis responsable de maintenir un environnement sur et securise pour les clients et les employes. Mes taches incluent la surveillance des lieux, la gestion des acces, la prevention des incidents et la reponse rapide en cas d'urgence.",
  },
  {
    image: "https://best.garda.com/sites/best/files/2023-09/L_BEST_Crowd_Management_color_rgb%404x.png",
    title: "Best Garda",
    role: "Agent de securite evenementiel",
    date: "2023 - present",
    url: "https://best.garda.com",
    phone: "+1 438-870-7418",
    fullDescription: "En tant qu'agent de securite evenementiel chez Best Garda, je suis charge de garantir la securite et le bon deroulement des evenements. Mes responsabilites incluent la gestion de la foule, la surveillance des acces et la prevention des incidents.",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    title: "Youtube",
    role: "Createur de contenu, monteur video et graphiste",
    date: "2020 - 2023",
    url: "https://www.youtube.com/@ulkurato3070/featured",
    phone: "+1 438-870-7418",
    fullDescription: "En tant que createur de contenu sur YouTube, j'ai developpe une chaine dediee a la creation de videos de haute qualite. Mon role comprend la planification, le tournage, le montage et la promotion de mes videos.",
    freelance: true,
  },
];

const Work = (props: WorkProps) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div
        onClick={() => setShowDetails(true)}
        className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-xl w-full cursor-pointer group"
      >
        <div className="bg-accent text-accent-foreground p-2 rounded-xl min-w-12 h-12 flex items-center justify-center">
          <Image src={props.image} alt={props.title} width={32} height={32} className="object-contain" />
        </div>
        <div className="flex items-center justify-between flex-1 min-w-0 gap-2">
          <div className="flex flex-col min-w-0 flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">{props.title}</p>
              {props.freelance && <Badge variant="outline" className="text-[10px] py-0 px-1">Mission</Badge>}
            </div>
            <p className="text-xs text-muted-foreground truncate">{props.role}</p>
          </div>
          <p className="text-xs text-muted-foreground shrink-0 text-right font-medium">{props.date}</p>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-background/60 backdrop-blur-md" onClick={() => setShowDetails(false)}>
          <div className="bg-card border border-border shadow-2xl rounded-2xl p-6 max-w-xl w-full flex flex-col gap-5 relative" onClick={(event) => event.stopPropagation()}>
            <button className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-accent" onClick={() => setShowDetails(false)}>
              <X size={18} />
            </button>
            <div className="flex items-center gap-4 border-b pb-4">
              <Image src={props.image} alt={props.title} width={36} height={36} className="object-contain" />
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-foreground truncate">{props.title}</h3>
                <p className="text-xs text-muted-foreground font-medium">{props.role} - {props.date}</p>
              </div>
            </div>
            <p className="text-sm text-foreground leading-relaxed bg-accent/20 p-3 rounded-xl border border-accent/30">{props.fullDescription}</p>
            <div className="flex items-center gap-2 text-sm font-mono bg-accent/20 p-3 rounded-xl border border-accent/30 text-foreground">
              <Phone size={14} className="text-primary shrink-0" />
              <span className="select-all">{props.phone}</span>
            </div>
            <Link href={props.url} target="_blank" className="flex items-center justify-center gap-2 w-full p-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:opacity-90">
              <Globe size={16} />
              <span>Visiter le site officiel</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

type SideProjectsProps = {
  Logo: LucideIcon;
  title: string;
  description: string;
  url: string;
  videoUrl?: string;
}

const SideProjects = (props: SideProjectsProps) => {
  const [showChoices, setShowChoices] = useState(false);

  //Fonction pour ouvrirs les liens sans declancher le modal du parent
  const handleDirectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return(
    <>
    <div 
    onClick={() => setShowChoices(true)}
    className="inline-flex items-start gap-4 hover:bg-accent/50 transition-colors p-2 rounded-xl w-full group cursor-pointer">
        <span className="bg-accent text-accent-foreground p-3 rounded-xl min-w-12 h-12 flex items-center justify-center">
          <props.Logo size={20} />
        </span>
        
        <div className="flex flex-col flex-1 min-w-0 gap-2 group">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
              {props.title}
            </p>
            
            <div className="flex items-center gap-3">
              <Link 
                href={props.url} 
                target="_blank" 
                onClick={handleDirectClick}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon size={20} />
              </Link>
              
              {props.videoUrl && (
                <Link 
                  href={props.videoUrl} 
                  target="_blank" 
                  onClick={handleDirectClick}
                  className="text-muted-foreground hover:text-red-500 transition-colors"
                >
                  <YoutubeIcon size={20} />
                </Link>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground break-words leading-relaxed mt-1">
            {props.description}
          </p>  
        </div>
    </div>
    {/* Modal de choix (reste identique à l'étape précédente) */}
      {showChoices && (
        <div 
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-background/60 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setShowChoices(false)}
        >
          <div 
            className="bg-card border shadow-2xl rounded-xl p-6 max-w-sm w-full flex flex-col gap-4 animate-in zoom-in-70 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-2">
              <h3 className="text-xl font-bold">{props.title}</h3>
              <p className="text-sm text-muted-foreground">Choisir une destination</p>
            </div>

            <div className="flex flex-col gap-3">
              <Link 
                href={props.url} 
                target="_blank"
                className="flex items-center justify-between p-3 rounded-xl border bg-accent/20 hover:bg-accent hover:border-primary transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon size={24} />
                  <span className="font-medium">Code Source</span>
                </div>
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {props.videoUrl && (
                <Link 
                  href={props.videoUrl} 
                  target="_blank"
                  className="flex items-center justify-between p-3 rounded-xl border bg-red-500/5 hover:bg-red-500/10 hover:border-red-600 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <YoutubeIcon size={24} className="text-red-600" />
                    <span className="font-medium">Démo Vidéo</span>
                  </div>
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-red-600" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )

}


type ContactProps = {
  icon: ReactNode;
  name: string;
  description: string;
  url: string;
}

const CONTACT: ContactProps[] = [
  {
    icon: <GmailIcon size={22}/>,
    name: "Courriel personnel",
    description: "lamamra.dhiya@gmail.com",
    url: "mailto:lamamra.dhiya@gmail.com"
  },
  {
    icon: <OutlookIcon size={24}/>,
    name: "Courriel scolaire",
    description: "dhiya-eddine.lamamra.1@ens.etsmtl.ca",
    url: "mailto:dhiya-eddine.lamamra.1@ens.etsmtl.ca"
  },
  {
    icon: <PhoneIcon size={22}/>,
    name: "numero de telephone",
    description: "438-870-7418",
    url: "tel:+14388707418"
  },
];

const Contact = (props: ContactProps) => {
  return (
    <Link 
      href={props.url} 
      target="_blank" 
      rel="noreferrer" 
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-2 rounded-xl w-full group"
    >
      <div className="bg-accent text-accent-foreground p-2 rounded-xl min-w-12 h-12 flex items-center justify-center">
        {props.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <p className="text-sm font-semibold text-foreground">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground truncate font-mono select-all">
          {props.description}
        </p>
      </div>
      <ArrowUpRight 
        size={16} 
        className="text-muted-foreground mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
      />
    </Link>
  );
};