import { Megaphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AdPlaceholder() {
  return (
    <Card className="flex items-center justify-center h-48 md:h-60 w-full bg-muted/50 border-dashed">
      <div className="text-center text-muted-foreground">
        <Megaphone className="mx-auto h-12 w-12" />
        <p className="mt-2 text-sm font-semibold">Advertisement</p>
      </div>
    </Card>
  );
}
