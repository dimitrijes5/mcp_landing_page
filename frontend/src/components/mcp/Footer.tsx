import { cn } from '@/lib/utils';

interface FooterProps {
  logoSrc: string;
  links: Array<{ label: string; href: string }>;
  copyright: string;
}

export function Footer({ logoSrc, links, copyright }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logoSrc} alt="Logo" className="h-10" />
            </a>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-6 md:mb-0">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            {copyright}
          </div>
        </div>
      </div>
    </footer>
  );
} 