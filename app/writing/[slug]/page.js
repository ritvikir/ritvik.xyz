import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Markdown from "markdown-to-jsx";

const getPostContent = async (slug) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
    const final = matterResult.content
  return final;
};

const Post = (props) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return(
  <div>
  {content}

  </div>
  

  );
};

export default Post;
