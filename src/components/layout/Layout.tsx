import { ReactNode } from 'react';
import { MobileHeader } from './MobileHeader';
import { MobileFooter } from './MobileFooter';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <MobileHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <MobileFooter />
    </div>
  );
}
