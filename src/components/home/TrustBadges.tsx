import { Star, MessageCircle, Clock, MapPin } from 'lucide-react';
import { SITE_INFO, BUSINESS_HOURS } from '@/data/links';
import { motion } from 'framer-motion';

const badges = [
  {
    icon: Star,
    label: `${SITE_INFO.rating} ★`,
    sublabel: 'Rating',
    color: 'text-yellow-600',
  },
  {
    icon: MessageCircle,
    label: `${SITE_INFO.reviewCount}+`,
    sublabel: 'Reviews',
    color: 'text-primary',
  },
  {
    icon: Clock,
    label: 'Till 11:30 PM',
    sublabel: 'Open',
    color: 'text-green-600',
  },
  {
    icon: MapPin,
    label: SITE_INFO.location,
    sublabel: 'Location',
    color: 'text-primary',
  },
];

export function TrustBadges() {
  return (
    <section className="py-6 bg-secondary/50 border-y border-border" aria-label="Trust indicators">
      <div className="container-content">
        <div className="flex overflow-x-auto gap-6 pb-2 scrollbar-hide snap-x snap-mandatory md:justify-center md:overflow-visible">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.sublabel}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 min-w-fit snap-center bg-card rounded-2xl px-4 py-3 shadow-soft"
            >
              <badge.icon className={`h-5 w-5 ${badge.color}`} aria-hidden="true" />
              <div className="text-left">
                <p className="font-semibold text-foreground whitespace-nowrap">{badge.label}</p>
                <p className="text-xs text-muted-foreground">{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
