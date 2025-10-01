import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Code, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TutorialCard from "@/components/TutorialCard";
import BlogCard from "@/components/BlogCard";
import { tutorials } from "@/data/tutorials";
import { blogPosts } from "@/data/blogPosts";

const Home = () => {
  const featuredTutorials = tutorials.slice(0, 3);
  const recentBlogs = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-hero opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Master{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Programming
              </span>
              <br />
              One Tutorial at a Time
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn web development, JavaScript, React, and more with our expert tutorials and insightful blog posts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/tutorials">
                <Button variant="hero" size="lg" className="gap-2">
                  Explore Tutorials
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  Read Blog
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-slide-up">
              <div className="w-16 h-16 mx-auto gradient-hero rounded-2xl flex items-center justify-center">
                <Code className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Hands-on Tutorials</h3>
              <p className="text-muted-foreground">
                Learn by building real projects with step-by-step guidance
              </p>
            </div>
            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 mx-auto gradient-hero rounded-2xl flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">In-depth Articles</h3>
              <p className="text-muted-foreground">
                Deep dive into concepts with comprehensive blog posts
              </p>
            </div>
            <div className="text-center space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 mx-auto gradient-hero rounded-2xl flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold">Stay Updated</h3>
              <p className="text-muted-foreground">
                Keep up with the latest trends and best practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutorials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Tutorials</h2>
            <Link to="/tutorials">
              <Button variant="ghost" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTutorials.map((tutorial, index) => (
              <div
                key={tutorial.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TutorialCard {...tutorial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Recent Blog Posts</h2>
            <Link to="/blog">
              <Button variant="ghost" className="gap-2">
                View All
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentBlogs.map((post, index) => (
              <div
                key={post.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <BlogCard {...post} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
