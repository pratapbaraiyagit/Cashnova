"use client";

import { useEffect } from 'react';

export default function AdPlaceholder() {
  useEffect(() => {
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <div className="ad-container text-center" style={{ minHeight: '100px' }}>
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-1968816487034375"
        data-ad-slot="9068240531"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </div>
  );
}
