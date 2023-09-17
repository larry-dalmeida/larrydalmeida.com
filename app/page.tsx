import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import { Tags } from "@/components/tags"

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2 className="mb-0">{post.title}</h2>
          </Link>
          {post.tags && <Tags tags={post.tags} />}
          {post.description && <p className="mt-0">{post.description}</p>}
        </article>
      ))}
    </div>
  )
}
