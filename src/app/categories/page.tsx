import Link from 'next/link';
import { categories } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Content Categories</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore our articles organized by topic to find exactly what you're looking for.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
        {categories.map((category) => (
          <Link key={category.slug} href={`/categories/${category.slug}`} className="group">
            <Card className="h-full flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{category.name}</CardTitle>
                  <CardDescription className="mt-1">{category.description}</CardDescription>
                </div>
              </CardHeader>
              <div className="p-6 pt-0 text-right">
                <p className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                  View Posts <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
