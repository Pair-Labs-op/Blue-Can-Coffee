import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MenuItem } from './MenuItem';
import { MenuCategory as MenuCategoryType } from '@/data/menu';
import { motion } from 'framer-motion';

interface MenuCategoryProps {
  category: MenuCategoryType;
  index: number;
  defaultOpen?: boolean;
}

export function MenuCategory({ category, index, defaultOpen = false }: MenuCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Accordion 
        type="single" 
        collapsible 
        defaultValue={defaultOpen ? category.id : undefined}
        className="bg-card rounded-2xl shadow-soft overflow-hidden"
      >
        <AccordionItem value={category.id} className="border-none">
          <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-xl font-heading font-semibold text-foreground">
                {category.name}
              </span>
              <span className="text-sm text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">
                {category.items.length} items
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-4 pt-2">
              {category.items.map((item, itemIndex) => (
                <MenuItem 
                  key={item.id} 
                  item={item} 
                  index={itemIndex}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
}
