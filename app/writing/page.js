import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export function getPostMetadata() {
  const postDirectory = path.join(process.cwd(), 'posts');
  console.log(postDirectory);  
  const postFiles = fs.readdirSync(postDirectory);

  const posts = postFiles.map((filename) => {
    const slug = filename.replace('.md', '');
    const fileContent = fs.readFileSync(
      path.join(postDirectory, filename),
      'utf-8'
    );
    const { data } = matter(fileContent);

    return {
      slug,
      ...data,
    };
  });

  return posts;
}


export default function Writing() {
  
  const posts = getPostMetadata();
  const postPreviews = posts.map((post, i) => (
    <div key={i}>
      <Link href={`/writing/${post.slug}`} >
      <h2>{post.title}</h2>
      </Link>
    </div>
  ));

  
  return (
    <div className="mt-10 max-w-2xl pt-6 px-4 mx-auto">
      <h1 className="text-4xl font-bold">Writing</h1>

      <h1 className="mt-5">{postPreviews}</h1>
    </div>
  );
};


 