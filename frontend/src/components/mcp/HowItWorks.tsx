import { cn } from '@/lib/utils';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex mb-10 last:mb-0">
              {/* Step Number */}
              <div className="mr-6">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="h-full w-px bg-gray-300 mx-auto mt-2"></div>
                )}
              </div>
              
              {/* Step Content */}
              <div className="flex-1 pt-1.5">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 