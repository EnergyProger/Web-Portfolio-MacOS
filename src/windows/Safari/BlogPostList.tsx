import { blogPosts } from "@config";
import BlogPostItem from "./BlogPostItem";

const BlogPostList = () => {
  return (
    <div className="space-y-8">
      {blogPosts.map((post) => (
        <BlogPostItem key={post.id} post={post} />
      ))}
    </div>
  );
};

export default BlogPostList;
