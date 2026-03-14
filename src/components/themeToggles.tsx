'use client'

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "./ui/switch"
import { useEffect, useState } from "react"

export default function ThemeToggles () {

    const {theme, setTheme} = useTheme()
    
    const [mounted, setMounted] = useState(false);

    
    useEffect(() => {
        const id = setTimeout(() => setMounted(true), 0);
        return () => clearTimeout(id);
    }, []);
    
    if (!mounted){
        return (
            <div className="flex items-center space-x-2">
                <Sun className="h-4 w-4"/>
                <Switch disabled />
                <Moon className="h-4 w-4"/>
            </div>
        )
    }
    return (
        <div className="flex items-center space-x-2">
            <Sun className={`h-4 w-4 transiton-colors 
                ${theme === "light" ? "text-yellow-500" : "text-muted-foreground"}`}
            />
            <Switch 
                checked={theme === "dark"}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}             
            />
            <Moon className={`h-4 w-4 transiton-colors 
                ${theme === "light" ? "text-yellow-500" : "text-muted-foreground"}`}
            />
        </div>
    )
} 