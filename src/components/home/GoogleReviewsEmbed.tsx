import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LINKS, SITE_INFO } from '@/data/links';

export function GoogleReviewsEmbed() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '600px', // Load when within 600px of viewport
        threshold: 0,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 bg-secondary" 
      aria-labelledby="reviews-title"
    >
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 id="reviews-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            What People Say
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(SITE_INFO.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`}
                />
              ))}
            </div>
            <span className="font-semibold">{SITE_INFO.rating}</span>
            <span>·</span>
            <span>{SITE_INFO.reviewCount}+ reviews on Google</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Google Reviews Embed Container */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            {isVisible ? (
              <div className="relative">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.5!2d72.8567!3d21.2302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBlue%20Can%20Coffee!5e0!3m2!1sen!2sin!4v1234567890`}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Blue Can Coffee location on Google Maps"
                  onLoad={() => setIsLoaded(true)}
                  className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                {!isLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-muted animate-pulse">
                    <p className="text-muted-foreground">Loading map...</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="h-[350px] flex items-center justify-center bg-muted animate-pulse">
                <p className="text-muted-foreground">Loading reviews...</p>
              </div>
            )}
          </div>

          {/* CTA to Google Reviews */}
          <div className="text-center mt-6">
            <Button asChild variant="outline" size="lg">
              <a 
                href={LINKS.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="gap-2"
              >
                Read All Reviews on Google
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
