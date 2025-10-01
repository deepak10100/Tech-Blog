import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CodeBlock from "@/components/CodeBlock";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { tutorials } from "@/data/tutorials";
import TutorialCard from "@/components/TutorialCard";

const SingleTutorial = () => {
  const { id } = useParams();
  const tutorial = tutorials.find(t => t.id === id);

  if (!tutorial) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Tutorial Not Found</h1>
          <Link to="/tutorials">
            <Button variant="default">Back to Tutorials</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedTutorials = tutorials.filter(t => 
    t.id !== tutorial.id && t.tags.some(tag => tutorial.tags.includes(tag))
  ).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/tutorials">
          <Button variant="ghost" className="mb-8 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Tutorials
          </Button>
        </Link>

        <div className="animate-fade-in">
          {/* Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {tutorial.tags.map(tag => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{tutorial.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {tutorial.author}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {tutorial.readTime}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                March 15, 2025
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video rounded-xl overflow-hidden mb-8 shadow-glow">
            <img 
              src={tutorial.image} 
              alt={tutorial.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none mb-12">
            <div className="text-lg leading-relaxed whitespace-pre-line">
              {tutorial.content}
            </div>
          </div>

          {/* Code Examples */}
          <div className="space-y-8">
            {tutorial.codeExamples.map((example, index) => (
              <div key={index} className="animate-slide-up">
                <h3 className="text-xl font-bold mb-4">{example.description}</h3>
                <CodeBlock code={example.code} language={example.language} />
              </div>
            ))}
          </div>

          {/* Related Tutorials */}
          {relatedTutorials.length > 0 && (
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8">Related Tutorials</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedTutorials.map(relatedTutorial => (
                  <TutorialCard key={relatedTutorial.id} {...relatedTutorial} />
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

export default SingleTutorial;
