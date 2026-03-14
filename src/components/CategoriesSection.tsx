import * as motion from "motion/react-client";
import { categories } from "@/lib/data";
import { Badge } from "./ui/badge";

export default function CategoriesSection() {

    const allCategories = categories;
    
    return (
        <section id="categorias" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4">
                        Explore Categorias
                    </h2>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Explore os assuntos que despertam curiosidade e impulsionam
                        a inovação no nosso mundo digital.
                    </p>

                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {allCategories.map((category, index) => (
                        <motion.div
                            key={category.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="group cursor-pointer">
                                <div className="bg-card rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border border-border/50">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: category.icon }}
                                        className="w-8 h-8 mx-auto text-primary group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                        {category.name}
                                    </h3>
                                    <Badge variant="outline" className="text-xs">
                                        {category.count} posts
                                    </Badge>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
