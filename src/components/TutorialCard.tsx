import { Link } from "react-router-dom";
import { Clock, User } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface TutorialCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  readTime: string;
  tags: string[];
}

const TutorialCard = ({ id, title, description, image, author, readTime, tags }: TutorialCardProps) => {
  return (
    <Link to={`/tutorial/${id}`}>
      <Card className="overflow-hidden transition-smooth hover:shadow-glow hover:-translate-y-1 cursor-pointer h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-smooth hover:scale-105"
          />
        </div>
        <CardHeader>
          <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-smooth">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground w-full">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {author}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default TutorialCard;
