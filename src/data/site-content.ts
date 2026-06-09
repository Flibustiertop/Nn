import {
  Baby,
  BadgeCheck,
  Candy,
  HeartHandshake,
  Leaf,
  MoonStar,
  ShieldCheck,
  SunMedium,
  Trophy,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { createT2IUrl } from "@/lib/utils";

export type BenefitItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Flavor = {
  id: string;
  title: string;
  subtitle: string;
  accent: string;
  description: string;
  benefits: string[];
  image: string;
};

export type Review = {
  id: string;
  author: string;
  city: string;
  rating: number;
  quote: string;
  highlight: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  alt: string;
  image: string;
  size: "sm" | "md" | "lg";
};

export type MediaItem = {
  id: string;
  title: string;
  alt: string;
  image: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const heroStats = ["витамин D3", "омега 3", "кокосовый сахар"];

export const kidsBenefits: BenefitItem[] = [
  {
    title: "Веселее на вкус",
    description: "Аппетитная подача, порционный формат и яркий визуал делают Tiggi желанным уже с первого взгляда.",
    icon: Candy,
  },
  {
    title: "Энергия для игр",
    description: "Бренд говорит не про сладость ради сладости, а про радость, движение и активный детский день.",
    icon: Zap,
  },
  {
    title: "Удобно брать с собой",
    description: "Плитки легко положить в рюкзак, ланчбокс или сумку на прогулку и в дорогу.",
    icon: Baby,
  },
];

export const parentBenefits: BenefitItem[] = [
  {
    title: "Понятный состав",
    description: "Натуральные ингредиенты и понятная ценность продукта формируют доверие без лишних обещаний.",
    icon: Leaf,
  },
  {
    title: "Больше пользы",
    description: "Коммуникация строится вокруг витамина D3, омега 3 и замены сахара на кокосовый.",
    icon: ShieldCheck,
  },
  {
    title: "Премиум-ощущение",
    description: "Даже недорогой продукт воспринимается как качественный современный выбор для семьи.",
    icon: HeartHandshake,
  },
];

export const ingredientCards = [
  {
    title: "Кокосовый сахар",
    badge: "мягкая сладость",
    description: "Альтернатива обычному сахару с более современной и premium-коммуникацией пользы.",
    icon: SunMedium,
  },
  {
    title: "Омега 3",
    badge: "для ежедневной рутины",
    description: "Ассоциируется с вниманием к развитию, иммунитету и повседневному балансу рациона.",
    icon: MoonStar,
  },
  {
    title: "Витамин D3",
    badge: "умный ингредиент",
    description: "Создает сильное рациональное основание для покупки со стороны родителей.",
    icon: BadgeCheck,
  },
  {
    title: "Порционный формат",
    badge: "удобно везде",
    description: "Контроль порции и удобство использования усиливают конверсию лучше, чем абстрактные обещания.",
    icon: Trophy,
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "gallery-1",
    title: "Hero Packshot",
    alt: "Премиальная упаковка детского шоколада Tiggi на карамельном фоне",
    image: createT2IUrl(
      "premium kids chocolate packaging hero shot, warm creamy caramel backdrop, glossy chocolate pieces floating, subtle cocoa particles, luxury playful aesthetic, commercial food photography, high detail",
      "portrait_16_9",
    ),
    size: "lg",
  },
  {
    id: "gallery-2",
    title: "Family Moment",
    alt: "Ребенок и родитель с шоколадом Tiggi в светлом lifestyle интерьере",
    image: createT2IUrl(
      "happy parent and child enjoying premium kids chocolate snack at home, natural morning light, cozy beige interior, lifestyle photography, authentic smile, premium DTC brand aesthetic",
      "portrait_4_3",
    ),
    size: "md",
  },
  {
    id: "gallery-3",
    title: "Lunchbox",
    alt: "Порционный шоколад Tiggi в ланчбоксе рядом с фруктами",
    image: createT2IUrl(
      "kids chocolate portions in a lunchbox with sliced fruit and milk, clean top-down composition, warm cream palette, ecommerce photography, premium playful style",
      "square_hd",
    ),
    size: "sm",
  },
  {
    id: "gallery-4",
    title: "Texture",
    alt: "Фактура шоколада и какао-крошки крупным планом",
    image: createT2IUrl(
      "macro shot of chocolate texture with cocoa crumbs and creamy highlights, appetizing food macro, luxury chocolate brand visual, soft shadows",
      "square_hd",
    ),
    size: "sm",
  },
  {
    id: "gallery-5",
    title: "Gift Style",
    alt: "Шоу-бокс Tiggi как premium-подарок для семьи",
    image: createT2IUrl(
      "premium chocolate box for kids presented like a luxury family gift, soft ribbon, beige and chocolate tones, ecommerce editorial photography",
      "portrait_4_3",
    ),
    size: "md",
  },
  {
    id: "gallery-6",
    title: "Play Table",
    alt: "Детский шоколад Tiggi на игровом столе рядом с книгами и игрушками",
    image: createT2IUrl(
      "premium kids chocolate placed on a playful activity table with books and wooden toys, warm daylight, editorial ecommerce photography, soft beige and caramel palette, premium playful luxury brand",
      "portrait_4_3",
    ),
    size: "sm",
  },
  {
    id: "gallery-7",
    title: "Backpack Ready",
    alt: "Порционный шоколад Tiggi, подготовленный для школы и прогулки",
    image: createT2IUrl(
      "kids chocolate snack portions next to an open backpack, fruit, water bottle and lunch accessories, modern family lifestyle, premium DTC visual, warm neutral styling",
      "portrait_4_3",
    ),
    size: "md",
  },
  {
    id: "gallery-8",
    title: "Shelf Moment",
    alt: "Упаковки Tiggi в аккуратной домашней кухонной зоне",
    image: createT2IUrl(
      "premium kids chocolate packages styled on a modern kitchen shelf, warm cream walls, subtle sunlight, luxury family product styling, clean ecommerce editorial scene",
      "portrait_4_3",
    ),
    size: "sm",
  },
];

export const flavors: Flavor[] = [
  {
    id: "milk",
    title: "Молочный",
    subtitle: "Нежный и сливочный",
    accent: "from-[#f5d6a5] via-[#f8e5c9] to-[#fff5e6]",
    description: "Самый дружелюбный вкус для ежедневного знакомства с брендом и мягкого wow-эффекта у ребенка.",
    benefits: ["сливочный профиль", "мягкий вкус", "удобен на каждый день"],
    image: createT2IUrl(
      "milk chocolate bar for kids, creamy filling style mood, caramel cream color palette, premium packaging, playful luxury food commercial",
      "portrait_4_3",
    ),
  },
  {
    id: "dark",
    title: "Горький",
    subtitle: "Глубже и насыщеннее",
    accent: "from-[#5b2e1f] via-[#7c4934] to-[#b36f50]",
    description: "Более взрослый и насыщенный акцент для родителей, которые ищут выразительный шоколадный характер.",
    benefits: ["глубокий какао-акцент", "дорогой вкус", "эффект premium выбора"],
    image: createT2IUrl(
      "dark chocolate bar for kids brand, elegant cocoa rich styling, premium packaging, dramatic but warm lighting, luxury ecommerce food shot",
      "portrait_4_3",
    ),
  },
];

export const reviews: Review[] = [
  {
    id: "review-1",
    author: "Марина",
    city: "Москва",
    rating: 5,
    quote: "Визуально выглядит как дорогой бренд, а по факту это очень удобный перекус, который ребенок действительно просит сам.",
    highlight: "ребенок просит сам",
  },
  {
    id: "review-2",
    author: "Елена",
    city: "Санкт-Петербург",
    rating: 5,
    quote: "Мне понравилось, что у продукта есть понятная логика пользы и аккуратный формат. Не просто сладость, а продуманный выбор.",
    highlight: "продуманный выбор",
  },
  {
    id: "review-3",
    author: "Анна",
    city: "Казань",
    rating: 5,
    quote: "Шоу-бокс отлично зашел для дома и поездок. Выглядит красиво, хранить удобно, а детям очень нравится вкус.",
    highlight: "удобно хранить",
  },
];

export const proofPoints = [
  { label: "сценария покупки", value: "3" },
  { label: "ключевых proof-сигнала", value: "12+" },
  { label: "главных вкуса", value: "2" },
  { label: "эмоций в первом экране", value: "100%" },
];

export const storyMoments: MediaItem[] = [
  {
    id: "story-1",
    title: "Breakfast Glow",
    alt: "Шоколад Tiggi в утреннем семейном завтраке с мягким солнечным светом",
    image: createT2IUrl(
      "premium kids chocolate at a warm family breakfast table, creamy tones, natural sunlight, milk and fruit nearby, editorial lifestyle food photography, premium playful luxury",
      "portrait_4_3",
    ),
  },
  {
    id: "story-2",
    title: "After School",
    alt: "Ребенок после школы с шоколадом Tiggi в светлом современном интерьере",
    image: createT2IUrl(
      "school age child enjoying a premium chocolate snack after school in a bright modern apartment, cozy neutral interior, authentic lifestyle photography, high-end DTC brand campaign",
      "portrait_4_3",
    ),
  },
  {
    id: "story-3",
    title: "Packed With Care",
    alt: "Аккуратно собранный набор перекуса с Tiggi для дороги или прогулки",
    image: createT2IUrl(
      "carefully packed family snack set with premium kids chocolate, fruit, milk and beige textile bag, top view product styling, modern ecommerce campaign image",
      "square_hd",
    ),
  },
];

export const socialProofImages: MediaItem[] = [
  {
    id: "proof-1",
    title: "Parent Trust",
    alt: "Родитель выбирает Tiggi среди детских перекусов на светлой кухне",
    image: createT2IUrl(
      "parent choosing premium kids chocolate snack on a bright kitchen counter, clean packaging visible, trustworthy family brand mood, lifestyle commercial photography",
      "square_hd",
    ),
  },
  {
    id: "proof-2",
    title: "Snack Routine",
    alt: "Повседневный семейный перекус с Tiggi и фруктами",
    image: createT2IUrl(
      "everyday family snack routine with premium kids chocolate and fresh fruit, elegant warm tones, lifestyle ecommerce image, premium but playful composition",
      "square_hd",
    ),
  },
  {
    id: "proof-3",
    title: "Gift Box",
    alt: "Шоу-бокс Tiggi в премиальной домашней подаче",
    image: createT2IUrl(
      "premium kids chocolate show box styled at home like a luxury family treat, soft fabric, creamy highlights, editorial DTC product shot",
      "square_hd",
    ),
  },
  {
    id: "proof-4",
    title: "Happy Bite",
    alt: "Ребенок с довольной эмоцией во время перекуса Tiggi",
    image: createT2IUrl(
      "happy child taking a bite of premium kids chocolate snack, candid lifestyle campaign, bright natural light, safe and joyful family brand aesthetic",
      "square_hd",
    ),
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Почему Tiggi воспринимается как более premium-бренд?",
    answer:
      "Потому что продукт подается через качественную визуальную систему, clear benefits, аккуратный тон коммуникации и современный D2C-подход к доверию.",
  },
  {
    id: "faq-2",
    question: "Чем этот шоколад удобен для родителей?",
    answer:
      "Порционный формат легко брать с собой, проще контролировать перекус и понятнее встроить продукт в ежедневную рутину семьи.",
  },
  {
    id: "faq-3",
    question: "Куда ведет кнопка “Купить сейчас”?",
    answer:
      "Кнопка переводит в официальный магазин Tiggi Kids, чтобы пользователь мог сразу перейти к покупке без лишних шагов.",
  },
  {
    id: "faq-4",
    question: "Какие вкусы представлены на сайте?",
    answer:
      "На сайте акцентируются два основных направления: молочный и горький детский шоколад, а также show-box форматы.",
  },
];

export const brandStory = [
  "Tiggi начинается с простой идеи: детский шоколад может быть не просто вкусным, а современным, продуманным и визуально желанным для всей семьи.",
  "Бренд говорит на языке энергии, движения и радости, но при этом дает родителям рациональные причины доверять составу и формату.",
  "Именно поэтому новый сайт строится как premium D2C-витрина, где каждый экран отвечает на один вопрос: почему покупать стоит именно Tiggi.",
];

export const shopUrl = "https://tiggi-kids.com/magazin";
