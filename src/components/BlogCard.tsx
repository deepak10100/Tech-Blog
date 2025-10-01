import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

const BlogCard = ({ id, title, excerpt, date, readTime, category }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <Card className="transition-smooth hover:shadow-glow hover:-translate-y-1 cursor-pointer h-full">
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">
            {category}
          </Badge>
          <h3 className="text-xl font-bold line-clamp-2 hover:text-primary transition-smooth">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground line-clamp-3 text-sm mb-4">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {readTime}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
