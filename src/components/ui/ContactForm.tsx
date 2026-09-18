"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "./button";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = {
      access_key: "410e91f3-e70b-4c32-83a3-d764726ef49c",
      email: email,
      subject: `[Portfolio] ${subject}`,
      message: message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setErrorMessage(result.message || "Une erreur est survenue.");
      }
    } catch (error) {
      setErrorMessage("Impossible de joindre le serveur. Vérifie ta connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between flex-1">
      <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase mb-4">
        Écrivez-moi directement
      </p>

      {isSuccess ? (
        <div className="flex flex-col items-center justify-center py-6 text-center gap-3 flex-1">
          <CheckCircle2 className="text-green-500 size-12" />
          <h3 className="text-lg font-semibold text-foreground">Message envoyé !</h3>
          <p className="text-sm text-muted-foreground max-w-xs">
            Merci, ton message a été transmis en arrière-plan.
          </p>
          <Button variant="outline" size="sm" onClick={() => setIsSuccess(false)} className="mt-2 rounded-sm">
            Envoyer un autre message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1 justify-between">
          <div className="flex flex-col gap-4 w-full">
            {errorMessage && (
              <div className="p-3 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-sm">
                {errorMessage}
              </div>
            )}

            <input
              type="text"
              placeholder="Votre nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-sm border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
            />

            <input
              type="email"
              placeholder="Votre email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-sm border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
            />

            <input
              type="text"
              placeholder="Objet de votre message"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              disabled={isSubmitting}
              className="w-full p-3 rounded-sm border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
            />

            <textarea
              placeholder="Votre message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              disabled={isSubmitting}
              className="w-full p-3 rounded-sm border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
            />
          </div>

          <div className="flex justify-start mt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-sm flex items-center gap-2 shadow-sm transition-all disabled:opacity-70 text-sm"
            >
              {isSubmitting ? (
                <>
                  <span>Envoi...</span>
                  <Loader2 size={16} className="animate-spin" />
                </>
              ) : (
                <>
                  <span>Envoyer</span>
                  <Send size={16} />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};