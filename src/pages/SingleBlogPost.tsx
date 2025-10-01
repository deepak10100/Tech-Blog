import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { blogPosts } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

const SingleBlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button variant="default">Back to Blog</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => 
    p.id !== post.id && p.category === post.category
  ).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="animate-fade-in">
          {/* Header */}
          <header className="mb-8">
            <Badge variant="secondary" className="mb-4">{post.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-lg leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-16 pt-16 border-t border-border">
            <h2 className="text-2xl font-bold mb-6">Comments</h2>
            <div className="space-y-4 mb-8">
              <Textarea 
                placeholder="Share your thoughts..." 
                className="min-h-[120px]"
              />
              <Button variant="default">Post Comment</Button>
            </div>
            <p className="text-sm text-muted-foreground text-center py-8">
              No comments yet. Be the first to share your thoughts!
            </p>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <BlogCard key={relatedPost.id} {...relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default SingleBlogPost;
