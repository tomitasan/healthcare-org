import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { getServices } from '@/lib/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { ArrowRight } from 'lucide-react';

export default async function Home() {
  const blogPosts = await getServices();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full max-w-4xl">

      {/* Blog Section from Contentful */}
      <section id="blog" className="py-20 bg-slate-50">
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
            {blogPosts.map((post) => (
              <Card key={typeof post.fields.id === 'string' || typeof post.fields.id === 'number'
                      ? post.fields.id
                      : ''} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">
                      {typeof post.fields.category === 'string' || typeof post.fields.category === 'number'
                      ? post.fields.category
                      : ''}
                    </Badge>
                    <span className="text-sm text-slate-500">
                      {typeof post.fields.readTime === 'string' || typeof post.fields.readTime === 'number'
                      ? post.fields.readTime
                      : ''}
                    </span>
                  </div>
                  <CardTitle className="text-xl hover:text-teal-600 transition-colors cursor-pointer">
                    {typeof post.fields.title === 'string' || typeof post.fields.title === 'number'
                    ? post.fields.title
                    : ''}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {post.fields.description && typeof post.fields.description === 'object' && 'nodeType' in post.fields.description
                    ? documentToReactComponents(post.fields.description as import('@contentful/rich-text-types').Document)
                    : null}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                    {typeof post.fields.date === 'string' || typeof post.fields.date === 'number'
                      ? new Date(post.fields.date).toLocaleDateString('pt-BR')
                      : ''}
                    </span>
                    <Button variant="ghost" size="sm" className="text-teal-600 hover:text-teal-700">
                      Ler mais
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos os Artigos
            </Button>
          </div>
        </div>
      </section>
        
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Your existing footer... */}
      </footer>
    </div>
  );
}