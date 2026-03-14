
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import styles from "./blog.module.css"

export default async function BlogSlug({ params }: { params: Promise<{slug: string}>}) {

    const slug = (await params).slug

    const filePath = path.join(process.cwd(), "src/posts", `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, "utf8"); 

    const { data, content } = matter(fileContents)
    
    const processedContent = await remark().use(html).process(content)
    
    const contentHtml = processedContent.toString()
    return (
        <main className="min-h-screen bg-background">
            <section className="flex flex-col p-4">
                <article className="p-2 max-w-7xl space-y-14">
                    <div className="text-center">
                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">{data.title}</h1>
                    </div>
                    <div
                        className={styles.blogContent}
                        dangerouslySetInnerHTML={{ __html: contentHtml }}
                    />
                </article>
            </section>
        </main>
    );
}
