import { navItems } from "@/lib/constants"
import Link from "next/link"
import ThemeToggles from "./themeToggles"
import MobileNavigtaion from "./MobileNavigation"

export const Navigation = () => {

    return (
        <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <div className="flex justify-between items-center h-20">
                    <div className="shrink-0 text-center">
                        <h1 className="text-xl md:text-4xl font-serif font-bold text-foreground">DevFim</h1>
                    </div>
                    {/* desktop navigation*/}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link href={item.href} key={item.name} className="text-sm md:text-lg font-medium text-muted-foreground 
                                hover:text-foreground transition-colors duration-200
                            ">
                                {item.name}
                            </Link>
                        ))}
                        <ThemeToggles />
                    </div>

                    <MobileNavigtaion />
                    
                </div>
                
            </div>
        </nav>
    )
}