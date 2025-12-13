import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LINKS, SITE_INFO } from '@/data/links';

export function GoogleReviewsEmbed() {
  const [isVisible, setIsVisible] = useState(false);
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
        rootMargin: '600px',
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
          <h2
            id="reviews-title"
            className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3"
          >
            What People Say
          </h2>

          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(SITE_INFO.rating)
                      ? 'text-yellow-500 fill-yellow-500'
                      : 'text-muted'
                  }`}
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
          className="max-w-3xl mx-auto text-center"
        >
          {isVisible ? (
            <p className="text-muted-foreground mb-6">
              Real experiences from customers who love our coffee, vibe, and service.
            </p>
          ) : (
            <div className="h-20 bg-muted animate-pulse rounded-xl" />
          )}

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
        </motion.div>
      </div>
    </section>
  );
}
