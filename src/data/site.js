export const business = {
  name: "Ronson Equipment Co., LLC",
  category: "Construction machine dealer",
  website: "https://ronsonequipment.com/",
  email: null,
  rating: { value: 5, count: 12, source: "supplied" },
  phones: {
    lowell: { label: "Lowell", display: "(219) 696-5680", tel: "+12196965680" },
    westville: { label: "Westville", display: "(219) 785-2909", tel: "+12197852909" },
    tollFree: { label: "Toll-free", display: "(866) 350-5538", tel: "+18663505538" },
  },
  faxes: {
    lowell: "(219) 696-5690",
    westville: "(219) 785-2908",
  },
  locations: [
    {
      id: "lowell",
      name: "Lowell",
      street: "18030 Wicker Ave",
      city: "Lowell",
      region: "IN",
      postal: "46356",
      phoneKey: "lowell",
      fax: "(219) 696-5690",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=18030+Wicker+Ave,+Lowell,+IN+46356",
      note: "Supplied address and the stock-record state say Indiana. The dealer site header sometimes prints this ZIP as Lowell IL.",
    },
    {
      id: "westville",
      name: "Westville",
      street: "10761 West Coulter Road",
      city: "Westville",
      region: "IN",
      postal: "46391",
      phoneKey: "westville",
      fax: "(219) 785-2908",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=10761+West+Coulter+Road,+Westville,+IN+46391",
      note: "Second yard listed on the dealer site. Hours of operation were not in the supplied facts.",
    },
  ],
  brands: [
    { name: "Kioti Tractors", href: "https://www.kioti.com/" },
    { name: "Kobelco Excavators", href: "https://www.kobelco-usa.com/excavators" },
    { name: "Develon Equipment", href: "https://na.develon-ce.com/en" },
    { name: "ASV", href: "https://www.asvi.com/" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/Ronson-Equipment-Co-of-Westville-100046370153706/",
    },
    { name: "Instagram", href: "https://www.instagram.com/ronsonequipmentco/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/ronson-equipment-co" },
  ],
  homepageMedia: [
    {
      src: "/img/gbp-1.jpg",
      alt: "Yanmar compact excavator and a Develon excavator parked in a gravel yard beside a metal building.",
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9R8k4xDwV5y_bgoxwdi0iEG5q9eRk99CretBHVdvOqMpOmNq5UE_s6YMHCyET80zHRt8Gm-Ow53_hPIp4te7egBlN-BZLKG0dLGGYhP6lHpATkhq1aw1CObSKDK13lLpWSKhov6=w1600-h1600",
      credit: "Google Business Profile photo",
    },
    {
      src: "/img/gbp-2.jpg",
      alt: "Orange Doosan excavator chained to a lowboy trailer behind a red truck in a paved lot.",
      sourceUrl:
        "https://lh3.googleusercontent.com/gps-cs-s/ANWiy9QVO59XBnt5c9E9dW4devTdmwzkyG4TWDo_YHqtecwbiYpqlXOTK7HM1C8nIrdl61OzKVwg86xEWMVE3DvyToFMWApKeC062RG35fpRx8mQcCnzAJidfjql1IKvhXLfI31Tuck=w1600-h1600",
      credit: "Google Business Profile photo",
    },
  ],
};

export const primaryNav = [
  { label: "Home", to: "/" },
  { label: "Catalog", to: "/catalog" },
  { label: "Service", to: "/services" },
  { label: "Locations", to: "/locations" },
  { label: "Contact", to: "/contact" },
];

export const footerGroups = [
  {
    title: "Sample storefront",
    links: [
      { label: "Home", to: "/" },
      { label: "Catalog", to: "/catalog" },
      { label: "About", to: "/about" },
      { label: "Cart", to: "/cart" },
      { label: "Test checkout", to: "/checkout" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "On the dealer site",
    links: [
      { label: "Full inventory", href: "https://ronsonequipment.com/inventory/" },
      { label: "Parts request", href: "https://ronsonequipment.com/parts/" },
      { label: "Service request", href: "https://ronsonequipment.com/service-request/" },
      { label: "Rentals", href: "https://ronsonequipment.com/rental-info/" },
      { label: "Showrooms", href: "https://ronsonequipment.com/showrooms/" },
      { label: "Attachments", href: "https://ronsonequipment.com/attachments-implements/" },
      { label: "About the dealer", href: "https://ronsonequipment.com/about-us/" },
      { label: "Map and hours", href: "https://ronsonequipment.com/map-hours/" },
    ],
  },
  {
    title: "Policies on the dealer site",
    links: [
      { label: "Privacy", href: "https://ronsonequipment.com/privacy/" },
      { label: "Terms", href: "https://ronsonequipment.com/terms-conditions/" },
      { label: "Disclaimer", href: "https://ronsonequipment.com/disclaimer/" },
    ],
  },
];
