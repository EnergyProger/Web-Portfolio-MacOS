import WindowWrapper from "@hoc/WindowWrapper";
import SafariHeader from "./SafariHeader";
import BlogPostList from "./BlogPostList";

const Safari = () => {
  return (
    <>
      <SafariHeader />
      <div className="blog">
        <h2>My Developer Blog</h2>
        <BlogPostList />
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
