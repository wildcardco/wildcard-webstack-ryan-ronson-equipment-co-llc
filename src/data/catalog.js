export const priceObservedOn = "2026-11-15";

export const categories = [
  {
    slug: "excavators",
    name: "Excavators",
    summary: "Mini and compact excavators in this sample.",
  },
  {
    slug: "dozers",
    name: "Dozers",
    summary: "Crawler dozers in this sample.",
  },
  {
    slug: "loaders",
    name: "Loaders",
    summary: "Wheel loaders in this sample.",
  },
];

export const products = [
  {
    id: "PS04-10099",
    slug: "2014-kobelco-sk55srx-6e",
    categorySlug: "excavators",
    name: "2014 KOBELCO SK55SRX-6E",
    year: 2014,
    make: "KOBELCO",
    model: "SK55SRX-6E",
    category: "Excavators",
    condition: "Used",
    stockNumber: "PS04-10099",
    listingId: "2182872",
    price: 35000,
    priceQualifier: "Drive Away",
    priceNote:
      "Listed unit price on the dealer stock record. The same figure is stored as the drive-away price. Tax, freight, and fees are not included here.",
    engineHours: 2685,
    engineHoursNote: "Stock record and the listing description both show 2,685 hours.",
    movement: "Tracked",
    size: "MINI",
    location: "Lowell, Indiana 46356",
    image: "/img/kobelco-sk55srx-6e.webp",
    imageAlt: "Yellow Kobelco compact excavator with a dozer blade, parked on gravel.",
    imageSourceUrl:
      "https://cdn-media.tilabs.io/v1/media/6af47c00a3772b6411079c9b.webp?width=1400",
    sourceUrl:
      "https://ronsonequipment.com/used-items/for-sale/kobelco/sk55srx-6e/2014/2182872/",
    availability: "Listed for sale on the dealer site. Quantity on hand is not verified.",
    description:
      "Used mini excavator listed by Ronson Equipment in Lowell, Indiana. Stock number PS04-10099. The dealer site description is marked as written with AI assistance and tells buyers to confirm details with the seller. This sample keeps the structured listing fields and does not add specs from that description.",
  },
  {
    id: "CAT00D6KTRST01446",
    slug: "2015-caterpillar-d6k2-lgp",
    categorySlug: "dozers",
    name: "2015 CATERPILLAR D6K2 LGP",
    year: 2015,
    make: "CATERPILLAR",
    model: "D6K2 LGP",
    category: "Dozers",
    condition: "Used",
    stockNumber: "CAT00D6KTRST01446",
    listingId: "2182780",
    price: 105000,
    priceQualifier: "Drive Away",
    priceNote:
      "Listed unit price on the dealer stock record. The same figure is stored as the drive-away price. Tax, freight, and fees are not included here.",
    engineHours: 4207,
    engineHoursNote: "Stock record and the listing description both show 4,207 hours.",
    movement: "Tracked",
    size: null,
    location: "Lowell, Indiana 46356",
    image: "/img/caterpillar-d6k2-lgp.webp",
    imageAlt: "Yellow Caterpillar D6K2 LGP dozer with a six-way blade, parked on gravel.",
    imageSourceUrl:
      "https://cdn-media.tilabs.io/v1/media/6af1d6ce1d435a65cd08803c.webp?width=1400",
    sourceUrl:
      "https://ronsonequipment.com/used-items/for-sale/caterpillar/d6k2-lgp/2015/2182780/",
    availability: "Listed for sale on the dealer site. Quantity on hand is not verified.",
    description:
      "Used crawler dozer listed by Ronson Equipment in Lowell, Indiana. Stock number CAT00D6KTRST01446. The dealer site description is marked as written with AI assistance and tells buyers to confirm details with the seller. This sample keeps the structured listing fields and does not add specs from that description.",
  },
  {
    id: "DHKCWLDVSP5050397",
    slug: "2023-develon-dl220-7",
    categorySlug: "loaders",
    name: "2023 DEVELON DL220-7",
    year: 2023,
    make: "DEVELON",
    model: "DL220-7",
    category: "Loaders",
    condition: "New",
    stockNumber: "DHKCWLDVSP5050397",
    listingId: "2182827",
    price: null,
    priceQualifier: "Price on Application",
    priceNote:
      "The stock record price is 0 and the qualifier is Price on Application. This sample does not treat that as a quoted price.",
    engineHours: null,
    engineHoursNote:
      "The stock record field shows 1,018 hours. The listing description text says 919 hours. Hours are not verified.",
    movement: "Wheeled",
    size: null,
    location: "Lowell, Indiana 46356",
    image: "/img/develon-dl220-7.webp",
    imageAlt: "Dark gray Develon DL220 wheel loader with an orange-accented cab and a bucket.",
    imageSourceUrl:
      "https://cdn-media.tilabs.io/v1/media/6af1d9727b9b0769d60bdd0f.webp?width=1400",
    sourceUrl:
      "https://ronsonequipment.com/new-items/for-sale/develon/dl220-7/2023/2182827/",
    availability: "Listed for sale on the dealer site. Quantity on hand is not verified.",
    description:
      "Wheel loader listed by Ronson Equipment in Lowell, Indiana, with the condition field set to New. Stock number DHKCWLDVSP5050397. The dealer site description is marked as written with AI assistance. Hours on that page do not match the stock-record field, so hours stay unverified.",
  },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug) || null;
}

export function getProduct(id) {
  return products.find((product) => product.id === id) || null;
}

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug) || null;
}

export function getProductsByCategory(slug) {
  if (!slug) return products;
  return products.filter((product) => product.categorySlug === slug);
}

export function productPath(product) {
  return `/catalog/${product.categorySlug}/${product.slug}`;
}

export function formatUsd(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function quotedLineAmount(product, qty) {
  if (product.price == null) return null;
  return product.price * qty;
}

export function quotedCartSum(lines) {
  let sum = 0;
  let quotedLines = 0;
  let unquotedLines = 0;
  for (const line of lines) {
    const amount = quotedLineAmount(line.product, line.qty);
    if (amount == null) unquotedLines += 1;
    else {
      sum += amount;
      quotedLines += 1;
    }
  }
  return { sum, quotedLines, unquotedLines };
}
