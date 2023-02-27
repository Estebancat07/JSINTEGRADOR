const productsData = [
    {
		id: 1,
		name: "ENA Sport Whey X-Pro sabor strawberry milkshake.",
		bid: 6790,
		category: "polvo",
		img: "./assets/img/polvo1.png",
		
	},
	{
		id: 2,
		name: "ENA Sport Creatina Micronizada neutro.",
		bid: 9200,
		category: "polvo",
		img: "./assets/img/polvo2.png",
	},
    {
		id: 3,
		
		name: "ENA Sport Whey X-Pro sabor vanilla.",
		bid: 7990,
		category: "polvo",
		img: "./assets/img/polvo3.png",
		
	},
    {
		id: 4,
		name: "Ripped X Ena Quemador De Grasas.",
		bid: 1790,
		category: "capsulas",
		img: "./assets/img/cap1.png",
	},
    {
		id: 5,
		name: "Zma Gold Nutrition Zinc.",
		bid: 2270,
		category: "capsulas",
		img: "./assets/img/cap2.png",
	},
    {
		id: 6,
		name: "NA Sport Carnitina 1500 Mg.",
		bid: 2280,
		category: "capsulas",
		img: "./assets/img/cap3.png",
	},
    {
		id: 7,
		name: "Quelat Zinc Forte X 30.",
		bid: 1799,
		category: "comprimidos",
		img: "./assets/img/comp1.png",
	},
    {
		id: 8,
		name: "Satial Carb Controller.",
		bid: 3750,
		category: "comprimidos",
		img: "./assets/img/comp2.png"
	},
    {
		id: 9,
		name: "Uridon Max X 30 - Ext Arandanos.",
		bid: 3570,
		category: "comprimidos",
		img: "./assets/img/comp3.png"
	},
    {
		id: 10,
		name: "Goodskin sabor frutal 375mL.",
		bid: 7400,
		category: "liquidos",
		img: "./assets/img/liq1.png"
	},
    {
		id: 11,
		name: "Aceite Esencial De Orégano 30 Ml.",
		bid: 3500,
		category: "liquidos",
		img: "./assets/img/liq2.png"
	},
    {
		id: 12,
		name: "Aloe Vera- Natier X 250 Cm3.",
		bid: 1000,
		category: "liquidos",
		img: "./assets/img/liq3.png" 
	},
]

const splitProducts = (size) => {
	let dividedProducts = [];

	for (let i = 0; i < productsData.length; i += size) {
		dividedProducts.push(productsData.slice(i, i + size));
	}
	return dividedProducts;
};

const productsController = {
	dividedProducts: splitProducts(6),
	nextProductsIndex: 1,
	productsLimit: splitProducts(6).length,
};
