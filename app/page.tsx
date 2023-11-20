import { allPosts, Post } from "@/.contentlayer/generated";
import Link from "@/components/link";
import { Tags } from "@/components/tags";

type RecentPostsProps = {
  recentPosts: Post[];
};

const RecentPosts = ({ recentPosts }: RecentPostsProps) => (
  <section>
    <h2>Recent Posts</h2>
    {recentPosts.map((post) => (
      <article key={post._id}>
        <header className="flex justify-between items-center mt-8">
          <Link href={post.slug}>
            <h3 className="m-0">{post.title}</h3>
          </Link>
          <p className="text-sm m-0 font-semibold">
            {new Date(post.date).toLocaleDateString("en-GB", {
              dateStyle: "medium",
            })}
          </p>
        </header>
        {post.tags && <Tags tags={post.tags} />}
        {post.description && <p className="mt-0">{post.description}</p>}
      </article>
    ))}
  </section>
);

const Hero = () => (
  <section className="my-16">
    <h1>Hey! I'm Larry.</h1>
    <p className="mt-0">Welcome to my little corner of the internet.</p>
    <p>
      Here I write about things I'm learning, things I'm building and things I'm
      thinking about. It's mostly for myself, but if you find something useful,
      that's great too!
    </p>
    <p>
      If you'd like to say hi you can contact me by email at{" "}
      <a href="mailto:hello@larrydalmeida.com">hello@larrydalmeida.com</a>.
    </p>
  </section>
);

export default function Home() {
  return (
    <div className="prose dark:prose-invert">
      <Hero />
      <RecentPosts recentPosts={allPosts} />
    </div>
  );
}
