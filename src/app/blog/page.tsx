import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type postPros = {
  slug: string;
  title?: string; 
  description?: string;
}
export default function BlogPage() {
  
  const posts: postPros[] = getPosts()

  return (
    <main className="h-screen bg-background">
        <section className="mt-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 p-4 md:p-10 lg:py-12">
            {posts.map((post) => (
              <Card key={post.slug} className="group  hover:shadow-lg transition-all  duration-300 hover:scale-105 border border-border/50">
                <CardHeader>
                  <h2 className="text-xl md:text-2xl font-semibold font-sans">{post.title}</h2>
                </CardHeader>
                <CardContent className=" md:gap-6 lg:gap-12">
                  <p className="text-lg">{post.description}</p>

                  <Link href={`/blog/${post.slug}`} className=" group-hover:text-primary">
                    Ler artigo
                  </Link>
                </CardContent>              
              </Card>
            ))}
          </div>
          
        </section>
    </main>

  );
}
