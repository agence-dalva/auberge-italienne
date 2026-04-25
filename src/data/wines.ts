export type Wine = {
  name: string;
  appellation?: string;
  bottle?: string;
  glass?: string;
  quarter?: string;
  half?: string;
  grape?: string;
  aging?: string;
  character?: string;
  pairing?: string;
  alcohol?: string;
};

export type WineSection = {
  id: string;
  title: string;
  subtitle?: string;
  wines: Wine[];
};

export const wineSections: WineSection[] = [
  {
    id: "auberge",
    title: "Les vins de l’Auberge",
    subtitle: "Notre cuvée maison en exclusivité — Salento I.G.P.",
    wines: [
      {
        name: "L’Auberge Italienne Primitivo",
        appellation: "Salento I.G.P.",
        bottle: "28,90 €",
        glass: "4,90 €",
        quarter: "8,90 €",
        half: "16,50 €",
        grape: "100 % Primitivo",
        character:
          "Rouge sombre aux reflets violets. Nez intense de cerise et de prune. Bouche veloutée, harmonieuse et persistante.",
        pairing:
          "Pâtes, viandes rôties, gibier et fromages affinés.",
        alcohol: "13 % vol.",
      },
      {
        name: "L’Auberge Italienne Malvasia Rosato",
        appellation: "Salento I.G.P.",
        bottle: "28,90 €",
        glass: "4,90 €",
        quarter: "8,90 €",
        half: "16,50 €",
        grape: "100 % Malvasia Nera",
        character:
          "Rosé tendant vers le cerasuolo avec des reflets corail. Bouquet délicat à tendance fruitée. Sec, harmonieux, avec une agréable note finale légèrement amère.",
        pairing:
          "Entrées en général, plats de poisson, poisson au four et viandes blanches.",
        alcohol: "12,5 % vol.",
      },
      {
        name: "L’Auberge Italienne Chardonnay",
        appellation: "Salento I.G.P.",
        bottle: "28,90 €",
        glass: "4,90 €",
        quarter: "8,90 €",
        half: "16,50 €",
        grape: "100 % Chardonnay",
        character:
          "Jaune paille aux reflets verdâtres. Bouquet délicat, agréablement fruité. Frais, harmonieux et savoureux.",
        pairing:
          "Excellent en apéritif, avec les antipasti et les entrées à base de poisson. Convient aussi aux crustacés.",
        alcohol: "12 % vol.",
      },
    ],
  },
  {
    id: "rouges",
    title: "Vins rouges",
    wines: [
      {
        name: "Montepulciano d’Abruzzo Tralcetto",
        appellation: "D.O.C.",
        bottle: "32,00 €",
        grape: "Montepulciano",
        aging: "6 à 12 mois en fûts de chêne",
        character: "Rouge rubis intense",
        pairing: "Viandes rouges, rôtis, fromages affinés",
        alcohol: "12,5 %",
      },
      {
        name: "Yago Salice Salentino",
        appellation: "D.O.P.",
        bottle: "29,90 €",
        grape: "Negroamaro et Malvasia Nera",
        aging: "Élevé en fûts",
        character: "Couleur rouge intense aux reflets violacés.",
        pairing: "Entrées, viandes rôties et fromages affinés.",
        alcohol: "13,5 % vol.",
      },
      {
        name: "Nero d’Avola",
        appellation: "D.O.P.",
        bottle: "32,00 €",
        grape: "100 % Nero d’Avola",
        aging:
          "6 mois en fûts de chêne français, suivis d’environ 3 mois en bouteille",
        character:
          "Prune brillante aux reflets violacés. Arômes de cerise, prune et fruits des bois. Palais frais, vif et légèrement épicé, finale élégante.",
        pairing:
          "Entrées, viandes rôties, grillées, mijotées et fromages affinés.",
        alcohol: "13,5 % vol.",
      },
      {
        name: "Toto Salento Primitivo",
        appellation: "I.G.P.",
        bottle: "29,90 €",
        grape: "100 % Primitivo",
        aging: "15 mois en fûts et barriques de chêne",
        character:
          "Rouge rubis profond aux reflets violacés. Bouquet intense de cerise et de prune, notes épicées après aération. Charpenté mais souple, sec et équilibré.",
        pairing: "Rôtis élaborés, plats savoureux et fromages affinés.",
        alcohol: "14 % vol.",
      },
      {
        name: "Amauri Costa Toscana Rosso",
        appellation: "I.G.P.",
        bottle: "32,00 €",
        grape: "Cabernet Sauvignon, Sangiovese",
        aging:
          "Au moins 12 mois en barriques françaises, puis 12 mois d’affinage en bouteille",
        pairing:
          "Viandes rouges rôties, côte de bœuf à la florentine, fromages affinés (4 à 6 mois).",
        alcohol: "14 % vol.",
      },
      {
        name: "Oscar Copertino",
        appellation: "D.O.P.",
        bottle: "42,00 €",
        grape: "Negroamaro, Malvasia Nera, Montepulciano et Sangiovese",
        aging: "Élevé en fûts",
        character:
          "Rouge rubis intense. Bouquet vineux persistant aux arômes de fruits des bois mûrs et d’épices. Sec, velouté, savoureux et généreux.",
        pairing:
          "Entrées, viandes rôties, grillées, mijotées et fromages affinés.",
        alcohol: "14,5 % vol.",
      },
      {
        name: "Brunello di Montalcino",
        appellation: "D.O.G.C.",
        bottle: "65,00 €",
        grape: "Sangiovese",
        aging:
          "36 mois en grands fûts de chêne de Slavonie, puis 12 mois d’affinage en bouteille",
        character:
          "Rubis pâle aux reflets grenat. Expression souple de fruits rouges, légère note d’encens, finale longue, minérale et saline.",
        alcohol: "14,5 %",
      },
      {
        name: "Rocche dei Manzoni Barolo",
        bottle: "135,00 €",
        grape: "100 % Nebbiolo",
        aging:
          "Élevage en bois puis en ciment, puis affinage supplémentaire en bouteille",
        character:
          "Rubis intense. Bouquet floral et fruité de violette et cerise, notes d’épices et de chocolat. Équilibre élégant, corps soyeux, finale longue.",
        pairing: "Viandes rouges, gibier, fromages affinés.",
        alcohol: "14 % vol.",
      },
      {
        name: "Amarone della Valpolicella",
        appellation: "D.O.C.G.",
        bottle: "95,00 €",
        grape: "Corvina, Rondinella",
        aging: "Vieillissement d’au moins 2 ans, souvent en grands fûts de chêne",
        character:
          "Rouge profond aux reflets grenat. Arômes intenses de fruits noirs mûrs, chocolat, cacao et épices. Puissant, structuré, tanins équilibrés, corps plein et texture veloutée.",
        pairing: "Viandes braisées, rôties, gibier, fromages affinés.",
        alcohol: "15 % vol.",
      },
      {
        name: "Susumaniello",
        appellation: "I.G.P. Puglia",
        bottle: "32,00 €",
        grape: "100 % Susumaniello",
        aging: "Environ 3 mois en cuves d’acier",
        character: "Rouge rubis intense. Bouquet délicat, tendant vers le fruité.",
        pairing: "Rôtis, sauces à base de viande, viandes bouillies.",
        alcohol: "13,5 % vol.",
      },
    ],
  },
  {
    id: "roses",
    title: "Vins rosés",
    wines: [
      {
        name: "Primitivo Rosato",
        appellation: "I.G.P. Salento",
        bottle: "32,00 €",
        grape: "100 % Primitivo",
        aging: "6 mois en cuves d’acier",
        character:
          "Cerise clair, nez délicat, bouche sèche, sapide, harmonieuse et bien structurée.",
        pairing: "Accompagne très bien les antipasti de poisson.",
        alcohol: "13 % vol.",
      },
      {
        name: "Pampana Primitivo Rosato",
        appellation: "I.G.P. Salento",
        bottle: "39,00 €",
        grape: "100 % Primitivo",
        aging: "6 mois en cuves d’acier",
        character:
          "Cerise profonde et brillante. Bouquet riche, fruité et raffiné. Sec, harmonieux, base herbacée et finale légèrement amère.",
        pairing: "Nombreuses combinaisons culinaires, antipasti de poisson.",
        alcohol: "13 % vol.",
      },
      {
        name: "Cerasuolo d’Abruzzo Il Tralcetto",
        appellation: "D.O.C.",
        bottle: "32,00 €",
        grape: "Montepulciano d’Abruzzo",
        aging: "Cuves d’acier",
        character:
          "Rose. Nez harmonieux et parfumé, notes de baies et de pamplemousse. En bouche, délicat et élégant, belle fraîcheur.",
        pairing: "Poissons, viandes blanches, crustacés.",
        alcohol: "12,5 % vol.",
      },
      {
        name: "Chiaretto di Bardolino Infinito – Santi",
        appellation: "D.O.C.G.",
        bottle: "32,00 €",
        grape: "Corvina, Rondinella, Molinara",
        aging: "Cuves inox à froid, protégé contre l’oxydation",
        character:
          "Rose pêche clair, parfois corail ou saumoné. Bouquet élégant, fleurs et fruits rouges frais, nuances de groseille ou grenade.",
        pairing:
          "Apéritifs, entrées légères, antipasti de poisson, crustacés, salades, risotto, pizza.",
        alcohol: "12 % vol.",
      },
      {
        name: "Mesciu Ttàu Salice Salento Rosato",
        appellation: "D.O.P.",
        bottle: "29,90 €",
        grape: "100 % Negroamaro",
        aging: "6 mois en cuves d’acier inox",
        character:
          "Cerasuolo clair à profond, brillant. Nez délicat, riche, notes fruitées raffinées. Bouche sèche, harmonieuse, finale légèrement amère.",
        pairing: "Tout au long du repas, particulièrement antipasti de poisson.",
        alcohol: "13 % vol.",
      },
    ],
  },
  {
    id: "blancs",
    title: "Vins blancs",
    wines: [
      {
        name: "Tralcetto Il Bianco di Ciccio",
        appellation: "A.O.C.",
        bottle: "32,00 €",
        grape: "100 % Trebbiano",
        character:
          "Jaune paille d’intensité moyenne. Bouquet principalement fruits à chair blanche, agrumes et fruits secs.",
        pairing: "Fruits de mer, crustacés, plats végétariens.",
        alcohol: "12 % vol.",
      },
      {
        name: "Donna Tiziana Chardonnay",
        appellation: "Salento I.G.P.",
        bottle: "29,90 €",
        grape: "100 % Chardonnay",
        aging: "Cuves d’acier thermorégulées",
        character:
          "Jaune paille aux reflets verts. Bouquet frais, fruits mûrs. Belle structure, sec, souple, bonne persistance.",
        pairing:
          "Plats aux assaisonnements délicats, poissons, viandes blanches, fromages frais.",
        alcohol: "13 % vol.",
      },
      {
        name: "Soave Classico Colforte – Santi",
        appellation: "D.O.C.",
        bottle: "32,00 €",
        grape: "Garganega, Trebbiano di Soave",
        character:
          "Jaune paille parfois aux reflets verdâtres. Fleurs blanches (sureau, acacia), fruits exotiques, miel d’acacia, touche minérale. Bouche équilibrée, fraîche.",
        pairing:
          "Apéritifs, entrées légères, poissons, fruits de mer, viandes blanches, risotto aux légumes, fromage frais.",
        alcohol: "13 % vol.",
      },
    ],
  },
  {
    id: "petillants",
    title: "Vins pétillants & Champagne",
    wines: [
      {
        name: "Prosecco",
        appellation: "D.O.C.",
        bottle: "35,00 €",
        grape: "100 % Glera",
        character:
          "Jaune paille aux reflets dorés, perlage fin. Nez élégant, fruité : pomme, pêche blanche, agrumes, touche florale d’acacia. Bouche fraîche, vive, raffinée.",
        pairing:
          "Apéritif, cocktails, antipasti de poissons, risotto, viandes, pizza, charcuteries et fromages.",
        alcohol: "11 % vol.",
      },
      {
        name: "Prosecco Bolla Rosé",
        bottle: "32,00 €",
        grape: "Pinot noir, Glera",
        character:
          "Pétale de rose brillante, perlage fin. Pêche blanche, agrumes, fraises des bois. Frais et délicat.",
        pairing: "Apéritif, desserts.",
        alcohol: "11 % vol.",
      },
      {
        name: "Prosecco Bolla",
        bottle: "29,90 €",
        grape: "100 % Glera",
        character:
          "Robe dorée, perlage fin. Parfum délicat et intense. Saveur douce et nette, touche acidulée, fond de fruits et de miel.",
        pairing:
          "Entrées, pâtes délicates, viandes blanches, poisson, pâtisserie. Excellent apéritif.",
        alcohol: "11 % vol.",
      },
      {
        name: "Bellini Cipriani",
        bottle: "35,00 €",
        character:
          "Purée de pêches blanches et Prosecco brut : bouquet élégant, fraîcheur qui exalte la pêche blanche, bulles parfumées.",
        alcohol: "8 % vol.",
      },
      {
        name: "Moscato d’Asti — Ca Bianca",
        bottle: "29,90 €",
        grape: "100 % Moscato blanc",
        character:
          "Jaune paille, noix de muscade, fruits exotiques et acacia. Saveur douce ponctuée de notes florales et de miel.",
        pairing: "Plats sucrés et desserts.",
        alcohol: "5 % vol.",
      },
      {
        name: "Lambrusco Grasparossa di Castelvetro Amabile",
        bottle: "22,90 € (75 cl) — 16,90 € (37,5 cl)",
        grape: "Cabernet Sauvignon, Sangiovese",
        character:
          "Grenat intense. Parfum fruité et pétillant. Bouche douce et agréable, arômes de violette et de framboise.",
        pairing: "Charcuterie, entrées, pizzas, fromages frais.",
        alcohol: "8 % vol.",
      },
      {
        name: "Champagne Don Fabio",
        bottle: "95,00 €",
        grape: "50 % Chardonnay, 50 % Pinot noir",
        character:
          "Bulles fines, robe jaune aux reflets paille. Nez iodé et citronné, notes d’amande fraîche en bouche.",
        pairing:
          "Poissons à chair blanche cuits en papillote, bar ou poissons maigres.",
        alcohol: "12 % vol.",
      },
    ],
  },
];
