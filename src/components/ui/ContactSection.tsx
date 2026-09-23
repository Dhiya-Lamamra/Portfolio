"use client";

import { useState } from "react";
import { FileText, QrCode, Loader2, Check } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { Card } from "./card";
import { Section } from "./Section";
import Image from "next/image";

export const ContactSection = () => {
  // États pour gérer la micro-interaction du CV
  const [downloadState, setDownloadState] = useState<"idle" | "loading" | "success">("idle");

  const handleCVDownload = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Si une animation est déjà en cours, on ne fait rien
    if (downloadState !== "idle") {
      e.preventDefault();
      return;
    }

    // 1. Déclencher l'état de chargement
    setDownloadState("loading");

    // [Optionnel] Zone de tracking Analytics future
    // Exemple : window.gtag('event', 'cv_download', { 'event_category': 'engagement' });
    console.log("CV Download Event Tracked!");

    // 2. Simuler une latence réseau/analytics de 1 seconde avant le succès
    setTimeout(() => {
      setDownloadState("success");

      // 3. Revenir à l'état initial après 2.5 secondes de succès
      setTimeout(() => {
        setDownloadState("idle");
      }, 2500);
    }, 1000);
  };

  return (
    <Section className="flex max-md:flex-col items-stretch gap-4 w-full">
      
      {/* 1. BLOC FORMULAIRE À GAUCHE (flex-[3]) */}
      <div className="flex-[3] w-full flex flex-col">
        <Card className="p-4 flex flex-col gap-2 w-full h-full rounded-2xl hover:bg-card/40 border border-transparent hover:border-border transition-all">
          <ContactForm />
        </Card>
      </div>

      {/* 2. BLOC DROITE : CV & QR CODE (flex-[2]) */}
      <div className="flex-[2] w-full flex flex-col gap-4">
        
        {/* SOUS-BLOC A : Télécharger le CV (Plus compact avec Micro-interaction) */}
        <Card className="p-4 flex flex-col justify-between gap-3 w-full flex-[1] rounded-2xl hover:bg-card/40 border border-transparent hover:border-border transition-all">
          <div>
            <h2 className="text-base font-semibold text-foreground">
              Mon CV
            </h2>
            <p className="text-xs text-muted-foreground mt-0.5">
              Consultez ou emportez mes compétences.
            </p>
          </div>

          <a
            href="/CV final.pdf"
            download="CV_Dhiya-Eddine_Lamamra.pdf"
            onClick={handleCVDownload}
            className={`w-full inline-flex items-center justify-center gap-2 transition-all py-2 px-4 rounded-sm font-medium text-sm border ${
              downloadState === "loading"
                ? "bg-accent/50 text-muted-foreground border-transparent cursor-not-allowed"
                : downloadState === "success"
                ? "bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-900/20"
                : "bg-accent text-accent-foreground hover:bg-accent/50 border-transparent"
            }`}
          >
            {downloadState === "idle" && (
              <>
                <FileText size={15} />
                <span>Télécharger mon CV</span>
              </>
            )}
            {downloadState === "loading" && (
              <>
                <Loader2 size={15} className="animate-spin" />
                <span>Préparation...</span>
              </>
            )}
            {downloadState === "success" && (
              <>
                <Check size={15} className="animate-bounce" />
                <span>C'est tout bon !</span>
              </>
            )}
          </a>
        </Card>

        {/* SOUS-BLOC B : Version Mobile QR Code (Vertical et Grand) */}
        <Card className="p-4 flex flex-col justify-between gap-4 w-full flex-[2] rounded-2xl hover:bg-card/40 border border-transparent hover:border-border transition-all">
          <div className="w-full flex flex-col items-center justify-between gap-4 bg-accent/30 p-4 rounded-sm border border-border/40 h-full">
            
            <div className="flex flex-col items-center text-center gap-1">
              <span className="text-xs font-semibold text-foreground flex items-center gap-1">
                <QrCode size={14} className="text-muted-foreground" /> Version Mobile
              </span>
              <span className="text-[11px] text-muted-foreground leading-tight max-w-[220px]">
                Scannez pour ouvrir le portfolio sur votre téléphone.
              </span>
            </div>
            
            <div className="relative size-32 bg-white p-2 rounded-sm border border-border/40 shadow-sm shrink-0 flex items-center justify-center mt-2">
              <Image 
                src="/qrcode.png" 
                alt="QR Code Portfolio" 
                width={112} 
                height={112}
                className="object-contain"
                priority
              />
            </div>

          </div>
        </Card>

      </div>
    </Section>
  );
};