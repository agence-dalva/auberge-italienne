export type Dish = {
  name: string;
  description?: string;
  price: string;
  veg?: boolean;
  note?: string;
};

export type MenuSection = {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: Dish[];
};

export const menuSections: MenuSection[] = [
  {
    id: "antipasti",
    title: "Antipasti à partager",
    items: [
      {
        name: "Petite planchette (2 à 3 pers.)",
        description: "Sélection de charcuterie italienne",
        price: "16,90 €",
      },
      {
        name: "Grande planchette (4 à 5 pers.)",
        description:
          "Charcuterie italienne, légumes marinés, spécialités de fritures italiennes",
        price: "29,90 €",
      },
      {
        name: "Pinsa Romana (2 à 3 pers.)",
        description:
          "Pâte à Pinsa, stracciatella, tomates cerises, roquette, ail, pesto maison, huile d’olive des Pouilles",
        price: "19,90 €",
      },
      {
        name: "Frittini Misti (2 à 3 pers.)",
        description: "Assortiment de mini fritures italiennes",
        price: "16,90 €",
        veg: true,
      },
      {
        name: "Mega planchette (12 à 14 pers.)",
        description:
          "Sélection de charcuterie italienne, frittini misti, pinsa romana, légumes marinés, fromages italiens",
        price: "95,90 €",
      },
    ],
  },
  {
    id: "petites-entrees",
    title: "Nos petites entrées",
    items: [
      {
        name: "Carpaccio de bœuf",
        description:
          "Fines tranches de filet de bœuf, grana padano, huile d’olive des Pouilles",
        price: "14,90 €",
      },
      {
        name: "Vitello Tonnato",
        description:
          "Fines tranches de veau à la sauce au thon mayonnaise, anchois, câpres",
        price: "14,90 €",
      },
      {
        name: "L’italienne",
        description: "Jambon cru San Daniele, burrata, basilic frais",
        price: "14,90 €",
      },
      {
        name: "La Caprese",
        description: "Tomates sélection, burrata",
        price: "14,90 €",
        veg: true,
      },
    ],
  },
  {
    id: "plats-froids",
    title: "Nos plats froids",
    items: [
      {
        name: "Carpaccio de bœuf",
        description:
          "Fines tranches de filet de bœuf, grana padano, huile d’olive des Pouilles, servies avec des frites",
        price: "22,90 €",
      },
      {
        name: "Vitello Tonnato",
        description:
          "Fines tranches de veau à la sauce au thon mayonnaise, anchois, câpres, servies avec des frites",
        price: "22,90 €",
      },
      {
        name: "Salade de Poulet",
        description:
          "Salade, filet de poulet pané maison, tomates cerises, éclats de pistaches, concombre, grana padano, roquette, maïs, œuf dur",
        price: "21,90 €",
      },
      {
        name: "Salade estivale",
        description:
          "Salade, jambon cru San Daniele, tomates cerises, avocat, olives noires, basilic frais, burrata",
        price: "24,90 €",
      },
      {
        name: "Salade pêcheur",
        description:
          "Salade, crevettes grillées, pavé de saumon, avocat, oignons, concombre, câpres, maïs, burrata",
        price: "26,90 €",
      },
      {
        name: "Salade Don Roberto",
        description:
          "Salade, crevettes grillées, avocat, mangue, tomates cerises, oignons rouges, poivrons, melon, citron",
        price: "26,90 €",
      },
    ],
  },
  {
    id: "signatures",
    title: "Nos Plats Signatures",
    items: [
      {
        name: "Risotto de la Mer",
        description:
          "Sauce crémeuse safranée, crevettes grillées, Saint-Jacques, beurre, parmesan",
        price: "26,90 €",
      },
      {
        name: "Tartare de Bœuf Don Filippo",
        description:
          "Tartare charolais coupé au couteau assaisonné de façon traditionnelle avec notre touche italienne, grana padano, tomates séchées, jambon San Daniele, éclats de pistaches, servi avec frites et salade",
        price: "26,90 €",
      },
      {
        name: "La Piccata de l’Auberge",
        description:
          "Filet mignon de veau enrobé de jaune d’œuf, fromage Asiago, parmesan, servi avec tagliatelles à l’huile d’olive des Pouilles, ail et tomates cerises",
        price: "32,90 €",
      },
    ],
  },
  {
    id: "terroir",
    title: "Nos Spécialités du terroir italien",
    items: [
      {
        name: "Grillades à l’italienne",
        description:
          "Poulet, filet de veau, saucisses italiennes, bœuf, servis avec frites, salade et la sauce de l’Auberge",
        price: "32,90 €",
      },
      {
        name: "Filet mignon de veau",
        description:
          "Sauce crème aux champignons frais, servi avec frites et salade",
        price: "32,90 €",
      },
      {
        name: "La Milanaise de l’Auberge",
        description:
          "Filet de poulet pané à l’italienne (parmesan) servi avec tagliatelles napolitaines",
        price: "26,90 €",
      },
      {
        name: "Tagliata de bœuf",
        description:
          "Tranches de bœuf, tomates cerises, grana padano, roquette, servies avec frites et salade",
        price: "32,90 €",
      },
      {
        name: "Brochette de bœuf",
        description:
          "Bœuf tendre mariné à l’italienne, servi avec frites et salade. Sauce au choix : béarnaise ou poivre",
        price: "32,90 €",
      },
    ],
  },
  {
    id: "pates",
    title: "Nos Pâtes fraîches",
    items: [
      {
        name: "Tagliatelles Don Carlo",
        description:
          "Sauce tomate, crevettes grillées, courgette, tomates cerises, pesto maison",
        price: "23,90 €",
      },
      {
        name: "Tagliatelles des Pouilles",
        description: "Sauce tomate, pesto maison, boulettes de bœuf, pancetta",
        price: "23,90 €",
      },
      {
        name: "Gnocchis Alfredo",
        description:
          "Boulettes de pâte italienne (flocons de pommes de terre, farine de blé tendre, œufs et lait), sauce crémeuse, filet de poulet, beurre, sauge, parmesan, champignons",
        price: "23,90 €",
      },
      {
        name: "Gnocchis Don Corleone",
        description:
          "Boulettes de pâte italienne (flocons de pomme de terre, farine de blé tendre, œufs et lait), huile d’olive des Pouilles, tomates cerises, courgette, stracciatella, grana padano, roquette",
        price: "23,90 €",
        veg: true,
      },
    ],
  },
  {
    id: "ravioles",
    title: "Nos Ravioles artisanales",
    note: "Nos sauces sont faites maison par nos chefs",
    items: [
      {
        name: "Ravioles au Citron",
        description:
          "Pâtes fraîches (farcies à la ricotta, parmesan, citron, pignons, gingembre), sauce brune aux copeaux de parmesan, stracciatella, citron frais, asperges fraîches",
        price: "24,90 €",
        veg: true,
      },
      {
        name: "Ravioles Don Stefano",
        description:
          "Pâtes fraîches (farcies à la viande de bœuf, oignons, vin rouge, carottes), sauce tomate, boulettes de bœuf, burrata, basilic frais",
        price: "26,90 €",
      },
      {
        name: "Ravioles à la Truffe Don Giacomo",
        description:
          "Pâtes fraîches (farcies à la truffe, pommes de terre, ricotta, parmesan, ciboulette), sauce crémeuse, champignons, burrata, Prosecco, pétales de truffe",
        price: "26,90 €",
        veg: true,
      },
    ],
  },
  {
    id: "pinsa",
    title: "Nos Pinsa",
    subtitle:
      "La pâte à Pinsa est une cousine de la Pizza napolitaine, recette qui remonte à la Rome Antique et qui est composée de farine de blé, farine de riz et farine de soja.",
    note: "Possibilité sans gluten pour toutes nos pâtes à pinsa",
    items: [
      {
        name: "La Margherita",
        description: "Sauce tomate, mozzarella Fiordilatte, basilic frais",
        price: "16,90 €",
        veg: true,
      },
      {
        name: "La Romantica",
        description:
          "Sauce tomate, mozzarella Fiordilatte, champignons, poivron, oignons, aubergine, courgette, tomates cerises, roquette",
        price: "17,90 €",
        veg: true,
      },
      {
        name: "La Bella Vita Don Gilio",
        description:
          "Sauce tomate, mozzarella Fiordilatte, fromage Fontina, salami piquant italien, éclats de pistaches",
        price: "18,90 €",
      },
      {
        name: "La Salento",
        description:
          "Crème légère, mozzarella Fiordilatte, mortadelle à la pistache, burrata, tomates cerises, éclats de pistaches",
        price: "18,90 €",
      },
      {
        name: "La San Daniele",
        description:
          "Sauce tomate, mozzarella Fiordilatte, jambon cru San Daniele, roquette, tomates cerises",
        price: "18,90 €",
      },
      {
        name: "La Tartufo",
        description:
          "Crème légère à la truffe d’été, mozzarella Fiordilatte, jambon blanc italien, champignons, burrata, pétales de truffes d’été",
        price: "22,90 €",
      },
    ],
  },
  {
    id: "enfant",
    title: "Assiette enfant",
    subtitle: "Pour les moins de 10 ans",
    items: [
      {
        name: "Filet de poulet pané maison",
        description: "Servi avec frites",
        price: "12,90 €",
      },
      {
        name: "Pâtes à la sauce tomate de l’Auberge",
        price: "12,90 €",
        veg: true,
      },
    ],
  },
  {
    id: "cocktails-signatures",
    title: "Cocktails — Nos Signatures",
    items: [
      {
        name: "Cocktail de l’Auberge",
        description: "Selon la folie du barman",
        price: "10,90 €",
      },
      {
        name: "Porn Star Martini",
        description:
          "Vodka, Passoa®, jus de citron vert, sirop vanille, purée de passion, shot de Prosecco",
        price: "10,90 €",
      },
      {
        name: "Expresso Martini",
        description: "Vodka, expresso froid, liqueur de café, sirop de canne",
        price: "10,90 €",
      },
      {
        name: "Moscow Mule",
        description: "Vodka, jus de citron, Schweppes® gingembre",
        price: "10,90 €",
      },
      {
        name: "London Mule",
        description: "Gin, jus de citron, Schweppes® gingembre",
        price: "10,90 €",
      },
    ],
  },
  {
    id: "cocktails",
    title: "Nos Cocktails",
    items: [
      {
        name: "Hugo",
        description:
          "Prosecco, sirop de fleur de sureau, limonade, menthe fraîche, citron vert",
        price: "9,90 €",
      },
      {
        name: "Spritz Aperol",
        description: "Prosecco, Aperol®, limonade",
        price: "9,90 €",
      },
      {
        name: "Spritz Limoncello",
        description: "Prosecco, Limoncello, limonade",
        price: "9,90 €",
      },
      {
        name: "Spritz Sarti",
        description:
          "Prosecco, liqueur à l’orange sanguine, mangue et passion, limonade",
        price: "9,90 €",
      },
      {
        name: "Spritz Campari",
        description: "Prosecco, Campari®, limonade",
        price: "9,90 €",
      },
      {
        name: "Mojito Classique",
        description: "Rhum blanc, limonade, menthe, citron vert",
        price: "9,90 €",
      },
      {
        name: "Mojito Limoncello",
        description: "Limoncello, limonade, menthe, citron vert",
        price: "9,90 €",
      },
      {
        name: "Mojito Sarti",
        description:
          "Passoa®, liqueur à l’orange sanguine, mangue et passion, limonade, menthe, citron vert",
        price: "9,90 €",
      },
      {
        name: "Cuba Libre",
        description: "Rhum brun, Coca-Cola®, citron vert",
        price: "8,90 €",
      },
      { name: "Whisky Coca", price: "8,90 €" },
      { name: "Gin Tonic", price: "8,90 €" },
      { name: "Campari Orange", price: "8,90 €" },
      { name: "Campari Tonic", price: "8,90 €" },
      { name: "Martini Schweppes", description: "Blanc ou rouge", price: "8,90 €" },
    ],
  },
  {
    id: "sans-alcool",
    title: "Cocktails sans alcool",
    items: [
      {
        name: "Virgin Mojito",
        description: "Limonade, menthe, citron vert",
        price: "8,00 €",
      },
      {
        name: "Dolce Vita",
        description: "Jus d’ananas, sirop vanille, sirop de basilic",
        price: "8,00 €",
      },
      {
        name: "Stelle",
        description: "Schweppes® gingembre, jus de citron vert, menthe",
        price: "8,00 €",
      },
    ],
  },
  {
    id: "aperitifs",
    title: "Nos Apéritifs",
    items: [
      { name: "Campari®", price: "6,00 €" },
      { name: "Martini®", description: "Blanc ou rouge", price: "6,00 €" },
      { name: "Porto", price: "6,00 €" },
      { name: "Américano", description: "Martini® rouge, Campari®", price: "7,90 €" },
      { name: "Negroni", description: "Gin, Martini® rouge, Campari®", price: "8,90 €" },
      { name: "Suze®", price: "6,00 €" },
      { name: "Ricard®", price: "6,00 €" },
      { name: "Tomate", description: "Ricard®, sirop grenadine", price: "6,00 €" },
      { name: "Perroquet", description: "Ricard®, sirop menthe", price: "6,00 €" },
      { name: "Kir Vin Blanc", description: "Pêche / cassis / violette", price: "6,00 €" },
      { name: "Kir Prosecco", description: "Pêche / cassis / violette", price: "7,00 €" },
      { name: "Coupe Prosecco", price: "6,90 €" },
    ],
  },
  {
    id: "bieres",
    title: "Nos bières",
    subtitle: "Prix 25 cl / 50 cl",
    items: [
      { name: "Moretti®", price: "4,50 € / 6,90 €" },
      { name: "Bière du mois", price: "4,50 € / 6,90 €" },
      { name: "Amer, Picon, Cynar", price: "4,50 € / 6,90 €" },
      {
        name: "Bière sirop",
        description: "Grenadine / pêche / violette / menthe / citron",
        price: "4,50 € / 6,90 €",
      },
      { name: "Monaco", price: "4,50 € / 6,90 €" },
      { name: "Panaché", price: "4,50 € / 6,90 €" },
      { name: "Moretti® 0.0", description: "Bouteille 33 cl", price: "4,90 €" },
    ],
  },
  {
    id: "boissons-froides",
    title: "Nos boissons froides",
    items: [
      { name: "Eau plate / pétillante", description: "50 cl", price: "3,50 €" },
      { name: "Eau plate / pétillante", description: "1 L", price: "6,00 €" },
      { name: "Coca-Cola® Classique", description: "33 cl", price: "3,90 €" },
      { name: "Coca-Cola® Zéro", description: "33 cl", price: "3,90 €" },
      { name: "Thé pêche", description: "33 cl", price: "3,90 €" },
      { name: "Schweppes® Tonic", description: "25 cl", price: "3,90 €" },
      { name: "Schweppes® Gingembre", description: "25 cl", price: "3,90 €" },
      { name: "San Bitter", description: "10 cl", price: "3,90 €" },
      { name: "Perrier®", description: "33 cl", price: "3,90 €" },
      {
        name: "Perrier® Sirop",
        description: "33 cl — grenadine / pêche / violette / menthe / citron",
        price: "3,90 €",
      },
      {
        name: "Sirop à l’eau",
        description: "33 cl — grenadine / pêche / violette / menthe / citron",
        price: "3,00 €",
      },
      {
        name: "Diabolo",
        description: "33 cl — grenadine / pêche / violette / menthe / citron",
        price: "3,50 €",
      },
      {
        name: "Jus de fruits",
        description: "25 cl — orange / tomate / pomme / ananas",
        price: "3,90 €",
      },
      { name: "Limonade", description: "33 cl", price: "3,00 €" },
    ],
  },
];
