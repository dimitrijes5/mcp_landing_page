import { cn } from '@/lib/utils';

interface Stat {
  label: string;
  value: string;
}

interface Badge {
  src: string;
  alt: string;
}

interface WhyChooseUsProps {
  stats: Stat[];
  badges: Badge[];
}

export function WhyChooseUs({ stats, badges }: WhyChooseUsProps) {
  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="p-4">
                <img 
                  src={badge.src} 
                  alt={badge.alt} 
                  className="h-16 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 