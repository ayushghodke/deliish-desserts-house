export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CafeInfo {
  name: string;
  tagline: string;
  owner: string;
  phone: string;
  email: string;
  address: string;
  mapUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  logo: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  tables: number;
  reservationDeposit: number;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  tags: string[];
  isVeg: boolean;
  isBestSeller?: boolean;
  rating: number;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  avatar: string;
  date: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Reserve Table', href: '#reserve' },
  { label: 'Contact', href: '#contact' }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'Instagram', url: 'https://www.instagram.com/deliishdesserts_house_?utm_source=qr&igsi=MWRlOW53YWIxeml4aA%3D%3D', icon: 'Instagram' },
  { platform: 'WhatsApp', url: 'https://wa.me/919011555663', icon: 'MessageCircle' },
  { platform: 'GoogleMaps', url: 'https://maps.app.goo.gl/bVoM6gjgiL1wg3o37?g_st=aw', icon: 'MapPin' }
];

export const CAFE_INFO: CafeInfo = {
  name: 'Deliish Desserts House',
  tagline: 'Made with Love, Served with Joy',
  owner: 'Prratik',
  phone: '+91 90115 55663',
  email: 'deliishdessertshouse@gmail.com',
  address: 'Deliish Desserts House, Near Shivaji Chowk, Maharashtra, India',
  mapUrl: 'https://maps.app.goo.gl/bVoM6gjgiL1wg3o37?g_st=aw',
  instagramUrl: 'https://www.instagram.com/deliishdesserts_house_?utm_source=qr&igsi=MWRlOW53YWIxeml4aA%3D%3D',
  instagramHandle: '@deliishdesserts_house_',
  logo: '/images/branding/logo.jpg',
  hours: {
    weekdays: '11:00 AM - 11:00 PM',
    weekends: '10:30 AM - 11:30 PM'
  },
  tables: 6,
  reservationDeposit: 200
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'all-desserts', name: 'All Treats', icon: '🍰', description: 'Explore our complete dessert & thick shake collection' },
  { id: 'signature-premium', name: 'Signature Premium', icon: '👑', description: 'Pistachio Kunafa, Lotus Biscoff, Tiramisu & exclusive luxury shakes' },
  { id: 'nutella-ferrero', name: 'Nutella & Ferrero', icon: '🌰', description: 'Original Nutella & Rich Ferrero Rocher thick shake masterpieces' },
  { id: 'brownie-shakes', name: 'Brownie Shakes', icon: '🍫', description: 'Freshly baked fudge brownies blended into rich thick shakes' },
  { id: 'mithai-fusion', name: 'Mithai Fusion', icon: '✨', description: 'Traditional Indian sweets meet modern gourmet indulgence' },
  { id: 'fruit-shakes', name: 'Fresh Fruit', icon: '🥭', description: 'Alphonso Mango, Strawberry Blast, Sitafal & berry thick shakes' },
  { id: 'chocolate-shakes', name: 'Chocolate Shakes', icon: '🍫', description: 'Cadbury Silk, Belgian Chocolate, Snickers & dark chocolate delight' },
  { id: 'classic-shakes', name: 'Classic Shakes', icon: '🥤', description: 'Rose Gulkand, Dark Fantasy, Mava Malai & classic favorites' }
];

export const MENU_ITEMS: MenuItem[] = [
  // Signature Premium
  {
    id: 'sp-1',
    name: 'Pistachio Kunafa Indulgence',
    description: 'Creamy pistachio shake crowned with golden crispy toasted kunafa pastry, crushed emerald pistachios, and honey drip.',
    price: 200,
    image: '/images/menu/pistachio-kunafa.jpg',
    category: 'signature-premium',
    tags: ['Kunafa', 'Pistachio', "Chef's Special"],
    isVeg: true,
    isBestSeller: true,
    rating: 4.9
  },
  {
    id: 'sp-2',
    name: 'Lotus Biscoff Heaven',
    description: 'Ultra-thick shake swirled with caramelized Lotus Biscoff spread, crushed spiced cookie crumbles, and whole Biscoff biscuit.',
    price: 170,
    image: '/images/menu/lotus-biscoff.jpg',
    category: 'signature-premium',
    tags: ['Speculoos', 'Caramel', 'Best Seller'],
    isVeg: true,
    isBestSeller: true,
    rating: 4.9
  },
  {
    id: 'sp-3',
    name: 'Signature Royal Rocher Crown',
    description: 'The pinnacle of chocolate hazelnut shakes — overflowing Nutella drip, whole Ferrero Rocher truffles, roasted hazelnuts & wafer rolls.',
    price: 250,
    image: '/images/menu/ferrero-rocher.jpg',
    category: 'nutella-ferrero',
    tags: ['Ferrero Rocher', 'Nutella', 'Luxury Crown'],
    isVeg: true,
    isBestSeller: true,
    rating: 5.0
  },
  {
    id: 'sp-4',
    name: 'Gulab Jamun Brownie Fusion',
    description: 'Decadent dark chocolate brownie blended with cardamom rabdi cream, topped with warm mini gulab jamun and silver vark foil.',
    price: 170,
    image: '/images/menu/gulab-jamun-brownie.jpg',
    category: 'mithai-fusion',
    tags: ['Fusion Mithai', 'Brownie', 'Must Try'],
    isVeg: true,
    isBestSeller: true,
    rating: 4.9
  },
  {
    id: 'sp-5',
    name: 'Fresh Alphonso Mango Delight',
    description: 'Pure Ratnagiri Alphonso mango pulp blended into thick velvety cream, topped with freshly diced juicy mango cubes and mint.',
    price: 160,
    image: '/images/menu/alphonso-mango.jpg',
    category: 'fruit-shakes',
    tags: ['Fresh Fruit', 'Alphonso', 'Seasonal Star'],
    isVeg: true,
    isBestSeller: true,
    rating: 4.8
  },
  {
    id: 'sp-6',
    name: 'Deliish Desserts Signature Brownie',
    description: 'Our founder Prratik’s secret recipe: warm dark fudge brownie loaded with chocolate chips, rich cocoa fudge drip and cookie crunch.',
    price: 250,
    image: '/images/menu/belgian-brownie.jpg',
    category: 'brownie-shakes',
    tags: ['Signature', 'Fudge Brownie', 'House Secret'],
    isVeg: true,
    isBestSeller: true,
    rating: 5.0
  },

  // Nutella & Ferrero Rocher
  {
    id: 'nf-1',
    name: 'Nutty Nutella Rocher',
    description: 'Crunchy roasted almonds and hazelnuts blended with authentic Italian Nutella and Ferrero Rocher crunch.',
    price: 230,
    image: '/images/menu/ferrero-rocher.jpg',
    category: 'nutella-ferrero',
    tags: ['Nutella', 'Ferrero', 'Nutty'],
    isVeg: true,
    isBestSeller: true,
    rating: 4.9
  },
  {
    id: 'nf-2',
    name: 'Belgian Ferrero Rocher',
    description: 'Imported Belgian dark cocoa blended with crunchy Ferrero Rocher truffles for a rich, bittersweet balance.',
    price: 180,
    image: '/images/menu/ferrero-rocher.jpg',
    category: 'nutella-ferrero',
    tags: ['Belgian Cocoa', 'Ferrero'],
    isVeg: true,
    rating: 4.8
  },
  {
    id: 'nf-3',
    name: 'Signature Nutty Nutella',
    description: 'Silky smooth Nutella shake loaded with toasted cashews and crushed butter cookies.',
    price: 180,
    image: '/images/menu/ferrero-rocher.jpg',
    category: 'nutella-ferrero',
    tags: ['Nutella', 'Cashew'],
    isVeg: true,
    rating: 4.7
  },
  {
    id: 'nf-4',
    name: 'Nutella Kitkat Break',
    description: 'Crispy Kitkat wafer bars pulverized inside thick Nutella shake with chocolate fudge swirl.',
    price: 140,
    image: '/images/menu/ferrero-rocher.jpg',
    category: 'nutella-ferrero',
    tags: ['Kitkat', 'Nutella'],
    isVeg: true,
    rating: 4.7
  },

  // Brownie Shakes
  {
    id: 'br-1',
    name: 'Ferrero Rocher Brownie',
    description: 'Double indulgence combining moist fudge brownie slices with crispy Ferrero Rocher truffles.',
    price: 220,
    image: '/images/menu/belgian-brownie.jpg',
    category: 'brownie-shakes',
    tags: ['Ferrero', 'Brownie'],
    isVeg: true,
    rating: 4.9
  },
  {
    id: 'br-2',
    name: 'Lotus Biscoff Brownie',
    description: 'Biscoff spread drizzled over warm chocolate brownie shake with crunchy biscuit crumbles.',
    price: 180,
    image: '/images/menu/lotus-biscoff.jpg',
    category: 'brownie-shakes',
    tags: ['Biscoff', 'Brownie'],
    isVeg: true,
    rating: 4.8
  },
  {
    id: 'br-3',
    name: 'Nutella Brownie Kitkat',
    description: 'A triple treat featuring Nutella, gooey brownie crumbs and crunchy Kitkat pieces.',
    price: 170,
    image: '/images/menu/belgian-brownie.jpg',
    category: 'brownie-shakes',
    tags: ['Nutella', 'Kitkat', 'Brownie'],
    isVeg: true,
    rating: 4.8
  },
  {
    id: 'br-4',
    name: 'Oreo Crunch Brownie',
    description: 'Crushed Oreo cookies folded into rich chocolate fudge brownie thick shake.',
    price: 160,
    image: '/images/menu/belgian-brownie.jpg',
    category: 'brownie-shakes',
    tags: ['Oreo', 'Brownie'],
    isVeg: true,
    rating: 4.7
  },

  // Mithai Fusion
  {
    id: 'mf-1',
    name: 'Ras Malai Rajbhog',
    description: 'Soft melt-in-mouth Rasmalai dumplings blended into saffron-cardamom Rabdi shake with dry fruit slivers.',
    price: 180,
    image: '/images/menu/gulab-jamun-brownie.jpg',
    category: 'mithai-fusion',
    tags: ['Rasmalai', 'Saffron', 'Royal Fusion'],
    isVeg: true,
    isBestSeller: true,
    rating: 4.9
  },
  {
    id: 'mf-2',
    name: 'Kesar Pista Rabdi Shake',
    description: 'Traditional slow-reduced creamy Rabdi infused with Kashmiri saffron strands and roasted pistachios.',
    price: 200,
    image: '/images/menu/pistachio-kunafa.jpg',
    category: 'mithai-fusion',
    tags: ['Kesar', 'Pista', 'Rabdi'],
    isVeg: true,
    rating: 4.9
  },
  {
    id: 'mf-3',
    name: 'Mawa Rabdi Biscoff',
    description: 'Rich condensed Mawa Rabdi paired with crunchy European Lotus Biscoff biscuit crunch.',
    price: 170,
    image: '/images/menu/lotus-biscoff.jpg',
    category: 'mithai-fusion',
    tags: ['Mawa', 'Biscoff', 'East-Meets-West'],
    isVeg: true,
    rating: 4.8
  },

  // Fresh Fruit Shakes
  {
    id: 'fr-1',
    name: 'Triple Berry Blast',
    description: 'A vibrant medley of blueberries, blackberries, and strawberries blended with cold fresh dairy cream.',
    price: 150,
    image: '/images/menu/alphonso-mango.jpg',
    category: 'fruit-shakes',
    tags: ['Berries', 'Antioxidants', 'Refreshing'],
    isVeg: true,
    rating: 4.7
  },
  {
    id: 'fr-2',
    name: 'Fresh Mulberry Delight',
    description: 'Sweet and tangy farm-fresh mulberries hand-crushed into velvety milk cream shake.',
    price: 160,
    image: '/images/menu/alphonso-mango.jpg',
    category: 'fruit-shakes',
    tags: ['Mulberry', 'Seasonal'],
    isVeg: true,
    rating: 4.8
  },
  {
    id: 'fr-3',
    name: 'Fresh Strawberry Blast',
    description: 'Fresh Mahabaleshwar strawberries blended thick with sweet strawberry crush.',
    price: 120,
    image: '/images/menu/alphonso-mango.jpg',
    category: 'fruit-shakes',
    tags: ['Strawberry', 'Fresh'],
    isVeg: true,
    rating: 4.7
  },
  {
    id: 'fr-4',
    name: 'Tender Coconut Shake',
    description: 'Delicate tender coconut malai blended into silky smooth chilled shake with a tropical touch.',
    price: 150,
    image: '/images/menu/alphonso-mango.jpg',
    category: 'signature-premium',
    tags: ['Tender Coconut', 'Smooth'],
    isVeg: true,
    rating: 4.8
  },

  // Chocolate Shakes
  {
    id: 'ch-1',
    name: 'Cadbury Fruit & Nuts',
    description: 'Original Cadbury Dairy Milk chocolate blended with crunchy raisins, almonds and cashews.',
    price: 170,
    image: '/images/menu/belgian-brownie.jpg',
    category: 'chocolate-shakes',
    tags: ['Cadbury', 'Dry Fruits'],
    isVeg: true,
    rating: 4.8
  },
  {
    id: 'ch-2',
    name: 'Dark And The Mark',
    description: 'Intense 70% dark cocoa shake for true dark chocolate lovers with a bittersweet finish.',
    price: 150,
    image: '/images/menu/belgian-brownie.jpg',
    category: 'chocolate-shakes',
    tags: ['Dark Chocolate', 'Bittersweet'],
    isVeg: true,
    rating: 4.8
  },

  // Classic Shakes
  {
    id: 'cl-1',
    name: 'Rose Gulkand Shake',
    description: 'Aromatic Damask rose petals and slow-cured herbal gulkand infused into chilled thick milk.',
    price: 79,
    image: '/images/menu/alphonso-mango.jpg',
    category: 'classic-shakes',
    tags: ['Rose', 'Gulkand', 'Cooling'],
    isVeg: true,
    rating: 4.6
  },
  {
    id: 'cl-2',
    name: 'Dark Fantasy Shake',
    description: 'Sunfeast Dark Fantasy molten choco cookies crushed into a thick chocolate shake.',
    price: 120,
    image: '/images/menu/belgian-brownie.jpg',
    category: 'classic-shakes',
    tags: ['Dark Fantasy', 'Choco Fill'],
    isVeg: true,
    rating: 4.7
  },
  {
    id: 'cl-3',
    name: 'Mava Malai Classic',
    description: 'Traditional slow-cooked khoya mawa blended with thick malai cream for a royal Punjabi indulgence.',
    price: 140,
    image: '/images/menu/gulab-jamun-brownie.jpg',
    category: 'classic-shakes',
    tags: ['Mava', 'Malai', 'Heritage'],
    isVeg: true,
    rating: 4.8
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rohan Deshmukh',
    review: 'The Signature Royal Rocher Crown is unmatched! Thick, decadent, and the Nutella drizzle is pure heaven. Prratik has created something truly special here.',
    rating: 5,
    avatar: '/images/avatars/avatar-1.jpg',
    date: 'February 2026'
  },
  {
    id: 't2',
    name: 'Sneha Kulkarni',
    review: 'Pistachio Kunafa Shake blew my mind! You get the crunchy toasted kunafa texture in every sip. The ambiance with royal gold and maroon vibes makes it great for hanging out.',
    rating: 5,
    avatar: '/images/avatars/avatar-2.jpg',
    date: 'January 2026'
  },
  {
    id: 't3',
    name: 'Aditya Patil',
    review: 'Gulab Jamun Brownie Fusion is genius! Soft warm gulab jamun with cold brownie shake is the best fusion dessert in town. 10/10 recommendation.',
    rating: 5,
    avatar: '/images/avatars/avatar-3.jpg',
    date: 'February 2026'
  },
  {
    id: 't4',
    name: 'Pooja Shinde',
    review: 'Lotus Biscoff Heaven is my go-to every weekend! The speculoos creaminess is so addictive. And the staff is super polite and attentive.',
    rating: 5,
    avatar: '/images/avatars/avatar-4.jpg',
    date: 'January 2026'
  },
  {
    id: 't5',
    name: 'Amit Joshi',
    review: 'The Alphonso Mango shake actually tastes of real fresh mangoes, not artificial flavor. You can genuinely taste the quality ingredients.',
    rating: 5,
    avatar: '/images/avatars/avatar-5.jpg',
    date: 'February 2026'
  }
];

export const TIME_SLOTS: string[] = [
  '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', 
  '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', 
  '9:00 PM', '10:00 PM'
];
