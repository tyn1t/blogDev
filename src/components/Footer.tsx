import { 
    Github, 
    Instagram, 
    Linkedin, 
    Twitter
} from "lucide-react";

import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const socialLinks = [
    {
        icon: Twitter,
        href: "#",
        label: "Twitter",
    },
    {
        icon: Github,
        href: "#",
        label: "GitHub",
    },
    {
        icon: Linkedin,
        href: "#",
        label: "LinkedIn",
    },
    {
        icon: Instagram,
        href: "#",
        label: "Instagram",
    },
];

const quickLinks = [
    {
        name: "Início",
        href: "/",
    },
    {
        name: "Categorias",
        href: "/categories",
    },
    {
        name: "Sobre",
        href: "/about",
    },
    {
        name: "Contato",
        href: "/contact",
    },
    {
        name: "Privacidade",
        href: "/privacy",
    },
];

export default function Footer () {
    
    return (
        <footer className="bg-background border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Marca */}
                    <div>
                        <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                            DevFim
                        </h3>

                        <p className="text-muted-foreground mb-4">
                            Conteúdo que conecta com mentes curiosas da era digital.
                            Explorando a interseção entre tecnologia, design e criatividade.
                        </p>

                        <div className="flex space-x-4">
                            {socialLinks.map((link) => {
                                const Icon = link.icon;
                                return (
                                    <Link 
                                        key={link.label}
                                        href={link.href}
                                        target="_blank"
                                        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                                    >
                                        <Icon className="h-5 w-5"/>
                                        <span className="sr-only">{link.label}</span>
                                    </Link>
                                )
                            })}
                        </div>
                    </div>

                    {/* Links rápidos */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Links rápidos
                        </h4>

                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold text-foreground mb-4">
                            Fique atualizado
                        </h4>

                        <p className="text-muted-foreground mb-4">
                            Inscreva-se para receber os novos posts diretamente no seu email.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input type="email" placeholder="Seu email"/>
                            <Button>Inscrever-se</Button>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} Resonance. Todos os direitos reservados.</p>
                </div>

            </div>
        </footer>
    )
}
