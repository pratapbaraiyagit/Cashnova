import { Megaphone } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function AdPlaceholder() {
  // TODO: Replace this with your Google AdSense code.
  // Example for a display ad unit:
  //
  // import { useEffect } from 'react';
  //
  // useEffect(() => {
  //   try {
  //     (window.adsbygoogle = window.adsbygoogle || []).push({});
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }, []);
  //
  // return (
  //   <div className="ad-container">
  //     <ins className="adsbygoogle"
  //       style={{ display: 'block' }}
  //       data-ad-client="ca-pub-xxxxxxxxxxxxxxxx" // Replace with your client ID
  //       data-ad-slot="xxxxxxxxxx"             // Replace with your ad slot ID
  //       data-ad-format="auto"
  //       data-full-width-responsive="true"></ins>
  //   </div>
  // );

  return (
    <Card className="flex items-center justify-center h-48 md:h-60 w-full bg-muted/50 border-dashed">
      <div className="text-center text-muted-foreground">
        <Megaphone className="mx-auto h-12 w-12" />
        <p className="mt-2 text-sm font-semibold">Advertisement</p>
      </div>
    </Card>
  );
}
