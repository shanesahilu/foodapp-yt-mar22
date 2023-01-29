import biryani from "../img/Biriyani.png";
import bread from "../img/Bread Omlette.png";
import dosa from "../img/Dosa.png";
import frankie from "../img/frankie.png";

export const heroData = [
  {
    id: 1,
    name: "Biryani",
    decp: "Chicken Dum biryani",
    price: "200",
    imageSrc: biryani,
  },
  {
    id: 2,
    name: "Bread Omlette",
    decp: "Fresh eggs",
    price: "35",
    imageSrc: bread,
  },
  {
    id: 3,
    name: "70mm Dosa",
    decp: "Fresh Chutney",
    price: "40",
    imageSrc: dosa,
  },
  {
    id: 4,
    name: "Frankie",
    decp: "Extra Cheese",
    price: "70-80",
    imageSrc: frankie,
  },
];

export const categories = [
  {
    id: 1,
    name: "Non-Veg",
    urlParamName: "Non-Veg",
  },
  {
    id: 2,
    name: "Veg",
    urlParamName: "Veg",
  },
  {
    id: 3,
    name: "Tiffins",
    urlParamName: "Tiffins",
  },
   
  {
    id: 6,
    name: "Icecreams",
    urlParamName: "icecreams",
  },

  {
    id: 7,
    name: "Soft Drinks",
    urlParamName: "drinks",
  },
];
