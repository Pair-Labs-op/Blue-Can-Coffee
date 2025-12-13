import { motion } from 'framer-motion';
import interior1 from '@/assets/interior1.jpg';
import interior2 from '@/assets/interior2.jpg';
import interior3 from '@/assets/interior3.jpg';

const images = [interior1, interior2, interior3];

export function VibeSection() {
  return (
    <section className="py-16 bg-background" aria-labelledby="vibe-title">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 id="vibe-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            The Vibe
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            More than just a coffee shop – it's where Surat comes to unwind. 
            Cozy corners for deep conversations, fast Wi-Fi for work sessions, 
            and the kind of atmosphere that makes you want to stay a little longer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src={img}
                alt={`Blue Can Coffee interior - cozy café atmosphere ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
