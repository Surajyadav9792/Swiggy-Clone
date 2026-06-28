export const mockRestaurants = [
  {
    info: {
      id: "326429",
      name: "Biryani Blues",
      cloudinaryImageId: "rx_mod/v1/e4f24efb48611d23b2d76f4e69d764cf_102660.jpg",
      avgRatingString: "4.3",
      sla: {
        slaString: "20-25 mins"
      },
      cuisines: ["Biryani", "Hyderabadi", "Lucknowi", "North Indian"],
      areaName: "Connaught Place"
    }
  },
  {
    info: {
      id: "12345",
      name: "Domino's Pizza",
      cloudinaryImageId: "rx_mod/v1/d0450ce1a6ba1d7c7c14165a89476c26_103328.jpg",
      avgRatingString: "4.4",
      sla: {
        slaString: "25 mins"
      },
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      areaName: "Karol Bagh"
    }
  },
  {
    info: {
      id: "12346",
      name: "Burger King",
      cloudinaryImageId: "rx_mod/v1/e33e1d3ad7d6d2dbec673a95ee11421c_101292.jpg",
      avgRatingString: "4.2",
      sla: {
        slaString: "30 mins"
      },
      cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
      areaName: "Rajouri Garden"
    }
  },
  {
    info: {
      id: "12347",
      name: "Haldiram's",
      cloudinaryImageId: "rx_mod/v1/4508ef48d8b67cf9d2f2d90822e0325d.jpg",
      avgRatingString: "4.5",
      sla: {
        slaString: "20 mins"
      },
      cuisines: ["Sweets", "North Indian", "South Indian", "Snacks"],
      areaName: "Chandni Chowk"
    }
  },
  {
    info: {
      id: "12348",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId: "rx_mod/v1/8fa9e530510696b01cb4d4d3d75dfa31_102143.jpg",
      avgRatingString: "4.1",
      sla: {
        slaString: "15 mins"
      },
      cuisines: ["Beverages", "Desserts", "Ice Cream"],
      areaName: "Connaught Place"
    }
  },
  {
    info: {
      id: "12349",
      name: "Punjab Grill",
      cloudinaryImageId: "rx_mod/v1/3ba271a3962635a9478f7e847c2106ad.jpg",
      avgRatingString: "4.6",
      sla: {
        slaString: "35 mins"
      },
      cuisines: ["North Indian", "Mughlai", "Kebab", "Desserts"],
      areaName: "Saket"
    }
  }
];

export const mockMenus = {
  // Keyed by restaurant ID
  "326429": [
    {
      card: {
        card: {
          title: "Recommended",
          itemCards: [
            {
              card: {
                info: {
                  id: "bb1",
                  name: "Chicken Biryani (Single)",
                  price: 27900,
                  defaultPrice: 27900,
                  description: "Richly flavored aromatic rice layered with marinated chicken, served with salan and raita.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  ratings: {
                    aggregatedRating: {
                      rating: "4.4",
                      ratingCountV2: "180"
                    }
                  }
                }
              }
            },
            {
              card: {
                info: {
                  id: "bb2",
                  name: "Paneer Biryani (Single)",
                  price: 24900,
                  defaultPrice: 24900,
                  description: "Aromatic rice cooked with soft paneer cubes in special spices, served with raita.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  isVeg: true,
                  ratings: {
                    aggregatedRating: {
                      rating: "4.2",
                      ratingCountV2: "90"
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  ],
  "12345": [
    {
      card: {
        card: {
          title: "Recommended",
          itemCards: [
            {
              card: {
                info: {
                  id: "dom1",
                  name: "Margherita Pizza",
                  price: 23900,
                  defaultPrice: 23900,
                  description: "Classic delight with 100% real mozzarella cheese on a delicious pizza base.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  isVeg: true,
                  ratings: {
                    aggregatedRating: {
                      rating: "4.5",
                      ratingCountV2: "450"
                    }
                  }
                }
              }
            },
            {
              card: {
                info: {
                  id: "dom2",
                  name: "Peppy Paneer Pizza",
                  price: 38900,
                  defaultPrice: 38900,
                  description: "Chunky paneer, crisp capsicum, and spicy red pepper with mozzarella.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  isVeg: true,
                  ratings: {
                    aggregatedRating: {
                      rating: "4.3",
                      ratingCountV2: "220"
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  ],
  "12346": [
    {
      card: {
        card: {
          title: "Recommended",
          itemCards: [
            {
              card: {
                info: {
                  id: "bk1",
                  name: "Whopper Veg Burger",
                  price: 17900,
                  defaultPrice: 17900,
                  description: "Our signature Whopper with a flame-grilled plant-based patty, fresh lettuce, and tomatoes.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  isVeg: true,
                  ratings: {
                    aggregatedRating: {
                      rating: "4.1",
                      ratingCountV2: "1350"
                    }
                  }
                }
              }
            },
            {
              card: {
                info: {
                  id: "bk2",
                  name: "Whopper Chicken Burger",
                  price: 19900,
                  defaultPrice: 19900,
                  description: "Flame-grilled chicken patty layered with lettuce, creamy mayo, and crisp pickles.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  ratings: {
                    aggregatedRating: {
                      rating: "4.3",
                      ratingCountV2: "2100"
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  ],
  "default": [
    {
      card: {
        card: {
          title: "Recommended Specials",
          itemCards: [
            {
              card: {
                info: {
                  id: "def1",
                  name: "Paneer Tikka Masala",
                  price: 29900,
                  defaultPrice: 29900,
                  description: "Soft paneer cubes cooked in a thick spicy onion-tomato gravy.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  isVeg: true,
                  ratings: {
                    aggregatedRating: {
                      rating: "4.4",
                      ratingCountV2: "85"
                    }
                  }
                }
              }
            },
            {
              card: {
                info: {
                  id: "def2",
                  name: "Butter Chicken",
                  price: 34900,
                  defaultPrice: 34900,
                  description: "Tender chicken cooked in rich makhani gravy with butter and cream.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  ratings: {
                    aggregatedRating: {
                      rating: "4.6",
                      ratingCountV2: "240"
                    }
                  }
                }
              }
            },
            {
              card: {
                info: {
                  id: "def3",
                  name: "Garlic Naan",
                  price: 8000,
                  defaultPrice: 8000,
                  description: "Classic leavened flatbread topped with minced garlic and butter.",
                  imageId: "FOOD_CATALOG/IMAGES/CMS/2024/4/17/a7c640e7-81ab-41c1-90a6-16e6d1b24bf4_fd566c7a-50d4-473d-9e6b-07df9742a03e.jpeg",
                  isVeg: true,
                  ratings: {
                    aggregatedRating: {
                      rating: "4.5",
                      ratingCountV2: "510"
                    }
                  }
                }
              }
            }
          ]
        }
      }
    }
  ]
};
