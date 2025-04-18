import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "border-b border-gray-200 overflow-hidden transition-all",
                index === 0 && "border-t"
              )}
            >
              <button
                className="flex justify-between items-center w-full py-4 px-2 text-left focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-medium">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              <div 
                className={cn(
                  "transition-all duration-300 ease-in-out overflow-hidden",
                  openIndex === index ? "max-h-96 pb-4 px-2" : "max-h-0"
                )}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 