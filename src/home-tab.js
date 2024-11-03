import pizza_knead_tiny from "./pizza_knead_tiny.webp";

function buildHome(container){
    container.innerHTML =  `
        <div class="home-container">
            <div class="home-image-container">
                <img src=${pizza_knead_tiny} alt="chef kneading pizza dough">
                <div class="img-link">
                    Photo by <a href="https://unsplash.com/@rresenden?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Ricardo Resende</a> on <a href="https://unsplash.com/photos/a-person-is-kneading-dough-on-a-table-GLHLv71nREM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </div>
            <div class="home-info">
                <h2>PIZZA</h2>
                <h3><i>Since 1996</i></h3>
                <div>
                    Discover the art of traditional pizza making, where every detail matters—from hand-stretched dough to rich, flavorful toppings. Our pizzas are crafted using time-honored techniques, ensuring each bite captures the essence of authentic Italian cuisine. With dough that’s rested for a perfect rise and ingredients selected for peak freshness, every slice is a celebration of quality and passion. Enjoy the warm, wood-fired taste and savor the love put into every pizza we create!
                </div>
                <button onclick="clickMenu()" class="action-button">Menu</button>
            </div>
        </div>
    `; 
}

export { buildHome }