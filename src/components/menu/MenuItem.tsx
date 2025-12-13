import { motion } from 'framer-motion';
import { MenuItem as MenuItemType } from '@/data/menu';

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

export function MenuItem({ item, index }: MenuItemProps) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="flex justify-between items-start gap-4 py-3 border-b border-border last:border-none"
    >
      <div className="flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="font-semibold text-foreground">{item.name}</h3>
          {item.badge && (
            <span className="text-xs font-medium bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
              {item.badge}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="flex-shrink-0">
        <span className="font-bold text-foreground">₹{item.price}</span>
      </div>
    </motion.article>
  );
}
