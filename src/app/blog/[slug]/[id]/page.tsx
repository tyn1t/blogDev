import Image from "next/image";
import { featuredPosts } from "@/lib/data";

export default async function BlogSlug({ params }: { params: Promise<{slug: string, id: number}>}) {

    // const slug = (await params).slug
    
    const id = ( await params).id

    const apiFake = featuredPosts[id]
    
    return (
        <main className="min-h-screen bg-background">
            <section className="flex">
                <article className="mx-auto my-4 md:my-10 max-w-5xl space-x-4 gap-10 md:gap-11 lg:gap-16 p-4">
                    <div className="text-center">
                        <div className="text-center mb-4">
                            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-foregroup font-bold font-serif">{apiFake.title}</h1>
                        </div>
                        <div className="max-2xl: h-80 relative">
                            <Image
                                fill
                                src={apiFake.image}
                                alt={apiFake.title}
                                className="object-contain"
                            />
                        </div>
                        <div className="my-5">
                            <p className="text-lg text-muted-foreground sm:text-lg md:text-2xl font-medium">{apiFake.excerpt}</p>
                        </div>
                    </div>
                        <div className="absolute left-5 mt-10">{apiFake.category} - {apiFake.date} </div>
                </article>
            </section>
        </main>
    );
}
