import { Section } from "./Section";


export const Footer = () => {
    return(
        <footer className="bg-background/80 backdrop-blur-md border-t">
            <Section className="flex items-center justify-center py-4">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Dhiya-Eddine Lamamra. Tous droits réservés.
                </p>
            </Section>
        </footer>
    )
}