import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { motion } from 'framer-motion';
import { Wifi, Baby, Car, Coffee, Heart, Music } from 'lucide-react';
import interior1 from '@/assets/interior1.jpg';
import interior2 from '@/assets/interior2.jpg';
import { SITE_INFO } from '@/data/links';

const features = [
  { icon: Wifi, label: 'Free High-Speed Wi-Fi', description: 'Work or browse while you sip' },
  { icon: Baby, label: 'Kid Friendly', description: 'Welcoming space for families' },
  { icon: Car, label: 'Easy Parking', description: 'Free parking available' },
  { icon: Coffee, label: 'Specialty Beans', description: 'Freshly roasted, always' },
  { icon: Music, label: 'Great Ambiance', description: 'Curated playlists & cozy vibes' },
  { icon: Heart, label: 'Made with Love', description: 'Every cup crafted with care' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us — {SITE_INFO.name} | Our Story</title>
        <meta 
          name="description" 
          content="Learn about Blue Can Coffee's journey — from our passion for great coffee to creating Surat's favorite cozy café. Visit us in Uttran." 
        />
        <link rel="canonical" href="https://bluecancoffee.com/about" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-secondary">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Blue Can Coffee started with a simple dream: to create a space in Surat where 
                great coffee meets genuine warmth. A place where strangers become friends, 
                ideas spark over lattes, and every cup tells a story.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container-content">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  More Than Coffee
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Nestled in the heart of Uttran, Blue Can Coffee is where Surat comes 
                    to slow down. We believe good coffee is just the beginning — it's about 
                    the conversation it sparks, the comfort it brings, and the community it builds.
                  </p>
                  <p>
                    Our beans are sourced from passionate growers and roasted to perfection. 
                    Our desserts? Made fresh daily with recipes we've perfected over time. 
                    And our space? Designed to feel like your second home.
                  </p>
                  <p>
                    Whether you're here to work, catch up with friends, or simply enjoy a 
                    quiet moment with your thoughts, there's always a warm seat waiting for you.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <img
                  src={interior1}
                  alt="Cozy interior of Blue Can Coffee with warm wooden décor"
                  className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
                <img
                  src={interior2}
                  alt="Blue Can Coffee seating area with comfortable couches"
                  className="rounded-2xl shadow-card w-full aspect-[3/4] object-cover mt-8"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-secondary" aria-labelledby="features-title">
          <div className="container-content">
            <motion.h2 
              id="features-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-heading font-bold text-foreground text-center mb-12"
            >
              What Makes Us Special
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-soft"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-secondary rounded-xl mb-4">
                    <feature.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
