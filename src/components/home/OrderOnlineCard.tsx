import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface OrderOnlineCardProps {
  onOrderClick: () => void;
}

export function OrderOnlineCard({ onOrderClick }: OrderOnlineCardProps) {
  return (
    <section className="py-16 bg-secondary" aria-labelledby="order-title">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6">
            <ShoppingBag className="h-8 w-8 text-primary-foreground" aria-hidden="true" />
          </div>
          
          <h2 id="order-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Order Online
          </h2>
          
          <p className="text-muted-foreground mb-8">
            Craving our coffee? Get it delivered to your doorstep through our trusted partners.
          </p>

          <Button 
            variant="hero" 
            size="lg"
            onClick={onOrderClick}
            className="min-w-[200px]"
          >
            Order Now
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            Orders handled by trusted partners. Delivery fee may apply.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
