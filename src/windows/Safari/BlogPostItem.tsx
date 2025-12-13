import type { IBlogPost } from "@types";
import { MoveRight } from "lucide-react";

interface Props {
  post: IBlogPost;
}

const BlogPostItem = ({ post }: Props) => {
  return (
    <div className="blog-post">
      <div className="col-span-2">
        <picture>
          <source type="image/webp" srcSet={post.image_webp} />
          <img src={post.image} alt={post.title} loading="lazy" />
        </picture>
      </div>
      <div className="content">
        <p>{post.date}</p>
        <h3>{post.title}</h3>
        <a href={post.link} target="_blank" rel="noopener noreferrer">
          Check out the full post <MoveRight className="icon-hover" />
        </a>
      </div>
    </div>
  );
};

export default BlogPostItem;
