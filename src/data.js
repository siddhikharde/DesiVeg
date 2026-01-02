import { PIXABAY_API_KEY } from "./config/env.js";
const vegetables = [
        {
                "id": "1",
                "name": "Tomato",
                "price": 30,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=tomato+vegetable&image_type=photo`,
                "description": "Fresh and juicy tomatoes, perfect for salads and cooking.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["fresh", "juicy", "red"]
        },
        {
                "id": "2",
                "name": "Potato",
                "price": 20,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=potato+vegetable&image_type=photo`,
                "description": "Versatile potatoes, great for fries, mashing, and roasting.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["versatile", "starchy", "brown"]
        },
        {
                "id": "3",
                "name": "Onion",
                "price": 25,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=onion+vegetable&image_type=photo`,
                "description": "Crisp onions with strong flavor, a kitchen staple.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["aromatic", "staple"]
        },
        {
                "id": "4",
                "name": "Carrot",
                "price": 40,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=carrot+vegetable&image_type=photo`,
                "description": "Sweet and crunchy carrots, great for snacking and cooking.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["crunchy", "sweet", "orange"]
        },
        {
                "id": "5",
                "name": "Cabbage",
                "price": 22,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=cabbage+vegetable&image_type=photo`,
                "description": "Leafy cabbage ideal for slaws, stir-fries, and soups.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["leafy", "green"]
        },
        {
                "id": "6",
                "name": "Bell Pepper",
                "price": 80,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=bell+pepper+vegetable&image_type=photo`,
                "description": "Crisp bell peppers in assorted colors, sweet and crunchy.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["colorful", "crisp"]
        },
        {
                "id": "7",
                "name": "Spinach",
                "price": 60,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=spinach+vegetable&image_type=photo`,
                "description": "Fresh spinach leaves, packed with nutrients.",
                "unit": "per bunch",
                "category": "Vegetable",
                "tags": ["leafy", "green", "healthy"]
        },
        {
                "id": "8",
                "name": "Cauliflower",
                "price": 90,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=cauliflower+vegetable&image_type=photo`,
                "description": "Firm cauliflower heads, great for roasting and curries.",
                "unit": "per piece",
                "category": "Vegetable",
                "tags": ["white", "versatile"]
        },
        {
                "id": "9",
                "name": "Broccoli",
                "price": 120,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=broccoli+vegetable&image_type=photo`,
                "description": "Fresh broccoli florets, nutritious and crunchy.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["green", "healthy"]
        },
        {
                "id": "10",
                "name": "Cucumber",
                "price": 35,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=cucumber+vegetable&image_type=photo`,
                "description": "Cool and hydrating cucumbers, perfect for salads.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["fresh", "hydrating"]
        },
        {
                "id": "11",
                "name": "Eggplant",
                "price": 70,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=eggplant+vegetable&image_type=photo`,
                "description": "Tender eggplants for grilling, stews, and curries.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["purple", "soft"]
        },
        {
                "id": "12",
                "name": "Garlic",
                "price": 200,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=garlic+vegetable&image_type=photo`,
                "description": "Aromatic garlic cloves to flavor dishes.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["aromatic", "bulb"]
        },
        {
                "id": "13",
                "name": "Ginger",
                "price": 250,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=ginger+root&image_type=photo`,
                "description": "Fresh ginger root, spicy and fragrant.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["spicy", "root"]
        },
        {
                "id": "14",
                "name": "Sweet Potato",
                "price": 65,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=sweet+potato+vegetable&image_type=photo`,
                "description": "Sweet potatoes, nutritious and naturally sweet.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["sweet", "orange"]
        },
        {
                "id": "15",
                "name": "Peas",
                "price": 90,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=peas+vegetable&image_type=photo`,
                "description": "Green peas, great for curries and sides.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["green", "small"]
        },
        {
                "id": "16",
                "name": "Radish",
                "price": 40,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=radish+vegetable&image_type=photo`,
                "description": "Crisp radishes with a peppery bite.",
                "unit": "per bunch",
                "category": "Vegetable",
                "tags": ["crisp", "peppery"]
        },
        {
                "id": "17",
                "name": "Beetroot",
                "price": 85,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=beetroot+vegetable&image_type=photo`,
                "description": "Earthy beetroot, excellent for roasting and salads.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["earthy", "red"]
        },
        {
                "id": "18",
                "name": "Lettuce",
                "price": 50,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=lettuce+vegetable&image_type=photo`,
                "description": "Fresh lettuce leaves for salads and wraps.",
                "unit": "per piece",
                "category": "Vegetable",
                "tags": ["leafy", "crisp"]
        },
        {
                "id": "19",
                "name": "Zucchini",
                "price": 95,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=zucchini+vegetable&image_type=photo`,
                "description": "Tender zucchini, great for grilling and sautés.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["green", "tender"]
        },
        {
                "id": "20",
                "name": "Okra",
                "price": 110,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=okra+vegetable&image_type=photo`,
                "description": "Fresh okra pods, ideal for curries and frying.",
                "unit": "per kg",
                "category": "Vegetable",
                "tags": ["pod", "green"]
        },
        {
                "id": "21",
                "name": "Apple",
                "price": 160,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=apple+fruit&image_type=photo`,
                "description": "Crisp apples, sweet and juicy.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["sweet", "crisp"]
        },
        {
                "id": "22",
                "name": "Banana",
                "price": 60,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=banana+fruit&image_type=photo`,
                "description": "Ripe bananas, naturally sweet and soft.",
                "unit": "per dozen",
                "category": "Fruit",
                "tags": ["sweet", "soft"]
        },
        {
                "id": "23",
                "name": "Orange",
                "price": 140,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=orange+fruit&image_type=photo`,
                "description": "Juicy oranges rich in vitamin C.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["citrus", "juicy"]
        },
        {
                "id": "24",
                "name": "Mango",
                "price": 220,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=mango+fruit&image_type=photo`,
                "description": "Sweet, fragrant mangoes in season.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["tropical", "sweet"]
        },
        {
                "id": "25",
                "name": "Grapes",
                "price": 180,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=grapes+fruit&image_type=photo`,
                "description": "Bunches of sweet grapes, perfect for snacking.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["bunch", "sweet"]
        },
        {
                "id": "26",
                "name": "Pear",
                "price": 200,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=pear+fruit&image_type=photo`,
                "description": "Soft and juicy pears, lightly sweet.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["soft", "juicy"]
        },
        {
                "id": "27",
                "name": "Pineapple",
                "price": 150,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=pineapple+fruit&image_type=photo`,
                "description": "Tropical pineapple, sweet and tangy.",
                "unit": "per piece",
                "category": "Fruit",
                "tags": ["tropical", "tangy"]
        },
        {
                "id": "28",
                "name": "Strawberry",
                "price": 350,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=strawberry+fruit&image_type=photo`,
                "description": "Sweet strawberries, great for desserts.",
                "unit": "per 250g",
                "category": "Fruit",
                "tags": ["berry", "sweet"]
        },
        {
                "id": "29",
                "name": "Blueberry",
                "price": 450,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=blueberry+fruit&image_type=photo`,
                "description": "Small, antioxidant-rich blueberries.",
                "unit": "per 125g",
                "category": "Fruit",
                "tags": ["berry", "antioxidant"]
        },
        {
                "id": "30",
                "name": "Watermelon",
                "price": 70,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=watermelon+fruit&image_type=photo`,
                "description": "Refreshing watermelon slices, hydrating and sweet.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["refreshing", "juicy"]
        },
        {
                "id": "31",
                "name": "Papaya",
                "price": 90,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=papaya+fruit&image_type=photo`,
                "description": "Ripe papaya, soft and sweet.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["tropical", "soft"]
        },
        {
                "id": "32",
                "name": "Kiwi",
                "price": 300,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=kiwi+fruit&image_type=photo`,
                "description": "Tangy and sweet kiwis with vibrant green flesh.",
                "unit": "per 6pcs",
                "category": "Fruit",
                "tags": ["tangy", "vitaminC"]
        },
        {
                "id": "33",
                "name": "Cherry",
                "price": 500,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=cherry+fruit&image_type=photo`,
                "description": "Sweet cherries, perfect for snacking and baking.",
                "unit": "per 250g",
                "category": "Fruit",
                "tags": ["stonefruit", "sweet"]
        },
        {
                "id": "34",
                "name": "Pomegranate",
                "price": 220,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=pomegranate+fruit&image_type=photo`,
                "description": "Juicy pomegranate seeds, tart and sweet.",
                "unit": "per piece",
                "category": "Fruit",
                "tags": ["seeds", "antioxidant"]
        },
        {
                "id": "35",
                "name": "Lemon",
                "price": 120,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=lemon+fruit&image_type=photo`,
                "description": "Fresh lemons for juice and flavoring.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["citrus", "sour"]
        },
        {
                "id": "36",
                "name": "Lime",
                "price": 140,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=lime+fruit&image_type=photo`,
                "description": "Small limes with tangy zest and juice.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["citrus", "zesty"]
        },
        {
                "id": "37",
                "name": "Avocado",
                "price": 220,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=avocado+fruit&image_type=photo`,
                "description": "Creamy avocados, great for toasts and salads.",
                "unit": "per piece",
                "category": "Fruit",
                "tags": ["creamy", "healthy_fat"]
        },
        {
                "id": "38",
                "name": "Plum",
                "price": 180,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=plum+fruit&image_type=photo`,
                "description": "Juicy plums with sweet-tart flavor.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["stonefruit", "juicy"]
        },
        {
                "id": "39",
                "name": "Apricot",
                "price": 260,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=apricot+fruit&image_type=photo`,
                "description": "Soft apricots, sweet and fragrant.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["soft", "sweet"]
        },
        {
                "id": "40",
                "name": "Guava",
                "price": 95,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=guava+fruit&image_type=photo`,
                "description": "Aromatic guavas, rich in fiber and flavor.",
                "unit": "per kg",
                "category": "Fruit",
                "tags": ["aromatic", "fiber"]
        },
        {
                "id": "41",
                "name": "Milk",
                "price": 60,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=milk+dairy&image_type=photo`,
                "description": "Fresh milk, pasteurized and ready to use.",
                "unit": "per litre",
                "category": "Dairy",
                "tags": ["fresh", "liquid"]
        },
        {
                "id": "42",
                "name": "Yogurt",
                "price": 55,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=yogurt+dairy&image_type=photo`,
                "description": "Creamy yogurt, plain and probiotic-rich.",
                "unit": "per 500g",
                "category": "Dairy",
                "tags": ["probiotic", "creamy"]
        },
        {
                "id": "43",
                "name": "Paneer",
                "price": 220,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=paneer+dairy&image_type=photo`,
                "description": "Soft Indian cottage cheese, great for cooking.",
                "unit": "per 500g",
                "category": "Dairy",
                "tags": ["cheese", "soft"]
        },
        {
                "id": "44",
                "name": "Cheese",
                "price": 320,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=cheese+dairy&image_type=photo`,
                "description": "Mild cheese block for sandwiches and cooking.",
                "unit": "per 200g",
                "category": "Dairy",
                "tags": ["dairy", "mild"]
        },
        {
                "id": "45",
                "name": "Butter",
                "price": 180,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=butter+dairy&image_type=photo`,
                "description": "Creamy butter, great for cooking and baking.",
                "unit": "per 200g",
                "category": "Dairy",
                "tags": ["spready", "rich"]
        },
        {
                "id": "46",
                "name": "Ghee",
                "price": 450,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=ghee+dairy&image_type=photo`,
                "description": "Aromatic ghee for traditional cooking.",
                "unit": "per 200g",
                "category": "Dairy",
                "tags": ["clarified", "aromatic"]
        },
        {
                "id": "47",
                "name": "Cream",
                "price": 140,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=cream+dairy&image_type=photo`,
                "description": "Rich dairy cream for desserts and sauces.",
                "unit": "per 200ml",
                "category": "Dairy",
                "tags": ["rich", "smooth"]
        },
        {
                "id": "48",
                "name": "Buttermilk",
                "price": 35,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=buttermilk+dairy&image_type=photo`,
                "description": "Tangy buttermilk, refreshing and light.",
                "unit": "per litre",
                "category": "Dairy",
                "tags": ["tangy", "refreshing"]
        },
        {
                "id": "49",
                "name": "Curd",
                "price": 50,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=curd+dairy&image_type=photo`,
                "description": "Homestyle curd, thick and creamy.",
                "unit": "per 500g",
                "category": "Dairy",
                "tags": ["probiotic", "thick"]
        },
        {
                "id": "50",
                "name": "Cottage Cheese",
                "price": 200,
                "image": `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=cottage+cheese+dairy&image_type=photo`,
                "description": "Light cottage cheese, great for salads and snacks.",
                "unit": "per 500g",
                "category": "Dairy",
                "tags": ["light", "protein"]
        }
];

export default vegetables;