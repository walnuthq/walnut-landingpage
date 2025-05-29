"use client";

import { Container } from "../../components/container";
import { GetStarted } from "../../components/get-started";
import {
  Heading,
  Lead,
  SectionHeading,
  Subheading,
} from "../../components/text";
import { img as Image } from "./mdx";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";


import MainHeader from "../../components/main-header";
import { Footer } from "@/components/footer";
import { SparkleIcon } from "./components/SparkleIcon";
import { markdownFiles } from "./markdown-files";


type Post = {
  slug: string;
  title: string;
  date: string;
  image?: string;
  content: string;
};

export default function NewChangelog() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const processedPosts = markdownFiles.map(({ slug, content }) => {
      const { data, content: markdownContent } = matter(content);

      return {
        slug,
        title: data.title || "",
        date: data.date || "",
        image: data.image || undefined,
        content: markdownContent,
      };
    });

    processedPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setPosts(processedPosts);
  }, []);

  return (
    <main className="overflow-hidden">
      <MainHeader />
      <Container>
        <SectionHeading className="mt-32 mx-auto text-center">
          Walnut
        </SectionHeading>
        <Heading as="h1" className="mt-2 mx-auto text-center">
          Changelog
        </Heading>
        <Lead className="mt-6 max-w-3xl mx-auto text-center">
          All the latest Walnut news, straight from the team.
        </Lead>
      </Container>
      <Container className="mt-16 pb-24">
        <div className="mt-6">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="relative gap-3 grid grid-cols-1 border-b border-b-gray-100 py-10 first:border-t first:border-t-gray-200 max-sm:gap-3 sm:grid-cols-3"
            >
              <div>
                <h2 className="font-bold text-2xl">{post.title}</h2>
                <div className="mt-2.5 flex items-center gap-3">
                  <div className="text-sm/5 text-BLUE">
                    {new Date(post.date).toLocaleDateString("en-En", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                </div>
              </div>
              <div className="sm:col-span-2 sm:max-w-4xl">
                {post.image && (
                  <div className="relative overflow-hidden [&+*]:mt-8">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full"
                    />
                  </div>
                )}
                <div className={`${post.image && "mt-6"}`}>
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="font-bold text-2xl mb-4">{children}</h1>
                      ),
                      h2: ({ children }) => {
                        const content = String(children);
                        if (content.trim() === "More improvements") {
                          return (
                            <h3 className="flex items-center gap-2 font-bold my-4 text-base">
                              <SparkleIcon className="w-5 h-5" /> {children}
                            </h3>
                          );
                        }
                        return (
                          <h2 className="font-bold my-4 text-xl">{children}</h2>
                        );
                      },
                      p: ({ children }) => (
                        <p className="text-gray-500 mb-4">{children}</p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc text-gray-500 pl-6 mb-4">
                          {children}
                        </ul>
                      ),
                      li: ({ children }) => (
                        <li className="mb-2">{children}</li>
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <GetStarted />
      <Footer />
    </main>
  );
}
