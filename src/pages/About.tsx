import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Code2, Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CodeCraft</h1>
            <p className="text-xl text-muted-foreground">
              Empowering developers to master their craft through quality tutorials and insights
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16 animate-slide-up">
            <div className="gradient-card rounded-2xl p-8 shadow-glow">
              <div className="flex items-center gap-4 mb-4">
                <div className="gradient-hero p-3 rounded-xl">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At CodeCraft, we believe that learning to code should be accessible, enjoyable, and practical. 
                Our mission is to provide high-quality, hands-on tutorials and insightful articles that help 
                developers at all levels improve their skills and stay current with the latest technologies.
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="gradient-card rounded-xl p-6 animate-scale-in">
                <Code2 className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Quality Content</h3>
                <p className="text-muted-foreground">
                  Every tutorial and article is carefully crafted with practical examples and real-world applications.
                </p>
              </div>
              <div className="gradient-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  We're building a supportive community where developers can learn and grow together.
                </p>
              </div>
              <div className="gradient-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <Zap className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Stay Current</h3>
                <p className="text-muted-foreground">
                  We keep our content updated with the latest best practices and emerging technologies.
                </p>
              </div>
              <div className="gradient-card rounded-xl p-6 animate-scale-in" style={{ animationDelay: "0.3s" }}>
                <Target className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Practical Focus</h3>
                <p className="text-muted-foreground">
                  Learn by doing with tutorials focused on building real projects and solving actual problems.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Our Team</h2>
            <div className="gradient-card rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                CodeCraft is created and maintained by a team of passionate developers who love sharing 
                their knowledge. We have years of combined experience in web development, and we're 
                committed to helping others succeed in their coding journey.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're just starting out or looking to level up your skills, we're here to 
                support you every step of the way.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-12">
            <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start learning today with our comprehensive tutorials and stay updated with the latest 
              in web development.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
