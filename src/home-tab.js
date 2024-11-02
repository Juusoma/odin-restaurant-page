import pizza_knead_tiny from "./pizza_knead_tiny.webp";

function buildHome(){
    return `
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
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laudantium dicta inventore pariatur debitis ducimus consequuntur facilis, rerum ex labore hic sed, totam aperiam quam. Officiis id odio reprehenderit quos harum nesciunt quam exercitationem? At odio modi excepturi, tenetur sapiente inventore quisquam esse deleniti id exercitationem consequuntur alias molestias veniam?</div>
                <button onclick="clickMenu()">Menu</button>
            </div>
        </div>
    `    
}

export { buildHome }