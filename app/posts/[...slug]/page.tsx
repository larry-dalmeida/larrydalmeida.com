import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { Tags } from "@/components/tags";
import PostDate from "@/components/post-date";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose dark:prose-invert">
      <div className="my-16">
        <h1>{post.title}</h1>
        <div className="flex justify-between items-center mb-4">
          {post.tags && <Tags tags={post.tags} />}
          <PostDate date={post.date} />
        </div>
        {post.description && (
          <p className="text-xl mt-2 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
      </div>
      <hr className="my-4" />
      <Mdx code={post.body.code} />
    </article>
  );
}
