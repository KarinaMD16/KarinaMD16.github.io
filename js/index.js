function loadData() {
    return fetch('/data/TheSugarVault.json')
      .then(response => response.json())
      .catch(error => console.error('Error loading the JSON:', error));
}

function renderInfo(data){
    renderHeader(data);
    renderHero(data);  
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

function renderHero (data) {
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

    const servicesContainer = document.getElementById('services-card-container-id');
    servicesContainer.innerHTML = '';

    data.services.forEach(services => {

        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';

        const serviceInfo = document.createElement('div');
        serviceInfo.className ='serviceInfo';

        const serviceImg = document.createElement('img');
        serviceImg.src = services.servicesPicture;
        serviceImg.alt = services.servicesName;

        const serviceName = document.createElement('h2');
        serviceName.textContent = services.servicesName;

        const serviceDescription = document.createElement('h4');
        serviceDescription.textContent = services.servicesDescription;

        const serviceButton = document.createElement('button');
        serviceButton.className ='secondary-buton';
        serviceButton.textContent = 'Read More';

        const serviceParagraph = document.createElement('p');
        serviceParagraph.textContent =services.servicesParagraph;

        serviceInfo.appendChild(serviceImg);
        serviceInfo.appendChild(serviceName);
        serviceInfo.appendChild(serviceDescription);
        serviceInfo.appendChild(serviceButton);
        serviceInfo.appendChild(serviceParagraph);

        serviceCard.appendChild(serviceInfo);

        servicesContainer.appendChild(serviceCard);
    });
}

function renderAboutUs (data) {
    document.getElementById('about-us-logo').src = data.company.companyIsoLogo;
    document.getElementById('about-us-description').textContent = data.aboutUs.aboutDescription;
    document.getElementById('about-us-button').textContent = data.aboutUs.aboutButton;
    document.getElementById('flower-mochis').src = data.aboutUs.aboutImg;
}

function renderReviews(data) {
    const reviewContainer = document.getElementById('card-section');
    reviewContainer.innerHTML = '';

    const bgColor = ['#CDF0EA', '#F7DBF1', '#BFAEE2']; 

    data.reviews.forEach((review, index) => {
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';

        reviewCard.style.backgroundColor = bgColor[index % bgColor.length];

        const starContainer = document.createElement('div');
        starContainer.className = 'review-stars';

        for (let i = 0; i < 5; i++) {
            const starSvg = document.createElement('span');
            starSvg.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>
            `;
            starContainer.appendChild(starSvg);
        }

        const reviewContentContainer = document.createElement('div');

        const reviewTitle = document.createElement('h3');
        reviewTitle.textContent = review.reviewTitle;

        const reviewContent = document.createElement('p');
        reviewContent.textContent = review.reviewDescription; 

        const reviewerInfo = document.createElement('div');
        reviewerInfo.className = 'user-info';

        const reviewerPic = document.createElement('img');
        reviewerPic.src = review.reviewerPicture;
        reviewerPic.alt = review.reviewerName;

        const personContainer = document.createElement('div');

        const usersReviewerName = document.createElement('h4');
        usersReviewerName.textContent = review.reviewerName;

        const reviewPostDate = document.createElement('p');
        reviewPostDate.textContent = review.reviewDate;

        reviewCard.appendChild(starContainer);
        reviewCard.appendChild(reviewContentContainer);
        reviewCard.appendChild(reviewerInfo);
        
        reviewContentContainer.appendChild(starContainer);
        reviewContentContainer.appendChild(reviewTitle);
        reviewContentContainer.appendChild(reviewContent);
        
        reviewerInfo.appendChild(reviewerPic);
        reviewerInfo.appendChild(personContainer);

        personContainer.appendChild(usersReviewerName);
        personContainer.appendChild(reviewPostDate);

        reviewContainer.appendChild(reviewCard);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    loadData().then(data => {
        renderInfo(data);
    });
});


// scripts de la pagina de estilos 


// alert

function showAlert() {
    document.getElementById('alert-msg').style.display = 'block';
    document.getElementById('alert-overlay').style.display = 'block';
}

function hideAlert(){
    document.getElementById('alert-msg').style.display = 'none';
    document.getElementById('alert-overlay').style.display = 'none';
}


// modal

function showModal() {
    document.getElementById('modal-msg').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
}

function closeModal(){
    document.getElementById('modal-msg').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
}

function continueBtn(){
    document.getElementById('modal-msg').style.display = 'none';
    document.getElementById('modal-overlay').style.display = 'none';
    
}