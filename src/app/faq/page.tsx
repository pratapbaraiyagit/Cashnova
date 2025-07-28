import { faqs } from '@/lib/data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from 'lucide-react';

export default function FaqPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <HelpCircle className="mx-auto h-16 w-16 text-primary mb-4" />
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Find answers to common questions about Cashnova and personal finance.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-lg text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
