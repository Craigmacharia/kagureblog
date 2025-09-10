import React, { useEffect, useState } from "react";
import matter from "gray-matter";
import { Buffer } from "buffer";
import ReactMarkdown from "react-markdown";


window.Buffer = Buffer;

const Blog = () => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("/post/hello-world.md")
      .then((res) => res.text())
      .then((text) => {
        const { data, content } = matter(text);
        setPost({ data, content });
      });
  }, []);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <h1>{post.data.title}</h1>
      <p>
  <em>
    {new Date(post.data.date).toLocaleDateString()} — {post.data.author}
  </em>
</p>

      {post.data.cover && <img src={post.data.cover} alt={post.data.title} />}
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default Blog;
