import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { SITE_INFO } from '@/data/links';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found — {SITE_INFO.name}</title>
        <meta name="description" content="The page you're looking for doesn't exist. Head back to Blue Can Coffee." />
      </Helmet>

      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center py-16">
          <div className="container-content text-center">
            <div className="max-w-md mx-auto">
              <h1 className="text-8xl font-heading font-bold text-primary mb-4">404</h1>
              <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Page Not Found
              </h2>
              <p className="text-muted-foreground mb-8">
                Looks like this page went on a coffee break. Let's get you back on track!
              </p>
              <Button asChild variant="hero" size="lg">
                <Link to="/" className="gap-2">
                  <Home className="h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default NotFound;
