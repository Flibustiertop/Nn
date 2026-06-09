# Tiggi Kids Chocolate

Премиальный mobile-first D2C сайт для бренда `Tiggi Kids Chocolate`, собранный на `Next.js 15`, `React 19`, `TypeScript`, `Tailwind CSS`, `Framer Motion`, `GSAP`, `Lenis`, `Radix UI` и `Lucide`.

## Что внутри

- Иммерсивный hero-блок с layered визуалом, floating-элементами и scroll motion
- Секции для детей и родителей с premium-карточками и reveal-анимациями
- Блок состава и преимуществ с фокусом на D3, омега 3 и кокосовый сахар
- Masonry-галерея с lightbox и touch-friendly лентой
- Секция вкусов, история бренда, social proof, отзывы и FAQ
- SEO-артефакты: `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `opengraph-image`, `twitter-image`
- Schema.org для `Organization`, `Product` и `FAQPage`

## Технологии

- `Next.js 15.5.19`
- `React 19.2.4`
- `TypeScript 5`
- `Tailwind CSS 4`
- `Framer Motion`
- `GSAP`
- `Lenis`
- `Radix UI`
- `Vitest`

## Команды

```bash
npm install
npm run dev
npm run check
npm test
npm run build
```

## Структура

- `src/app` — App Router, metadata routes, layout, page
- `src/components` — layout, animation, marketing и UI-компоненты
- `src/data` — контент и конфиги секций
- `src/lib` — schema helpers, utils, тесты
- `.trae/documents` — PRD и техническая архитектура

## Примечания

- Для изображений используются production-friendly заглушки через text-to-image API от Trae.
- Основная кнопка покупки ведет в официальный магазин: `https://tiggi-kids.com/magazin`
- Верификация включает `npm run check`, `npm test`, `npm run build` и браузерную проверку локального превью.
