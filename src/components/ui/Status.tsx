"use client";
import { Card } from "./card";
import { Section } from "./Section";
import {ArrowUpRight, LucideIcon, Monitor, Phone, Globe, X, PhoneIcon, Activity, ShieldAlert, Sparkles, Bot} from "lucide-react"
import { Tooth } from "@phosphor-icons/react";
import { Badge } from "./badge";
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
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">Mes projets</p>
                <span className="text-[11px] text-muted-foreground">Cliquez pour les détails</span>
              </div>
              <div className="flex flex-1 flex-col gap-2">
                {SIDE_PROJECTS.map((project) => (
                  <SideProjects key={project.title} {...project} />
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
    Logo: Activity,
    title: "Explorateur de séismes",
    label: "Agent IA",
    summary: "Agent Athena AI connecté à un serveur MCP qui affiche les séismes récents dans le monde (données USGS en direct) dans un widget interactif.",
    description: "Agent Athena AI qui répond à des demandes comme « Montre-moi les séismes de la semaine au Japon ». L'agent appelle l'outil MCP chercher_seismes (période, magnitude minimale, lieu) ; mon serveur Node.js interroge l'API publique de l'USGS (cache de 60 s et nouvel essai en cas d'erreur), filtre et trie les résultats, puis les renvoie au widget intégré à la conversation. Le widget permet de relancer la recherche, filtrer par magnitude avec des pastilles, naviguer sur une mini-carte, trier, et consulter les détails de chaque séisme (profondeur, ressenti, alerte tsunami).",
    tags: ["MCP", "Node.js", "Zod", "HTML/CSS/JS", "API USGS"],
    url: "https://github.com/Dhiya-Lamamra/athena-mcp-agent",
  },
  {
    Logo: ShieldAlert,
    title: "Explorateur de vulnérabilités",
    label: "Agent IA",
    summary: "Agent Athena AI connecté à un serveur MCP qui explore de vraies vulnérabilités (CVE) de la base NVD du NIST dans un widget interactif.",
    description: "Même architecture appliquée à la cybersécurité : l'utilisateur demande par exemple « les vulnérabilités critiques de Microsoft des 30 derniers jours ». L'agent appelle l'outil MCP chercher_vulnerabilites (fournisseur, produit, sévérité, jours) ; le serveur interroge l'API CVE 2.0 de la NVD, extrait le fournisseur et le produit (identifiants CPE), le score et la sévérité CVSS, puis affiche les résultats dans un widget : filtres par sévérité, recherche, tri par score ou date, et détails de chaque CVE (vecteur CVSS, description, lien vers la fiche NVD).",
    tags: ["MCP", "Node.js", "Zod", "HTML/CSS/JS", "API NVD"],
    url: "https://github.com/Dhiya-Lamamra/athena-defi",
  },
  {
    Logo: Tooth,
    title: "Dentify",
    label: "Projet d'équipe",
    summary: "Application mobile et site web de réservation dentaire, réalisés en équipe de 6 en Agile Scrum.",
    description: "Projet réalisé en équipe de 6 collègues avec une organisation Agile Scrum et un développement structuré par sprints. Dentify est une application et un site web de réservation dentaire permettant de gérer les rendez-vous du point de vue du client comme de l'employé. J'ai principalement développé le frontend mobile avec React Native et JavaScript, en réalisant environ 70 % de cette partie avec un collègue qui a complété les 30 % restants, tout en collaborant sur les parcours, les interfaces et les fonctionnalités de gestion des réservations.",
    tags: ["React Native", "JavaScript", "Scrum"],
    url: "https://github.com/Dhiya-Lamamra/Dentify",
  },
  {
    Logo: Monitor,
    title: "Portfolio",
    summary: "Ce site : Next.js, React, TypeScript, Tailwind CSS et Framer Motion, avec mode sombre et galeries vidéo.",
    description: "Portfolio personnel développé avec Next.js, React, TypeScript, Tailwind CSS et Framer Motion. Le projet présente mon parcours, mes compétences et mes expériences à travers une interface responsive avec mode sombre, animations, modales interactives, liens de contact, documents et galeries de projets vidéo pour Premiere Pro, Photoshop et After Effects.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://github.com/Dhiya-Lamamra/Portfolio",
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
    phone: "+1 514-606-0996",
    fullDescription: "En tant qu'agent de securite chez B&M Groupe, je suis responsable de maintenir un environnement sur et securise pour les clients et les employes. Mes taches incluent la surveillance des lieux, la gestion des acces, la prevention des incidents et la reponse rapide en cas d'urgence.",
  },
  {
    image: "https://best.garda.com/sites/best/files/2023-09/L_BEST_Crowd_Management_color_rgb%404x.png",
    title: "Best Garda",
    role: "Agent de securite evenementiel",
    date: "2023 - present",
    url: "https://best.garda.com",
    phone: "+1 514-281-2811",
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
  /** Petite étiquette affichée à côté du titre (ex. "Agent IA") */
  label?: string;
  /** Résumé court affiché dans la liste */
  summary: string;
  /** Description complète affichée dans la fenêtre de détails */
  description: string;
  tags: string[];
  url: string;
  videoUrl?: string;
  demoUrl?: string;
}

const SideProjects = (props: SideProjectsProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const isAI = props.label === "Agent IA";

  // Ouvre les liens sans déclencher la fenêtre de détails du parent
  const handleDirectClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return(
    <>
    <div
      onClick={() => setShowDetails(true)}
      className="flex items-start gap-4 hover:bg-accent/50 transition-colors p-2 rounded-xl w-full group cursor-pointer"
    >
        <span className={`p-3 rounded-xl min-w-12 h-12 flex items-center justify-center transition-colors ${
          isAI
            ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20"
            : "bg-accent text-accent-foreground"
        }`}>
          <props.Logo size={20} />
        </span>

        <div className="flex flex-col flex-1 min-w-0 gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 min-w-0 flex-wrap">
              <p className="text-base font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                {props.title}
              </p>
              {props.label && (
                <Badge
                  variant="outline"
                  className={`rounded-full text-[10px] ${isAI ? "border-blue-500/30 text-blue-600 dark:text-blue-400" : ""}`}
                >
                  {isAI && <Sparkles />}
                  {props.label}
                </Badge>
              )}
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href={props.url}
                target="_blank"
                onClick={handleDirectClick}
                aria-label={`Code source de ${props.title}`}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <GithubIcon size={18} />
              </Link>

              {props.videoUrl && (
                <Link
                  href={props.videoUrl}
                  target="_blank"
                  onClick={handleDirectClick}
                  aria-label={`Vidéo de ${props.title}`}
                  className="text-muted-foreground hover:text-red-500 transition-colors"
                >
                  <YoutubeIcon size={18} />
                </Link>
              )}
            </div>
          </div>

          <p className="text-sm text-muted-foreground break-words leading-relaxed">
            {props.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {props.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 rounded-full bg-accent/70 text-muted-foreground border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
    </div>

    {/* Fenêtre de détails */}
      {showDetails && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-background/60 backdrop-blur-md animate-in fade-in duration-300"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="bg-card border shadow-2xl rounded-2xl p-6 max-w-xl w-full max-h-[90vh] overflow-y-auto flex flex-col gap-5 relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-1 rounded-lg hover:bg-accent"
              onClick={() => setShowDetails(false)}
              aria-label="Fermer"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-4 border-b pb-4 pr-8">
              <span className={`p-3 rounded-xl min-w-12 h-12 flex items-center justify-center ${
                isAI
                  ? "bg-blue-500/10 text-blue-600 dark:text-blue-400 ring-1 ring-blue-500/20"
                  : "bg-accent text-accent-foreground"
              }`}>
                <props.Logo size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="text-lg font-bold text-foreground">{props.title}</h3>
                {props.label && (
                  <p className="text-xs text-muted-foreground font-medium flex items-center gap-1">
                    {isAI && <Bot size={12} />}
                    {props.label}
                  </p>
                )}
              </div>
            </div>

            <p className="text-sm text-foreground leading-relaxed bg-accent/20 p-3 rounded-xl border border-accent/30">
              {props.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {props.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground border border-border/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href={props.url}
                target="_blank"
                className="flex items-center justify-center gap-2 w-full p-3 rounded-xl font-medium text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <GithubIcon size={16} />
                <span>Voir le code source</span>
                <ArrowUpRight size={14} />
              </Link>

              {props.demoUrl && (
                <Link
                  href={props.demoUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-xl border font-medium text-sm hover:bg-accent transition-colors"
                >
                  <Bot size={16} />
                  <span>Essayer l&apos;agent</span>
                  <ArrowUpRight size={14} />
                </Link>
              )}

              {props.videoUrl && (
                <Link
                  href={props.videoUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full p-3 rounded-xl border font-medium text-sm bg-red-500/5 hover:bg-red-500/10 hover:border-red-600 transition-all"
                >
                  <YoutubeIcon size={16} className="text-red-600" />
                  <span>Démo vidéo</span>
                  <ArrowUpRight size={14} />
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
