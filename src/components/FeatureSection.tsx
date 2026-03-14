import { featuredPosts } from "@/lib/data"
import * as motion from "motion/react-client"

import { Card, CardContent, CardHeader } from "./ui/card"
import Image from "next/image"
import { Badge } from "./ui/badge"

import { ArrowRight, Calendar } from "lucide-react"
import Link from "next/link"

export default function FeatureSection() {

    const posts = featuredPosts

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                <motion.div
                    initial={{ opacity: 0, y: 200 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-3xl md:text-4xl font-bold font-serif mb-4">
                        Posts em Destaque
                    </h1>

                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Tutoriais, dicas e insights sobre programação, tecnologia
                        e desenvolvimento de projetos digitais modernos.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">

                    {posts.map((post, index) => (

                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >

                            <Link href={`/blog/${post.id}`}>
                                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl border-0 transition-all bg-card/50 backdrop-blur-sm py-0">
                                    <CardHeader className="p-0">
                                        <div className="relative">
                                            <div className="w-full h-48 relative">
                                                <Image
                                                    fill
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="object-cover transition-transform duration-200 group-hover:scale-105"
                                                />
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-background/80 backdrop-blur-sm"
                                                >
                                                    {post.category}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardHeader>

                                    <CardContent className="p-6">
                                        <div className="flex items-center text-sm text-muted-foreground mb-3 justify-end">
                                            <Calendar className="w-4 h-4 mr-2" />
                                            {post.date}
                                        </div>
                                        <h3 className="text-xl font-bold font-serif text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                                            {post.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center text-primary font-medium">
                                            Saiba mais
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
