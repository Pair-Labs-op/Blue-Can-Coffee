export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  badge?: 'Best Seller' | 'Popular' | 'New';
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

export const MENU: MenuCategory[] = [
  {
    id: 'hot-coffee',
    name: 'Hot Coffees',
    items: [
      { 
        id: 'cappuccino', 
        name: 'Cappuccino', 
        price: 150, 
        description: 'Classic espresso with steamed milk and velvety foam.',
        badge: 'Best Seller'
      },
      { 
        id: 'flat-white', 
        name: 'Flat White', 
        price: 160, 
        description: 'Velvety microfoam and rich espresso for coffee purists.' 
      },
      { 
        id: 'latte', 
        name: 'Caffè Latte', 
        price: 140, 
        description: 'Smooth espresso with creamy steamed milk.',
        badge: 'Popular'
      },
      { 
        id: 'americano', 
        name: 'Americano', 
        price: 120, 
        description: 'Bold espresso shots with hot water.' 
      },
      { 
        id: 'mocha', 
        name: 'Café Mocha', 
        price: 180, 
        description: 'Espresso, chocolate, and steamed milk topped with whipped cream.' 
      },
    ]
  },
  {
    id: 'cold-coffee',
    name: 'Cold Coffees',
    items: [
      { 
        id: 'iced-latte', 
        name: 'Iced Latte', 
        price: 160, 
        description: 'Chilled espresso with cold milk over ice.',
        badge: 'Popular'
      },
      { 
        id: 'cold-brew', 
        name: 'Cold Brew', 
        price: 180, 
        description: '18-hour steeped coffee for smooth, low-acid flavor.' 
      },
      { 
        id: 'frappe', 
        name: 'Coffee Frappé', 
        price: 190, 
        description: 'Blended iced coffee with cream and ice.' 
      },
      { 
        id: 'iced-mocha', 
        name: 'Iced Mocha', 
        price: 200, 
        description: 'Chilled chocolate espresso with milk and whipped cream.' 
      },
    ]
  },
  {
    id: 'specialty',
    name: 'Specialty Drinks',
    items: [
      { 
        id: 'hazelnut-latte', 
        name: 'Hazelnut Latte', 
        price: 190, 
        description: 'Creamy latte with toasted hazelnut syrup.',
        badge: 'Best Seller'
      },
      { 
        id: 'caramel-macchiato', 
        name: 'Caramel Macchiato', 
        price: 200, 
        description: 'Vanilla, milk, espresso, and caramel drizzle.' 
      },
      { 
        id: 'matcha-latte', 
        name: 'Matcha Latte', 
        price: 180, 
        description: 'Japanese matcha whisked with steamed milk.' 
      },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    items: [
      { 
        id: 'biscoff-cheesecake', 
        name: 'Biscoff Cheesecake', 
        price: 220, 
        description: 'Creamy cheesecake with Biscoff crust and caramel.',
        badge: 'Best Seller'
      },
      { 
        id: 'chocolate-brownie', 
        name: 'Chocolate Brownie', 
        price: 150, 
        description: 'Rich, fudgy brownie with walnuts.' 
      },
      { 
        id: 'tiramisu', 
        name: 'Tiramisu', 
        price: 200, 
        description: 'Classic Italian dessert with coffee-soaked ladyfingers.' 
      },
      { 
        id: 'banana-bread', 
        name: 'Banana Bread', 
        price: 120, 
        description: 'Warm, fresh-baked banana bread with butter.',
        badge: 'Popular'
      },
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks & Bites',
    items: [
      { 
        id: 'croissant', 
        name: 'Butter Croissant', 
        price: 100, 
        description: 'Flaky, buttery French croissant.' 
      },
      { 
        id: 'sandwich', 
        name: 'Grilled Sandwich', 
        price: 150, 
        description: 'Toasted sandwich with cheese and vegetables.' 
      },
      { 
        id: 'cookies', 
        name: 'Chocolate Chip Cookies', 
        price: 80, 
        description: 'Freshly baked cookies with chocolate chunks.' 
      },
    ]
  },
] as const;

export const FEATURED_ITEMS = [
  { ...MENU[0].items[0], image: 'cappuccino' }, // Cappuccino
  { ...MENU[1].items[0], image: 'iced-latte' }, // Iced Latte
  { ...MENU[3].items[0], image: 'cheesecake' }, // Biscoff Cheesecake
  { ...MENU[2].items[0], image: 'cappuccino' }, // Hazelnut Latte
];
