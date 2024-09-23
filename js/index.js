function loadData() {
    return fetch('/data/TheSugarVault.json')
      .then(response => response.json())
      .catch(error => console.error('Error loading the JSON:', error));
}

function renderInfo(data){
    renderHeader(data);
    renederHero(data);
    renderSectionTitles(data);
    renderFeaturedProducts(data);
    renderCatalog(data);
    renderServices(data);
    renderAboutUs(data);
    renderReviews(data);
}

function renderHeader (data) {
    document.getElementById('header-logo-id').src = data.company.companyIsoLogo;
}

function renederHero (data) {
    document.getElementById('hero-logo-id').src = data.company.companyImageLogo;
    document.getElementById('hero-description-id').textContent = data.company.companyDescription;
    document.getElementById('bubbletea').src = data.hero.heroPicture;
}

function renderSectionTitles (data) {

}

function renderFeaturedProducts (data) {
    const featuredProductsContainer = document.getElementById('featured-products-cards-container-id');
    featuredProductsContainer.innerHTML = '';

    data.featuredProducts.forEach(product => {
        const productCardContainer = document.createElement('div');
        productCardContainer.className = 'featured-products-card';

        const productImage = document.createElement('img');
        productImage.className = 'productPic';
        productImage.src = product.productPicture;
        productImage.alt = product.productName;

        const productName = document.createElement('h3');
        productName.className = 'title';
        productName.textContent = product.productName;

        const productPrice = document.createElement('h4');
        productPrice.className = 'price';
        productPrice.textContent = `$${product.productPrice}`;

        const productAction = document.createElement('button');
        productAction.className = 'secondary-buton';
        productAction.textContent = "Read More";

        productCardContainer.appendChild(productImage);
        productCardContainer.appendChild(productName);
        productCardContainer.appendChild(productPrice);
        productCardContainer.appendChild(productAction);

        featuredProductsContainer.appendChild(productCardContainer);
    });
}

function renderCatalog (data) {
    // catalogo de comida
    document.getElementById('food-catalog-subtitle-id').textContent = data.sectionTitles[2].stName;
    document.getElementById('drinks-catalog-subtitle-id').textContent = data.sectionTitles[3].stName;

    const foodCatalogContainer = document.getElementById('food-catalog-id');
    foodCatalogContainer.innerHTML = '';

    data.foodCatalog.forEach(food => {
        const foodCardContainer = document.createElement('div');
        foodCardContainer.className = 'product-card';

        const foodInfo = document.createElement('div');
        foodInfo.className = 'product-info';

        const foodName = document.createElement('h3');
        foodName.textContent = food.foodCatalogName;

        const foodPrice = document.createElement('h4');
        foodPrice.textContent = `$${food.foodCatalogPrice}`;

        const foodButtonsContainer = document.createElement('div'); 
        foodButtonsContainer.className ='more-pics-products';

        for (let i = 0; i < 3; i++) {
            const foodButton = document.createElement('button');
            foodButton.textContent = `${i + 1}`; 
            foodButton.className = "more-options-button";

            foodButtonsContainer.appendChild(foodButton); 
        }

        const foodImg = document.createElement('img');
        foodImg.id = 'food-catalog-pic-id';
        foodImg.src = food.foodCatalogImage;
        foodImg.alt = food.foodCatalogName;

        foodCardContainer.appendChild(foodInfo);
        foodCardContainer.appendChild(foodImg);

        foodInfo.appendChild(foodName);
        foodInfo.appendChild(foodPrice);
        foodInfo.appendChild(foodButtonsContainer);
        foodCatalogContainer.appendChild(foodCardContainer);
    });

    // catalogo de bebidas
    const drinksCatalogContainer = document.getElementById('drinks-catalog-id');
    drinksCatalogContainer.innerHTML = '';

    data.drinksCatalog.forEach(drink => {
        const drinksCardContainer = document.createElement('div');
        drinksCardContainer.className = 'product-card';

        const drinkInfo = document.createElement('div');
        drinkInfo.className = 'product-info';

        const drinkName = document.createElement('h3');
        drinkName.textContent = drink.drinksCatalogName;

        const drinkPrice = document.createElement('h4');
        drinkPrice.textContent = `$${drink.drinksCatalogPrice}`;

        const drinkButtonsContainer = document.createElement('div'); 
        drinkButtonsContainer.className ='more-pics-products';

        for (let i = 0; i < 3; i++) {
            const drinkButton = document.createElement('button');
            drinkButton.textContent = `${i + 1}`; 
            drinkButton.className = "more-options-button";

            drinkButtonsContainer.appendChild(drinkButton); 
        }

        const drinkImg = document.createElement('img');
        drinkImg.id = 'drink-catalog-pic-id';
        drinkImg.src = drink.drinksCatalogImage;
        drinkImg.alt = drink.drinksCatalogName;

        drinksCardContainer.appendChild(drinkInfo);
        drinksCardContainer.appendChild(drinkImg);

        drinkInfo.appendChild(drinkName);
        drinkInfo.appendChild(drinkPrice);
        drinkInfo.appendChild(drinkButtonsContainer);
        drinksCatalogContainer.appendChild(drinksCardContainer);
    });
}

function renderServices (data) {

}

function renderAboutUs (data) {

}

function renderReviews (data) {

}

document.addEventListener('DOMContentLoaded', function() {
    loadData().then(data => {
        renderInfo(data);
    });
});