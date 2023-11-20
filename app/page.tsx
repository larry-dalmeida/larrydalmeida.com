import { allPosts, Post } from "@/.contentlayer/generated";
import Link from "@/components/link";
import PostDate from "@/components/post-date";
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
          <PostDate date={post.date} />
        </header>
        {post.tags && <Tags tags={post.tags} />}
        {post.description && <p className="mt-0">{post.description}</p>}
      </article>
    ))}
  </section>
);

const Hero = () => (
  <section className="my-16">
    <h1>Hey! I&apos;m Larry.</h1>
    <p className="mt-0">Welcome to my little corner of the internet.</p>
    <p>
      Here I write about things I&apos;m learning, things I&apos;m building and things I&apos;m
      thinking about. It&apos;s mostly for myself, but if you find something useful,
      that&apos;s great too!
    </p>
    <p>
      If you&apos;d like to say hi you can contact me by email at <a href="mailto:hello@larrydalmeida.com">hello@larrydalmeida.com</a>.
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
