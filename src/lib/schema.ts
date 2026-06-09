export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tiggi Kids Chocolate",
    url: "https://tiggi-kids.com",
    logo: "https://tiggi-kids.com/favicon.ico",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+7-800-700-35-31",
      contactType: "customer support",
      areaServed: "RU",
      availableLanguage: ["Russian"],
    },
    sameAs: ["https://tiggi-kids.com"],
  };
}

export function buildProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Tiggi Kids Chocolate",
    brand: {
      "@type": "Brand",
      name: "Tiggi Kids",
    },
    category: "Детский шоколад",
    description:
      "Порционный детский шоколад с современным premium-подходом: удобный формат, натуральные ингредиенты, витамины D3 и омега 3.",
    image: [
      "https://tiggi-kids.com",
    ],
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "RUB",
      lowPrice: "1454",
      highPrice: "2079",
      availability: "https://schema.org/InStock",
      offerCount: 4,
      url: "https://tiggi-kids.com/magazin",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Формат",
        value: "Порционные плитки",
      },
      {
        "@type": "PropertyValue",
        name: "Особенности",
        value: "Витамин D3, омега 3, кокосовый сахар",
      },
    ],
  };
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Почему Tiggi нравится родителям?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Родители ценят натуральные ингредиенты, удобный формат порций и понятную подачу пользы без ощущения обычной сладости.",
        },
      },
      {
        "@type": "Question",
        name: "Есть ли у Tiggi разные вкусы?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Да, бренд предлагает молочный и горький варианты, а также шоу-боксы для удобной покупки и хранения.",
        },
      },
      {
        "@type": "Question",
        name: "Куда ведет кнопка покупки?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Кнопки покупки переводят пользователя в официальный магазин Tiggi Kids, где можно оформить заказ.",
        },
      },
    ],
  };
}
