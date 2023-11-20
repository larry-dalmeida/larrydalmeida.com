import { allPosts } from "@/.contentlayer/generated";
import Link from "@/components/link";
import { Tags } from "@/components/tags";

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <header className="flex justify-between items-center mt-8">
            <Link href={post.slug}>
              <h2 className="m-0">{post.title}</h2>
            </Link>
            <p className="text-sm m-0 text-indigo-500 font-semibold dark:text-sky-500">
              {new Date(post.date).toLocaleDateString("en-GB", {
                dateStyle: "medium",
              })}
            </p>
          </header>
          {post.tags && <Tags tags={post.tags} />}
          {post.description && <p className="mt-0">{post.description}</p>}
        </article>
      ))}
    </div>
  );
}
