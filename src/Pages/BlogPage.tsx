
import BlogHero from "../Components/BlogHero/BlogHero";
import BlogComponent from "../Components/BlogHero/BlogComponent";

const BlogPage = () => {
  return (
    <div>
      <BlogHero title={`The "Boring" Blog`} />
      <BlogComponent />
    </div>
  );
};

export default BlogPage;
