import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl text-muted-foreground">
              Have a question or feedback? We'd love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="gradient-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="gradient-hero p-2 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Send us a message</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      required 
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="What's this about?" 
                      required 
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message..." 
                      required 
                      className="min-h-[150px] bg-background"
                    />
                  </div>
                  
                  <Button type="submit" variant="default" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="gradient-card rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="gradient-hero p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email</h3>
                    <p className="text-muted-foreground">
                      <a href="mailto:hello@codecraft.dev" className="hover:text-primary transition-smooth">
                        hello@codecraft.dev
                      </a>
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Social Media</h3>
                    <div className="flex gap-4 mt-2">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                        Twitter
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                        GitHub
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gradient-card rounded-2xl p-8">
                <h3 className="font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">How often do you publish new content?</p>
                    <p className="text-muted-foreground">
                      We publish new tutorials and blog posts regularly, typically 2-3 times per week.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Can I suggest a tutorial topic?</p>
                    <p className="text-muted-foreground">
                      Absolutely! We love hearing from our community. Send us your suggestions through the contact form.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Do you offer consulting services?</p>
                    <p className="text-muted-foreground">
                      Please contact us directly to discuss consulting opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
