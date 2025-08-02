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
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/topics'; // Use your Render URL

interface TopicCardProps {
  topic: Topic;
}

export function TopicCard({ topic }: TopicCardProps) {

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    // Fetch current likes
    axios.get(`${API_URL}/${topic.id}`)
      .then(res => setLikes(res.data.likes));
  }, [topic.id]);

  const handleLike = async () => {
    if (isLiked) return;
    
    const newLikes = likes + 1;
    try {
      await axios.patch(`${API_URL}/${topic.id}`, { likes: newLikes });
      setLikes(newLikes);
      setIsLiked(true);
      // Optional: Store in localStorage to prevent multiple likes
      localStorage.setItem(`liked_${topic.id}`, 'true');
    } catch (error) {
      console.error("Failed to update likes:", error);
    }
  };

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 border-[#b5a194] bg-card/50 backdrop-blur-sm rounded-2xl">
      <CardHeader>
        <div className="flex justify-between items-start mb-4">
          <Badge variant="secondary" className="self-start">
            {topic.category}
          </Badge>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleLike}
              aria-label="Like topic"
              className="text-muted-foreground hover:text-red-500 h-8 w-8"
            >
              <Heart className={`h-5 w-5 transition-colors ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
            </Button>
            <span className="text-xs text-muted-foreground font-medium w-8 text-center">{likes}</span>
          </div>
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
