"use client";

import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";
import { Button } from "./button";
import { GithubIcon } from "./icons/GithubIcon";
import { GmailIcon } from "./icons/GmailIcon";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { Section } from "./Section";
import Link from "next/link";

export const Header = () => {
  const { theme, setTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <Section className="flex items-center py-4">
        <button onClick={scrollToTop} className="mr-4">
          <h1 className="text-lg font-bold text-primary font-inter hover:opacity-85 transition-opacity cursor-pointer focus:outline-none text-left">
            Portfolio
          </h1>
        </button>

        <div className="flex-1 flex justify-end items-center gap-4">
          <ul className="flex items-center gap-2">
            <li>
              <Link href="https://github.com/Dhiya-Lamamra" target="_blank">
                <Button className="size-6 p-0 rounded-[0.5em]" variant="outline">
                  <GithubIcon size={16} className="text-foreground" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/dhiya-eddine-lamamra-421a28412/" target="_blank">
                <Button className="size-6 p-0 rounded-[0.5em]" variant="outline">
                  <LinkedInIcon size={16} className="text-foreground" />
                </Button>
              </Link>
            </li>
            <li>
              <Link href="mailto:lamamra.dhiya@gmail.com">
                <Button className="size-6 p-0 rounded-[0.5em]" variant="outline">
                  <GmailIcon size={16} className="text-foreground" />
                </Button>
              </Link>
            </li>
          </ul>

          {/* Séparateur vertical */}
          <div className="h-4 w-px bg-border" />

          {/* Bouton Dark Mode */}
          <Button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="size-6 p-0 rounded-[0.5em]"
            variant="outline"
          >
            {theme === "dark" ? (
              <Sun size={15} className="text-amber-500" />
            ) : (
              <Moon size={15} className="text-slate-700" />
            )}
          </Button>
        </div>
      </Section>
    </header>
  );
};