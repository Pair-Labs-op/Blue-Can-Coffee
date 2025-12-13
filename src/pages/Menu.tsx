import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { MenuCategory } from '@/components/menu/MenuCategory';
import { MENU } from '@/data/menu';
import { SITE_INFO } from '@/data/links';
import { motion } from 'framer-motion';

const Menu = () => {
  return (
    <>
      <Helmet>
        <title>Menu — {SITE_INFO.name} | Coffee, Desserts & More</title>
        <meta 
          name="description" 
          content="Explore our menu of specialty coffees, delicious desserts, and fresh snacks at Blue Can Coffee, Surat. From cappuccinos to Biscoff cheesecake." 
        />
        <link rel="canonical" href="https://bluecancoffee.com/menu" />
      </Helmet>

      <Layout>
        <section className="py-12 md:py-16" aria-labelledby="menu-title">
          <div className="container-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h1 id="menu-title" className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                Our Menu
              </h1>
              <p className="text-muted-foreground max-w-xl mx-auto">
                From handcrafted coffees to indulgent desserts, discover what makes Blue Can Coffee special.
              </p>
            </motion.div>

            <div className="max-w-2xl mx-auto space-y-4">
              {MENU.map((category, index) => (
                <MenuCategory 
                  key={category.id} 
                  category={category} 
                  index={index}
                  defaultOpen={index === 0}
                />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center text-sm text-muted-foreground mt-10"
            >
              Prices are inclusive of all taxes. Menu items may vary based on availability.
            </motion.p>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Menu;
