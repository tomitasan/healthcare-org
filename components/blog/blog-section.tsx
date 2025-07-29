
"use client";

import { useState } from 'react';
import type { Topic } from '@/components/data/topics';
import { TopicCard } from './topic-card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';

const TOPICS_PER_PAGE = 4;

interface BlogSectionProps {
  allTopics: Topic[];
}

export function BlogSection({ allTopics }: BlogSectionProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allTopics.length / TOPICS_PER_PAGE);
  const startIndex = (currentPage - 1) * TOPICS_PER_PAGE;
  const endIndex = startIndex + TOPICS_PER_PAGE;
  const currentTopics = allTopics.slice(startIndex, endIndex);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          Blog de Saúde
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Artigos e insights sobre gestão de cuidados, melhores práticas 
          e inovações na área da enfermagem.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentTopics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>

      <div className="flex items-center justify-center space-x-2 sm:space-x-4 mt-12">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1}
          aria-label="Go to first page"
        >
          <ChevronsLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          aria-label="Go to previous page"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <span className="font-medium text-sm sm:text-base">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          aria-label="Go to next page"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages}
          aria-label="Go to last page"
        >
          <ChevronsRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
