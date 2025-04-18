import { cn } from '@/lib/utils';

interface Testimonial {
  author: string;
  quote: string;
  avatar?: string;
}

interface SocialProofProps {
  testimonials: Testimonial[];
}

export function SocialProof({ testimonials }: SocialProofProps) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex flex-col">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="mt-auto flex items-center">
                  {testimonial.avatar && (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-10 h-10 rounded-full mr-3 object-cover"
                    />
                  )}
                  {!testimonial.avatar && (
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                      <span className="text-primary font-semibold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                  )}
                  <p className="font-semibold">{testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 