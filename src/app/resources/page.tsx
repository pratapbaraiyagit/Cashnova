import Link from 'next/link';
import { resources } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdPlaceholder from '@/components/ad-placeholder';
import { ArrowUpRight } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Curated Resources</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A handpicked list of tools, apps, books, and courses to accelerate your financial journey.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} className="flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <CardHeader className="flex-row items-start gap-4">
               <div className="bg-primary/10 p-3 rounded-lg">
                <resource.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle>{resource.title}</CardTitle>
                <Badge variant="secondary" className="mt-1">{resource.type}</Badge>
              </div>
            </CardHeader>
            <div className="p-6 pt-0 flex-grow">
              <CardDescription>{resource.description}</CardDescription>
            </div>
            <CardFooter>
              <Link href={resource.link} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                Visit Resource <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-12">
        <AdPlaceholder />
      </div>

      <div className="text-center mt-12 text-sm text-muted-foreground bg-muted p-4 rounded-lg">
        <p><strong>Disclosure:</strong> Some of the links on this page are affiliate links. If you click on them and make a purchase, we may earn a commission at no additional cost to you. We only recommend products and services that we believe will add value to our readers.</p>
      </div>
    </div>
  );
}
