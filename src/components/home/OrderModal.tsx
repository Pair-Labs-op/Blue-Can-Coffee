import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ExternalLink, Clock, Truck } from 'lucide-react';
import { LINKS } from '@/data/links';

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const orderPartners = [
  {
    name: 'Zomato',
    url: LINKS.zomato,
    logo: '🔴',
    description: 'Fast delivery, track your order live',
    deliveryTime: '25-35 mins',
    bgClass: 'bg-red-50 hover:bg-red-100 border-red-200',
  },
  {
    name: 'Swiggy',
    url: LINKS.swiggy,
    logo: '🟠',
    description: 'Wide coverage, contactless delivery',
    deliveryTime: '30-40 mins',
    bgClass: 'bg-orange-50 hover:bg-orange-100 border-orange-200',
  },
];

export function OrderModal({ open, onOpenChange }: OrderModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="text-2xl font-heading text-center">Order Online</DialogTitle>
          <DialogDescription className="text-center">
            Choose your preferred delivery partner
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {orderPartners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-2xl border transition-colors ${partner.bgClass}`}
            >
              <div className="text-4xl">{partner.logo}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground text-lg">{partner.name}</h3>
                <p className="text-sm text-muted-foreground">{partner.description}</p>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{partner.deliveryTime}</span>
                </div>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground" />
            </a>
          ))}
        </div>

        <div className="text-center pt-2 pb-4">
          <p className="text-xs text-muted-foreground">
            Orders handled by trusted partners. Delivery fee may apply based on location.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
