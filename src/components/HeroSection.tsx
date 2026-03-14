import * as motion from "motion/react-client"
import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {

    return (
        <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Conteúdo esquerdo */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                            Conteúdo que <span className="text-primary italic">inspira</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                            Insights sobre tecnologia, design e criatividade para quem quer
                            construir projetos digitais modernos e impactantes.
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >

                            <Link href="/blog">
                                <Button size="lg" className="group">
                                    Ler últimos posts
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                    {/* Conteúdo direito */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            <div className="w-80 h-80 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -top-3 -right-10"></div>
                            <div className="w-96 h-96 bg-linear-to-br from-secondary/30 to-primary/30 rounded-2xl transform rotate-6 shadow-2xl"></div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
