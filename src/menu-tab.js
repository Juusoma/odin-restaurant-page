const pizzas = [
    {
        name: "Margherita",
        description: "Tomato sauce, mozzarella, fresh basil",
        price: 6,
        new: false,
    },
    {
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella, pepperoni",
        price: 7.5,
        new: false,
    },
    {
        name: "Quattro Formaggi",
        description: "Mozzarella, gorgonzola, parmesan, goat cheese",
        price: 8,
        new: false,
    },
    {
        name: "Hawaiian",
        description: "Tomato sauce, mozzarella, ham, pineapple",
        price: 7,
        new: false,
    },
    {
        name: "Veggie Delight",
        description: "Tomato sauce, mozzarella, bell peppers, olives, onions, mushrooms",
        price: 6.5,
        new: false,
    },
    {
        name: "BBQ Chicken",
        description: "BBQ sauce, mozzarella, grilled chicken, onions, cilantro",
        price: 8.5,
        new: true,
    },
    {
        name: "Spicy Sausage",
        description: "Tomato sauce, mozzarella, spicy sausage, jalapeños",
        price: 8,
        new: false,
    },
    {
        name: "Mediterranean",
        description: "Olive oil, mozzarella, feta, spinach, sun-dried tomatoes, olives",
        price: 9,
        new: false,
    },
    {
        name: "Truffle Mushroom",
        description: "Truffle oil, mozzarella, mushrooms, garlic, parsley",
        price: 10,
        new: false,
    },
    {
        name: "Prosciutto e Rucola",
        description: "Tomato sauce, mozzarella, prosciutto, arugula, parmesan",
        price: 9.5,
        new: false,
    },
];

const specials = [
    {
        name: "Truffle Deluxe",
        description: "White sauce, mozzarella, truffle cream, porcini mushrooms, arugula",
        price: 12,
        new: true,
    },
    {
        name: "Seafood Extravaganza",
        description: "Tomato sauce, mozzarella, shrimp, calamari, smoked salmon, garlic",
        price: 14,
        new: false,
    },
    {
        name: "Firecracker",
        description: "Spicy tomato sauce, mozzarella, hot salami, chili flakes, jalapeños, red onions",
        price: 11,
        new: false,
    },
    {
        name: "Caprese Supreme",
        description: "Fresh tomato slices, mozzarella di bufala, basil, balsamic glaze drizzle",
        price: 10,
        new: false,
    },
    {
        name: "Fig & Prosciutto",
        description: "Olive oil base, mozzarella, figs, prosciutto, blue cheese, arugula",
        price: 13,
        new: false,
    },
    {
        name: "The Green Garden",
        description: "Pesto sauce, mozzarella, zucchini, artichokes, asparagus, cherry tomatoes",
        price: 10.5,
        new: false,
    },
];

const salads = [
    {
        name: "Caesar Salad",
        description: "Romaine lettuce, croutons, parmesan, Caesar dressing",
        price: 5.5,
        new: false,
    },
    {
        name: "Greek Salad",
        description: "Tomatoes, cucumbers, red onions, olives, feta cheese, olive oil dressing",
        price: 6,
        new: false,
    },
    {
        name: "Caprese Salad",
        description: "Tomatoes, mozzarella, fresh basil, balsamic glaze",
        price: 6.5,
        new: false,
    },
    {
        name: "Quinoa Salad",
        description: "Quinoa, arugula, cherry tomatoes, avocado, cucumber, lemon dressing",
        price: 7,
        new: false,
    },
    {
        name: "Spinach & Berry Salad",
        description: "Spinach, mixed berries, goat cheese, walnuts, raspberry vinaigrette",
        price: 7.5,
        new: true,
    },
];

const drinks = [
    {
        name: "Classic Lemonade",
        description: "Freshly squeezed lemons, water, and a touch of sugar",
        price: 3,
        new: false,
    },
    {
        name: "Iced Green Tea",
        description: "Green tea, ice, a hint of honey",
        price: 3.5,
        new: false,
    },
    {
        name: "Sparkling Water",
        description: "Carbonated water, served with a lemon wedge",
        price: 2.5,
        new: false,
    },
    {
        name: "Mango Smoothie",
        description: "Fresh mango, yogurt, honey, ice",
        price: 4.5,
        new: false,
    },
    {
        name: "Berry Blast Smoothie",
        description: "Mixed berries, banana, almond milk, honey",
        price: 4.5,
        new: true,
    },
    {
        name: "Espresso",
        description: "Rich and bold espresso shot",
        price: 2,
        new: false,
    },
    {
        name: "Iced Latte",
        description: "Espresso, milk, ice",
        price: 3.5,
        new: false,
    },
    {
        name: "Hot Chocolate",
        description: "Warm chocolate drink with whipped cream",
        price: 3,
        new: false,
    },
];



function addMenuSection(parentElement){
    const section = document.createElement("div");
    section.classList.add("menu-items-section");
    parentElement.appendChild(section);
    return section;
}

function addSectionTitle(titleText, parentElement){
    const title = document.createElement("div");
    title.classList.add("menu-section-title");
    title.textContent = titleText;
    parentElement.appendChild(title);
    return title;
}

function addSectionItem(sectionItemData, parentElement){
    const sectionItem = document.createElement("div");
    sectionItem.classList.add("menu-item");
    let itemName = sectionItemData.name;
    if(sectionItemData.new){
        sectionItem.classList.add("new");
        itemName += " (NEW)";
    }
    sectionItem.innerHTML = `
        <div class="menu-item-info">
            <h4 class="menu-item-title">${itemName}</h4>
            <p class="menu-item-description">${sectionItemData.description}</p>
        </div>
        <span class="menu-item-price">€${sectionItemData.price}</span>
    `
    parentElement.appendChild(sectionItem);
    return sectionItem;
}

`
<div class="menu-item">
    <div class="menu-item-info">
        <h4 class="menu-item-title">Crosconne</h4>
        <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
    <span class="menu-item-price">$3</span>
</div>`

function buildMenu(container){
    container.innerHTML = `
        <div class="menu-container">
            <h2 class="menu-container-title">Menu</h2>
            <div class="menu-items">
            </div>
        </div>
    `
    const menuItemContainer = container.querySelector(".menu-items");
    const pizzaSection = addMenuSection(menuItemContainer);
    addSectionTitle("Pizza", pizzaSection);
    for(let pizza of pizzas){
        addSectionItem(pizza, pizzaSection);
    }


    const specialSection = addMenuSection(menuItemContainer);
    addSectionTitle("Special", specialSection);
    for(let special of specials){
        addSectionItem(special, specialSection);
    }


    const saladSection = addMenuSection(menuItemContainer);
    addSectionTitle("Salad", saladSection);
    for(let salad of salads){
        addSectionItem(salad, saladSection);
    }


    const drinkSection = addMenuSection(menuItemContainer);
    addSectionTitle("Drink", drinkSection);
    for(let drink of drinks){
        addSectionItem(drink, drinkSection);
    }

    `
        <div class="menu-container">
            <h2 class="menu-container-title">Menu</h2>
            <div class="menu-items">
                <div class="menu-items-section">
                    <div class="menu-section-title">
                        Pizza
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                </div>
                <div class="menu-items-section">
                    <div class="menu-section-title">
                        Salad
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                </div>
                <div class="menu-items-section">
                    <div class="menu-section-title">
                        Salad
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                </div>
                
                <div class="menu-items-section">
                    <div class="menu-section-title">
                        Drinks
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                    <div class="menu-item">
                        <div class="menu-item-info">
                            <h4 class="menu-item-title">Crosconne</h4>
                            <p class="menu-item-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <span class="menu-item-price">$3</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}


export { buildMenu }