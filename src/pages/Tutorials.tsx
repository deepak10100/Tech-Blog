import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TutorialCard from "@/components/TutorialCard";
import { Button } from "@/components/ui/button";
import { tutorials } from "@/data/tutorials";

const Tutorials = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const allTags = ["All", ...Array.from(new Set(tutorials.flatMap(t => t.tags)))];
  
  const filteredTutorials = selectedTag === "All" 
    ? tutorials 
    : tutorials.filter(t => t.tags.includes(selectedTag));

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tutorials</h1>
          <p className="text-xl text-muted-foreground">
            Step-by-step guides to help you master programming concepts
          </p>
        </div>

        {/* Filter Tags */}
        <div className="mb-8 flex flex-wrap gap-2 animate-slide-up">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              size="sm"
            >
              {tag}
            </Button>
          ))}
        </div>

        {/* Tutorials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTutorials.map((tutorial, index) => (
            <div
              key={tutorial.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <TutorialCard {...tutorial} />
            </div>
          ))}
        </div>

        {filteredTutorials.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No tutorials found for this tag.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Tutorials;
