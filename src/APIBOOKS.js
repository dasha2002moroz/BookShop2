const apiKey = "AIzaSyAgg_6I4Yr5TNmF8E9l5TnnAGDeP-U_ocA"; 
const countShowCardsClick = 6; 
const loadBooksBtn = document.querySelector(".books__button-btn");

const booksCard = document.querySelector('.books__cards');

let productsData = []; //массив данных из json
let shownCards = countShowCardsClick;
let countClickBtnShowCards = 1; //изначальный счетчик карточек на странице

const categoryContent = document.querySelectorAll('.category-list__item-link');
const categories = [
          {
             name: 'Architecture',
             subject: 'Architecture'
          },
          {
             name: 'Art & Fashion',
             subject: 'Art'
          },
          {
             name: 'Biography',
             subject: 'Biography&Autobiography'
          },
          {
             name: 'Business',
             subject: 'Business'
          },
          {
             name: 'Crafts & Hobbies',
             subject: 'Crafts&Hobbies'
          },
          {
             name: 'Drama',
             subject: 'Drama'
          },
          {
             name: 'Fiction',
             subject: 'Fiction'
          },
          {
             name: 'Food & Drink',
             subject: 'Cooking'
          },
          {
             name: 'Health & Wellbeing',
             subject: 'Health&Fitness'
          },
          {
             name: 'History & Politics',
             subject: 'History'
          },
          {
             name: 'Humor',
             subject: 'Humor'
          },
          {
             name: 'Poetry',
             subject: 'Poetry'
          },
          {
             name: 'Psychology',
             subject: 'Psychology'
          },
          {
             name: 'Science',
             subject: 'Science'
          },
          {
             name: 'Technology',
             subject: 'Technology'
          },
          {
             name: 'Travel & Maps',
             subject: 'Travel'
          },
];
//Обработчик клика на кнопку "load more"
loadBooksBtn.addEventListener('click', loadCards);
//Обработчик клина на добавление в корзину
booksCard.addEventListener('click', handleCardClick);

//создаем переменную в которой храним активную категорию, по умолчанию первая
let currentIndex = 0;
let activeCategory = categories[currentIndex].subject;
   
// Изменение категорий книг
// Указывает какая ссылка активна
function activeCategories (index) {
    categoryContent.forEach(item => item.classList.remove('active-item'));
    categoryContent[index].classList.add('active-item');

};
// Вешает клик на cсылки и меняет активную категорию
categoryContent.forEach((link, index) => {
    link.addEventListener('click', () => {
        
        activeCategories(index);
        currentIndex = index;
        activeCategory = categories[index].subject;
        getResponse(shownCards);
    })
});
 
//Получение id из LS
function getBasketLocalStorage() {
    const cartDataJson = localStorage.getItem('basket');
    return cartDataJson ? JSON.parse(cartDataJson) : [];
};

//Запись id товаров в LS
function setBasketLocalStorage(basket) {
    const basketCount = document.querySelector('.basket__count');
    localStorage.setItem('basket', JSON.stringify(basket));
    basketCount.textContent = basket.length;
};

//Установка шага для кнопки load more
function loadCards () {
    countClickBtnShowCards++;
    shownCards = countShowCardsClick * countClickBtnShowCards;
    getResponse(shownCards);
};

function handleCardClick (event) {
    const targetButton = event.target.closest('.books__button-btn');
    if (!targetButton) return;

    const card = targetButton.closest('.books__cards');
    const id = card.dataset.productId;
    const basket = getBasketLocalStorage();

    basket.push(id);

    setBasketLocalStorage(basket);
    checkInActiveButtons(basket);
};
// изменение кнопки покупки книги
function checkInActiveButtons (basket) {
    const buttons = documents.querySelectorAll('.books__button-btn');
    
    buttons.forEach(btn => {

        const id = card.dataset.id;
        const isInbasket = basket.includes(id);

        btn.disabled = isInbasket;
        if(isInbasket) {
            btn.classlist.add('btn-active');
        }
        
        btn.textContent = isInbasket ? 'IN THE CART' : 'BUY NOW';
        
    });

}

function createCards(result) {
    let cards = '';
// item.volumeInfo.authors - массив
    result.forEach (item => {
        const averageRating = item.volumeInfo.averageRating;
     
         let stars = '';
         for (let i = 0; i < averageRating; i++) {
           stars += 
           `<span class="star">
                    <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
                    </svg>  
            </span>`;
         }
     
         for (let i = averageRating; i < 5; i++) {
           stars += `<span class="empty-star"><svg width="12" height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
           <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />
           </svg></span>`;
         }
        
        
        const cardBook = `
        <div class="books__card data-product-id='${item.id}">
            <div class="books__card-image">
                <img class="books__card-img" src="${item.volumeInfo.imageLinks.thumbnail ?? '../img/placeholder.jpg'}">
            </div>
            <div class="books__card-content">
            <p class="books__card-autor">
                ${item.volumeInfo.authors !== undefined ? item.volumeInfo.authors : ''}
            </p>
            <h2 class="books__card-name">
                ${item.volumeInfo.title !== undefined ? item.volumeInfo.title : ''}
            </h2>
            <div class="books__card-reviews">
                <div class="book-rating">
                    ${stars}
                </div>
                <p class="list-books__card--reviews-text">
                    ${item.volumeInfo.ratingsCount !== undefined ? item.volumeInfo.ratingsCount + ' review' : ''}
                </p>
            </div>
            <p class="books__card-description">
                ${item.volumeInfo.description !== undefined ? item.volumeInfo.description : ''}
            </p>
            <h2 class="books__card-price">
                ${(item.saleInfo.retailPrice?.amount ?? '') + ' ' + (item.saleInfo.retailPrice?.currencyCode ?? '')}
            </h2>
            <button class="books__button-btn">
            buy now
            </button>
            
            </div>
        </div>`;

      cards += cardBook;
    });
    booksCard.innerHTML += cards;
};
//загрузка книг
getResponse(shownCards);
//запрос к серверу
async function getResponse (count) {
  
    const responseApi = await fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:"${activeCategory}"&key=${apiKey}&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`)
            .then(response => {
                return response.json();
            })
            .then((json) => {
                return json['items'];
                
            })
            .catch(() => {console.log('error'); 
        });

    createCards(responseApi);
};