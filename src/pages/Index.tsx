import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustBadges } from '@/components/home/TrustBadges';
import { FeaturedMenuCards } from '@/components/home/FeaturedMenuCards';
import { OrderOnlineCard } from '@/components/home/OrderOnlineCard';
import { VibeSection } from '@/components/home/VibeSection';
import { GoogleReviewsEmbed } from '@/components/home/GoogleReviewsEmbed';
import { LocationCard } from '@/components/home/LocationCard';
import { OrderModal } from '@/components/home/OrderModal';
import { SITE_INFO, LINKS } from '@/data/links';

const Index = () => {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": SITE_INFO.name,
    "description": SITE_INFO.description,
    "image": "/hero.jpg",
    "telephone": LINKS.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Uttran",
      "addressLocality": "Surat",
      "addressRegion": "Gujarat",
      "postalCode": "394105",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "21.2302",
      "longitude": "72.8567"
    },
    "url": "https://bluecancoffee.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "23:30"
      }
    ],
    "priceRange": "₹₹",
    "servesCuisine": ["Coffee", "Desserts", "Snacks"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": SITE_INFO.rating,
      "reviewCount": SITE_INFO.reviewCount
    }
  };

  return (
    <>
      <Helmet>
        <title>{SITE_INFO.name} — Specialty Coffee in Surat | Café in Uttran</title>
        <meta name="description" content={SITE_INFO.description} />
        <meta name="keywords" content="coffee shop Surat, café Uttran, specialty coffee, best coffee Surat, Blue Can Coffee" />
        <link rel="canonical" href="https://bluecancoffee.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${SITE_INFO.name} — Specialty Coffee in Surat`} />
        <meta property="og:description" content={SITE_INFO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bluecancoffee.com" />
        
        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Layout>
        <HeroSection onOrderClick={() => setOrderModalOpen(true)} />
        <TrustBadges />
        <FeaturedMenuCards />
        <OrderOnlineCard onOrderClick={() => setOrderModalOpen(true)} />
        <VibeSection />
        <GoogleReviewsEmbed />
        <LocationCard />
        
        <OrderModal 
          open={orderModalOpen} 
          onOpenChange={setOrderModalOpen} 
        />
      </Layout>
    </>
  );
};

export default Index;
