"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData, type FaqItem } from "@/data/constants";

interface FaqAccordionProps {
  className?: string;
}

export function FaqAccordion({ className }: FaqAccordionProps) {
  return (
    <div className={className}>
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-muted-foreground text-2xl max-w-2xl mx-auto">
          Find answers to common questions about Giglance. Can&apos;t find what you&apos;re looking for?
          <span className="text-primary"> Contact our support team</span>.
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
        {faqData.map((faq: FaqItem) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-b">
            <AccordionTrigger className="text-left hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
