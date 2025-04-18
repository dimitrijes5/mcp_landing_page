import {
  Navbar,
  Hero,
  Services,
  HowItWorks,
  SocialProof,
  WhyChooseUs,
  MeetTheTeam,
  MapContactForm,
  FAQ,
  Footer
} from './components/mcp';
import EditBar from './components/edit/EditBar';
import { useEditMode } from './contexts/EditModeContext';
import EditMenu from './components/edit/EditMenu';

function App() {
  const { isEditMode } = useEditMode();
  return (
    <div className={`w-screen ${isEditMode ? 'grid grid-cols-12' : ''}`} style={{gridTemplateColumns: isEditMode ? '60% 40%' : '1fr'}}>
      <div className={`min-h-screen w-full overflow-x-hidden`}>
        <EditBar />
        {/* Navbar */}
        <Navbar 
          logoSrc="/logo.png" 
          links={[
            { label: 'Home', href: '#' },
            { label: 'Services', href: '#services' },
            { label: 'How It Works', href: '#how-it-works' },
            { label: 'About Us', href: '#about-us' },
            { label: 'FAQ', href: '#faq' },
            { label: 'Contact', href: '#contact' }
          ]}
          sticky={true}
        />
        
        {/* Hero */}
        <Hero
          title="Build Amazing Landing Pages"
          subtitle="Bring your marketing ideas to life with our beautiful, high-converting landing page components"
          ctaText="Get Started"
          ctaHref="#services"
          backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1920&auto=format&fit=crop"
        />
        
        {/* Services */}
        <section id="services">
          <Services
            items={[
              { 
                icon: "⚡", 
                title: "Lightning Fast", 
                description: "Our components are optimized for performance and load in milliseconds." 
              },
              { 
                icon: "🎨", 
                title: "Beautiful Design", 
                description: "Professionally designed components that look great on any device." 
              },
              { 
                icon: "🔧", 
                title: "Easy Integration", 
                description: "Simple integration with any React project using TypeScript." 
              },
              { 
                icon: "📱", 
                title: "Fully Responsive", 
                description: "Looks perfect on desktop, tablet, and mobile devices." 
              },
              { 
                icon: "🔍", 
                title: "SEO Optimized", 
                description: "Built with best practices for search engine visibility." 
              },
              { 
                icon: "🚀", 
                title: "Conversion Focused", 
                description: "Designed to help increase your visitor-to-customer conversion rate." 
              }
            ]}
          />
        </section>
        
        {/* How It Works */}
        <section id="how-it-works">
          <HowItWorks
            steps={[
              { 
                number: 1, 
                title: "Choose Components", 
                description: "Select from our library of pre-built, customizable components." 
              },
              { 
                number: 2, 
                title: "Customize Design", 
                description: "Adjust colors, typography, and content to match your brand." 
              },
              { 
                number: 3, 
                title: "Add Content", 
                description: "Insert your own text, images, and links." 
              },
              { 
                number: 4, 
                title: "Launch", 
                description: "Publish your high-converting landing page and start getting results." 
              }
            ]}
          />
        </section>
        
        {/* Testimonials */}
        <SocialProof
          testimonials={[
            { 
              author: "Sarah Johnson", 
              quote: "These components helped us launch our marketing campaign in record time. Highly recommended!", 
              avatar: "https://randomuser.me/api/portraits/women/43.jpg" 
            },
            { 
              author: "Michael Chen", 
              quote: "The quality of these components is exceptional. Our landing page looks professional and converts well.", 
              avatar: "https://randomuser.me/api/portraits/men/32.jpg" 
            },
            { 
              author: "Emily Rodriguez", 
              quote: "As a non-designer, I was able to create a beautiful landing page that exceeded my expectations.", 
              avatar: "https://randomuser.me/api/portraits/women/26.jpg" 
            }
          ]}
        />
        
        {/* Why Choose Us */}
        <WhyChooseUs
          stats={[
            { label: "Clients", value: "100+" },
            { label: "Components", value: "50+" },
            { label: "Projects", value: "200+" },
            { label: "Years", value: "5+" }
          ]}
          badges={[
            { src: "https://via.placeholder.com/150x50?text=TechCrunch", alt: "Featured in TechCrunch" },
            { src: "https://via.placeholder.com/150x50?text=Forbes", alt: "Featured in Forbes" },
            { src: "https://via.placeholder.com/150x50?text=Wired", alt: "Featured in Wired" },
            { src: "https://via.placeholder.com/150x50?text=Inc", alt: "Featured in Inc" }
          ]}
        />
        
        {/* Team */}
        <section id="about-us">
          <MeetTheTeam
            members={[
              { 
                name: "Alex Morgan", 
                role: "CEO & Founder", 
                photo: "https://randomuser.me/api/portraits/men/44.jpg",
                bio: "10+ years of experience in web development and design." 
              },
              { 
                name: "Jessica Taylor", 
                role: "Design Lead", 
                photo: "https://randomuser.me/api/portraits/women/63.jpg",
                bio: "Award-winning designer with a passion for UX/UI." 
              },
              { 
                name: "David Kim", 
                role: "Lead Developer", 
                photo: "https://randomuser.me/api/portraits/men/86.jpg",
                bio: "Fullstack developer specialized in React and TypeScript." 
              },
              { 
                name: "Sophia Martinez", 
                role: "Marketing Director", 
                photo: "https://randomuser.me/api/portraits/women/40.jpg",
                bio: "Digital marketing expert focused on conversion optimization." 
              }
            ]}
          />
        </section>
        
        {/* FAQ */}
        <section id="faq">
          <FAQ
            items={[
              { 
                question: "Do I need coding knowledge to use these components?", 
                answer: "Basic knowledge of React and TypeScript is helpful, but our components are designed to be easy to implement with minimal coding experience." 
              },
              { 
                question: "Can I customize the colors and styles?", 
                answer: "Yes, all components are built with customization in mind. You can easily adjust colors, typography, spacing, and more through the provided props and CSS variables." 
              },
              { 
                question: "Are the components mobile-friendly?", 
                answer: "Absolutely! All our components are fully responsive and look great on all device sizes from mobile phones to large desktop screens." 
              },
              { 
                question: "Do you offer support if I run into issues?", 
                answer: "Yes, we provide comprehensive documentation and customer support to help you with any questions or issues you might encounter." 
              },
              { 
                question: "Can I use these components for commercial projects?", 
                answer: "Yes, once you purchase a license, you can use our components for both personal and commercial projects." 
              }
            ]}
          />
        </section>
        
        {/* Contact */}
        <section id="contact">
          <MapContactForm
            mapEmbedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941954044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1638465748479!5m2!1sen!2suk"
            formId="contactForm"
          />
        </section>
        
        {/* Footer */}
        <Footer
          logoSrc="/logo-white.png"
          links={[
            { label: "Home", href: "#" },
            { label: "Services", href: "#services" },
            { label: "About Us", href: "#about-us" },
            { label: "Contact", href: "#contact" },
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" }
          ]}
          copyright="© 2023 MCP Landing Page. All rights reserved."
        />
      </div>
      {isEditMode && <EditMenu />}

    </div>
  );
}

export default App;
