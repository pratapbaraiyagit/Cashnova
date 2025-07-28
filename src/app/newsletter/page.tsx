import NewsletterForm from "@/components/newsletter-form";
import { MailCheck } from "lucide-react";

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-16 sm:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <MailCheck className="mx-auto h-16 w-16 text-primary mb-6" />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Join Our Community</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Get exclusive financial tips, new article alerts, and resource recommendations delivered straight to your inbox. We respect your privacy and never spam.
        </p>
        <div className="mt-8">
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
}
