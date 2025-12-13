import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Car, Instagram, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LINKS, BUSINESS_HOURS } from '@/data/links';

export function LocationCard() {
  const copyAddress = () => {
    navigator.clipboard.writeText(LINKS.address);
  };

  return (
    <section className="py-16 bg-background" aria-labelledby="location-title">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 id="location-title" className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
            Find Us
          </h2>
          <p className="text-muted-foreground">Visit us for the full experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-card aspect-square md:aspect-auto md:h-full min-h-[300px]"
          >
            <iframe
              src={LINKS.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '300px' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Blue Can Coffee location"
            />
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-card"
          >
            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Address</h3>
                  <p className="text-muted-foreground text-sm mb-2">{LINKS.address}</p>
                  <button 
                    onClick={copyAddress}
                    className="text-sm text-primary hover:underline"
                  >
                    Copy address
                  </button>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Hours</h3>
                  <p className="text-muted-foreground text-sm">{BUSINESS_HOURS.display}</p>
                </div>
              </div>

              {/* Parking */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Car className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Parking</h3>
                  <p className="text-muted-foreground text-sm">Free parking available for customers</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <Button asChild variant="hero" size="full">
                  <a href={`tel:${LINKS.phone}`}>
                    <Phone className="h-5 w-5 mr-2" />
                    Call Us
                  </a>
                </Button>
                
                <div className="grid grid-cols-2 gap-3">
                  <Button asChild variant="outline" size="default">
                    <a 
                      href={LINKS.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      Directions
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="default">
                    <a 
                      href={LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="h-4 w-4 mr-2" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
