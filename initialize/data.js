import * as brunchImage from '../images/menu-images/brunch.jpeg';
import * as lunchImage from '../images/menu-images/lunch.jpg';
import * as dinnerImage from '../images/menu-images/dinner.jpeg';

const data = {
  "blockquote": {
    "quote": "Chef Lado Dennis serves an inventive and highly-personal eclectic style of cuisine. Paragon walks a line between sophisticated and casual — no tablecloths here, and it’s the sort of space that can cover a glass of wine and a small bite just as well as a full meal.",
    "citation": "Eater NY"
  },
  "menus": {
    "featured": {
      "brunch": {
        "menu": "brunch",
        "name": "fried egg with wild mushrooms and grits",
        "description": "fried egg, asiago cheese grits, shitakes, oyster mushrooms, and chantrelles, paired with a rich spiced tomato sauce",
        "image": brunchImage
      },
      "lunch": {
        "menu": "lunch",
        "name": "egg, frisée, and caramelized onion sandwich",
        "description": "slightly runny egg yolk creates a rich, delicious sauce as it mingles with our homemade fig jam",
        "image": lunchImage
      },
      "dinner": {
        "menu": "dinner",
        "name": "hangar steak with rustic balsamic reduction",
        "description": "paired with a crispy truffle baked potato, wild mushrooms, and smashed avocado",
        "image": dinnerImage
      }
    },
    "brunch": [
      {
        "name": "starters",
        "items": [
          {
            "name": "smoked trout",
            "description": "hard boiled eggs, cornichons, capers, horseradish cream, toast",
            "price": "15"
          },
          {
            "name": "grilled cheddar toasts",
            "price": "10"
          },
          {
            "name": "squash salad",
            "description": "roasted & grilled squash, tempura squash blossom, goat cheese, sunflower brittle",
            "price": "16"
          },
          {
            "name": "deviled eggs",
            "price": "9"
          }
        ]
      },
      {
        "name": "brunch mains",
        "items": [
          {
            "name": "norwegian eggs",
            "description": "smoked salmon, ciabatta, hollandaise, served with a side salad",
            "price": "15"
          },
          {
            "name": "full english breakfast",
            "description": "scrambled eggs, roasted potatoes, thick cut bacon, sausage links, baked beans, mushrooms, tomato",
            "price": "18"
          },
          {
            "name": "fried egg with wild mushrooms and grits",
            "description": "fried egg, asiago cheese grits, shitakes, oyster mushrooms, and chantrelles, paired with a rich spiced tomato sauce",
            "price": "16"
          },
          {
            "name": "overnight pecan french toast",
            "description": "10-hour soaked challah french toast topped with toasted pecans, bananas, and fresh whipped cream",
            "price": "18"
          }
        ]
      },
      {
        "name": "lunch",
        "items": [
          {
            "name": "rice salad",
            "description": "fried egg, herbs, cress, cherry toms, cucumber, onion, ginger, and lime",
            "price": "13"
          },
          {
            "name": "fried chicken sandwich",
            "description": "buttermilk fried chicken with shredded pickle slaw, hot sauce aioli, and a side of okra",
            "price": "14"
          },
          {
            "name": "shrimp and grits",
            "description": "served with bacon and chipotle oil",
            "price": "17"
          },
          {
            "name": "the cheeseburger",
            "description": "aged gruyère cheese, sautéed white onions, pickles, secret sauce, french fries",
            "price": "15"
          }
        ]
      },
      {
        "name": "sides",
        "items": [
          {
            "name": "homemade baked beans",
            "price": "6"
          },
          {
            "name": "two eggs any style",
            "price": "4"
          },
          {
            "name": "avocado toast",
            "price": "7"
          },
          {
            "name": "smoked salmon",
            "price": "7"
          }
        ]
      },
      {
        "name": "cocktails",
        "items": [
          {
            "name": "the classics (mimosa, bloody, bellini)",
            "price": "7"
          },
          {
            "name": "moscow mule mimosa",
            "description": "vodka, ginger beer, champagne, orange juice",
            "price": "12"
          },
          {
            "name": "french 75",
            "description": "hendrick's gin, champagne, fresh lemon juice, simple",
            "price": "13"
          },
          {
            "name": "the earl",
            "description": "iced earl grey tea, hendrick's gin, honey simple syrup, fresh lemon juice, lavender",
            "price": "12"
          },
          {
            "name": "kentucky cocoa",
            "description": "house-made hot chocolate, chocolate liqueur, bulliet bourbon",
            "price": "12"
          }
        ]
      }
    ],
    "lunch": [
      {
        "name": "starters",
        "items": [
          {
            "name": "1/2 dozen market oysters",
            "description": "freshly shucked and served w/ rice wine mignonette",
            "price": "16"
          },
          {
            "name": "burrata",
            "description": "served with local heirloom tomatoes, fresh basil, house-baked ciabatta, and balsamic drizzle",
            "price": "14"
          },
          {
            "name": "kale flatbread",
            "description": "creamed kale, delicata squash, gruyère, rosemary chili oil",
            "price": "14"
          }
        ]
      },
      {
        "name": "salads",
        "items": [
          {
            "name": "squash salad",
            "description": "roasted & grilled squash, tempura squash blossom, goat cheese, sunflower brittle",
            "price": "16"
          },
          {
            "name": "rice salad",
            "description": "fried egg, herbs, cress, cherry toms, cucumber, onion, ginger, and lime",
            "price": "14"
          },
          {
            "name": "seared tuna salad",
            "description": "chilled spicy soba noodles, pickled shiitakes, daikon, carrot, sesame, ginger miso vinaigrette",
            "price": "19"
          }
        ]
      },
      {
        "name": "sandwiches",
        "items": [
          {
            "name": "egg, frisée, and caramelized onion sandwich",
            "description": "slightly runny egg yolk creates a rich, delicious sauce as it mingles with our homemade fig jam",
            "price": "13"
          },
          {
            "name": "crispy cod sandwich",
            "description": "kale & granny smith apple slaw, tartar, brioche, house chips",
            "price": "16"
          },
          {
            "name": "the cheeseburger",
            "description": "aged gruyère cheese, sautéed white onions, pickles, secret sauce, french fries",
            "price": "15"
          }
        ]
      },
      {
        "name": "sides",
        "items": [
          {
            "name": "sautéed kale",
            "price" : "5"
          },
          {
            "name": "sautéed mushrooms",
            "price" : "5"
          },
          {
            "name": "fried tomatoes",
            "price" : "5"
          },
          {
            "name": "homemade baked beans",
            "price" : "6"
          }
        ]
      }
    ],
    "dinner": [
      {
        "name": "starters",
        "items": [
          {
            "name": "1/2 dozen market oysters",
            "description": "freshly shucked and served w/ rice wine mignonette",
            "price": "16"
          },
          {
            "name": "smoked trout",
            "description": "hard boiled eggs, cornichons, capers, horseradish cream, toast",
            "price": "15"
          },
          {
            "name": "burrata",
            "description": "served with local heirloom tomatoes, fresh basil, house-baked ciabatta, and balsamic drizzle",
            "price": "14"
          },
          {
            "name": "kale flatbread",
            "description": "creamed kale, delicata squash, gruyère, rosemary chili oil",
            "price": "14"
          }
        ]
      },
      {
        "name": "mains",
        "items": [
          {
            "name": " black sea bass",
            "description": "tomato braised tuscan kale, pangrattato",
            "price": "24"
          },
          {
            "name": "hangar steak with rustic balsamic reduction",
            "description": "paired with a crispy truffle baked potato, wild mushrooms, and smashed avocado",
            "price": "23"
          },
          {
            "name": "parchment-baked salmon",
            "description": "cauliflower almond mousse, charred scallions, shiitake mushrooms, truffle vinaigrette",
            "price": "25"
          },
          {
            "name": "chicken mole poblano",
            "description": "1/2 tender slow-cooked chicken, topped with mole poblano (a sauce of chiles, spices, and chocolate)",
            "price": "20"
          },
          {
            "name": "pot of mussels",
            "description": "chardonnay broth, dijon, tarragon, fries",
            "price": "20"
          }
        ]
      },
      {
        "name": "sides",
        "items": [
          {
            "name": "garlic smashed potatoes",
            "price": "7"
          },
          {
            "name": "brussels sprouts with balsamic drizzle",
            "price": "8"
          },
          {
            "name": "garlic spinach",
            "price": "7"
          },
          {
            "name": "fries",
            "price": "6"
          }
        ]
      },
      {
        "name": "cocktails",
        "items": [
          {
            "name": "hibiscus shandy",
            "description": "hibiscus honey, fresh lemon juice, ommegang witte",
            "price": "13"
          },
          {
            "name": "white negroni",
            "description": "hendrick's gin, lillet blanc, suze",
            "price": "14"
          },
          {
            "name": "steelroller",
            "description": "bulliet bourbon, amaro montenegro, regan’s orange bitters, angostura bitters",
            "price": "14"
          },
          {
            "name": "mero mero",
            "description": "montelobos mezcal, reposado tequila, cynar, maraschino liqueur, sweet vermouth, regan’s orange bitters",
            "price": "15"
          },
          {
            "name": "masala flip",
            "description": "chai masala-infused rum, cinnamon syrup, mace syrup",
            "price": "15"
          }
        ]
      },
      {
        "name": "wine",
        "items": [
          {
            "name": "cava brut, destello  NV",
            "description": "denedès, spain",
            "price": "12 (43)"
          },
          {
            "name": "chardonnay, cardiff vineyards",
            "description": "santa clara, california",
            "price": "11 (39)"
          },
          {
            "name": "sauvignon blanc, sancerre les perrois",
            "description": "francois crochet, loire valley, france",
            "price": "14 (49)"
          },
          {
            "name": "corvina, baby amarone, rosso veronese alanera",
            "description": "veneto, italy",
            "price": "12 (42)"
          },
          {
            "name": "cabernet sauvignon, honig",
            "description": "napa valley, california",
            "price": "20 (75)"
          }
        ]
      },
      {
        "name": "dessert",
        "items": [

          {
            "name": "pumpkin brioche bread pudding",
            "description": "candied cranberries, whipped mascarpone, cinnamon ice cream",
            "price": "9"
          },
          {
            "name": "local honeycrisp pumpkin pie",
            "description": "bourbon caramel, almond cookie crust, toasted almond ice cream",
            "price": "8"
          },
          {
            "name": "hot fudge sundae",
            "description": "vanilla ice cream, flourless chocolate cake, almond bark, hot fudge ",
            "price": "8"
          }
        ]
      }
    ]
  },
  "reservations": {},
  "order": {},
  "location": {
    "address": "179 Elizabeth Street, New York, NY 10012",
    "directions": {
      "transit": [
        { "method": ["6"], "stop": "Spring Street" },
        { "method": ["F"], "stop": "2nd Avenue" },
        { "method": ["B","D"], "stop": "Grand Street" }
      ],
      "parking": null,
      "notes": null
    }
  },
  "hours": {
    "bar": [
      {"open": "11AM", "close": "12AM"},
      {"open": "11AM", "close": "12AM"},
      {"open": "11AM", "close": "12AM"},
      {"open": "11AM", "close": "12AM"},
      {"open": "11AM", "close": "2AM"},
      {"open": "11AM", "close": "2AM"},
      {"open": "11AM", "close": "2AM"}
    ],
    "restaurant": [
      {"open": "8AM", "close": "10PM"},
      {"open": "12PM", "close": "10PM"},
      {"open": "12PM", "close": "10PM"},
      {"open": "12PM", "close": "10PM"},
      {"open": "12PM", "close": "12AM"},
      {"open": "12PM", "close": "12AM"},
      {"open": "8AM", "close": "12AM"}
    ]
  },
  "contact": {
    "phone": {
      "countryCode":"1",
      "areaCode": "555",
      "localNumber": "876-9846"
    },
    "email": "hello@paragon.com"
  },
  "externalServices": {
    "yelpId": null,
    "seamlessId": null,
    "openTableId": null
  }
};
export default data;
