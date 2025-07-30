import type { Topic } from '@/components/data/topics';
import { format } from 'date-fns';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Clock } from 'lucide-react';

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 border-[#b5a194] bg-card/50 backdrop-blur-sm rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="self-start">
            {topic.category}
          </Badge>
        </div>
        <CardTitle className="font-headline text-xl mb-2">{topic.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {format(topic.publicationDate, 'MMMM d, yyyy')}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow">
        <CardDescription className="flex-grow text-slate-600">{topic.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        {/* <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-1.5" />
          <span className="text-sm text-slate-500">{topic.readTime} min</span>
        </div> */}
        {/* <a href="#" className="flex items-center text-sm text-[#b5a194] font-semibold hover:underline">
          Ler mais
          <ArrowRight className="h-4 w-4 ml-1.5" />
        </a> */}
      </CardFooter>
    </Card>
  );
}
