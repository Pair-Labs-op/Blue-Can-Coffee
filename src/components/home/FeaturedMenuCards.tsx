import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FEATURED_ITEMS } from '@/data/menu';
import cappuccinoImg from '@/assets/cappuccino.jpg';
import icedLatteImg from '@/assets/iced-latte.jpg';
import cheesecakeImg from '@/assets/cheesecake.jpg';

const imageMap: Record<string, string> = {
  'cappuccino': cappuccinoImg,
  'iced-latte': icedLatteImg,
  'cheesecake': cheesecakeImg,
};

export function FeaturedMenuCards() {
  return (
    <section className="py-16 bg-background" aria-labelledby="featured-title">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 id="featured-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Crowd Favorites
          </h2>
          <p className="text-muted-foreground">The ones everyone keeps coming back for</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {FEATURED_ITEMS.slice(0, 4).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={imageMap[item.image || 'cappuccino']}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              {item.badge && (
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full">
                  {item.badge}
                </span>
              )}

              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 line-clamp-1">{item.name}</h3>
                <p className="text-primary font-bold">₹{item.price}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button asChild variant="outline" size="lg">
            <Link to="/menu" className="gap-2">
              View Full Menu
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
