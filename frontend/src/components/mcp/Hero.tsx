import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  backgroundImage: string;
}

export function Hero({ title, subtitle, ctaText, ctaHref, backgroundImage }: HeroProps) {
  return (
    <div 
      className="relative min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
          {title}
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">
          {subtitle}
        </p>
        <Button 
          asChild 
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
        >
          <a href={ctaHref}>{ctaText}</a>
        </Button>
      </div>
    </div>
  );
} 