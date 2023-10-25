/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://books/./src/css/style.css?");

/***/ }),

/***/ "./src/APIBOOKS.js":
/*!*************************!*\
  !*** ./src/APIBOOKS.js ***!
  \*************************/
/***/ (() => {

eval("const apiKey = \"AIzaSyAgg_6I4Yr5TNmF8E9l5TnnAGDeP-U_ocA\"; \r\nconst countShowCardsClick = 6; \r\nconst loadBooksBtn = document.querySelector(\".books__button-btn\");\r\n\r\nconst booksCard = document.querySelector('.books__cards');\r\n\r\nlet productsData = []; //массив данных из json\r\nlet shownCards = countShowCardsClick;\r\nlet countClickBtnShowCards = 1; //изначальный счетчик карточек на странице\r\n\r\nconst categoryContent = document.querySelectorAll('.category-list__item-link');\r\nconst categories = [\r\n          {\r\n             name: 'Architecture',\r\n             subject: 'Architecture'\r\n          },\r\n          {\r\n             name: 'Art & Fashion',\r\n             subject: 'Art'\r\n          },\r\n          {\r\n             name: 'Biography',\r\n             subject: 'Biography&Autobiography'\r\n          },\r\n          {\r\n             name: 'Business',\r\n             subject: 'Business'\r\n          },\r\n          {\r\n             name: 'Crafts & Hobbies',\r\n             subject: 'Crafts&Hobbies'\r\n          },\r\n          {\r\n             name: 'Drama',\r\n             subject: 'Drama'\r\n          },\r\n          {\r\n             name: 'Fiction',\r\n             subject: 'Fiction'\r\n          },\r\n          {\r\n             name: 'Food & Drink',\r\n             subject: 'Cooking'\r\n          },\r\n          {\r\n             name: 'Health & Wellbeing',\r\n             subject: 'Health&Fitness'\r\n          },\r\n          {\r\n             name: 'History & Politics',\r\n             subject: 'History'\r\n          },\r\n          {\r\n             name: 'Humor',\r\n             subject: 'Humor'\r\n          },\r\n          {\r\n             name: 'Poetry',\r\n             subject: 'Poetry'\r\n          },\r\n          {\r\n             name: 'Psychology',\r\n             subject: 'Psychology'\r\n          },\r\n          {\r\n             name: 'Science',\r\n             subject: 'Science'\r\n          },\r\n          {\r\n             name: 'Technology',\r\n             subject: 'Technology'\r\n          },\r\n          {\r\n             name: 'Travel & Maps',\r\n             subject: 'Travel'\r\n          },\r\n];\r\n//Обработчик клика на кнопку \"load more\"\r\nloadBooksBtn.addEventListener('click', loadCards);\r\n//Обработчик клина на добавление в корзину\r\nbooksCard.addEventListener('click', handleCardClick);\r\n\r\n//создаем переменную в которой храним активную категорию, по умолчанию первая\r\nlet currentIndex = 0;\r\nlet activeCategory = categories[currentIndex].subject;\r\n   \r\n// Изменение категорий книг\r\n// Указывает какая ссылка активна\r\nfunction activeCategories (index) {\r\n    categoryContent.forEach(item => item.classList.remove('active-item'));\r\n    categoryContent[index].classList.add('active-item');\r\n\r\n};\r\n// Вешает клик на cсылки и меняет активную категорию\r\ncategoryContent.forEach((link, index) => {\r\n    link.addEventListener('click', () => {\r\n        \r\n        activeCategories(index);\r\n        currentIndex = index;\r\n        activeCategory = categories[index].subject;\r\n        getResponse(shownCards);\r\n    })\r\n});\r\n \r\n//Получение id из LS\r\nfunction getBasketLocalStorage() {\r\n    const cartDataJson = localStorage.getItem('basket');\r\n    return cartDataJson ? JSON.parse(cartDataJson) : [];\r\n};\r\n\r\n//Запись id товаров в LS\r\nfunction setBasketLocalStorage(basket) {\r\n    const basketCount = document.querySelector('.basket__count');\r\n    localStorage.setItem('basket', JSON.stringify(basket));\r\n    basketCount.textContent = basket.length;\r\n};\r\n\r\n//Установка шага для кнопки load more\r\nfunction loadCards () {\r\n    countClickBtnShowCards++;\r\n    shownCards = countShowCardsClick * countClickBtnShowCards;\r\n    getResponse(shownCards);\r\n};\r\n\r\nfunction handleCardClick (event) {\r\n    const targetButton = event.target.closest('.books__button-btn');\r\n    if (!targetButton) return;\r\n\r\n    const card = targetButton.closest('.books__cards');\r\n    const id = card.dataset.productId;\r\n    const basket = getBasketLocalStorage();\r\n\r\n    basket.push(id);\r\n\r\n    setBasketLocalStorage(basket);\r\n    checkInActiveButtons(basket);\r\n};\r\n// изменение кнопки покупки книги\r\nfunction checkInActiveButtons (basket) {\r\n    const buttons = documents.querySelectorAll('.books__button-btn');\r\n    \r\n    buttons.forEach(btn => {\r\n\r\n        const id = card.dataset.id;\r\n        const isInbasket = basket.includes(id);\r\n\r\n        btn.disabled = isInbasket;\r\n        if(isInbasket) {\r\n            btn.classlist.add('btn-active');\r\n        }\r\n        \r\n        btn.textContent = isInbasket ? 'IN THE CART' : 'BUY NOW';\r\n        \r\n    });\r\n\r\n}\r\n\r\nfunction createCards(result) {\r\n    let cards = '';\r\n// item.volumeInfo.authors - массив\r\n    result.forEach (item => {\r\n        const averageRating = item.volumeInfo.averageRating;\r\n     \r\n         let stars = '';\r\n         for (let i = 0; i < averageRating; i++) {\r\n           stars += \r\n           `<span class=\"star\">\r\n                    <svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\r\n                    <path d=\"M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z\" />\r\n                    </svg>  \r\n            </span>`;\r\n         }\r\n     \r\n         for (let i = averageRating; i < 5; i++) {\r\n           stars += `<span class=\"empty-star\"><svg width=\"12\" height=\"12\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\">\r\n           <path d=\"M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z\" />\r\n           </svg></span>`;\r\n         }\r\n        \r\n        \r\n        const cardBook = `\r\n        <div class=\"books__card data-product-id='${item.id}\">\r\n            <div class=\"books__card-image\">\r\n                <img class=\"books__card-img\" src=\"${item.volumeInfo.imageLinks.thumbnail ?? '../img/placeholder.jpg'}\">\r\n            </div>\r\n            <div class=\"books__card-content\">\r\n            <p class=\"books__card-autor\">\r\n                ${item.volumeInfo.authors !== undefined ? item.volumeInfo.authors : ''}\r\n            </p>\r\n            <h2 class=\"books__card-name\">\r\n                ${item.volumeInfo.title !== undefined ? item.volumeInfo.title : ''}\r\n            </h2>\r\n            <div class=\"books__card-reviews\">\r\n                <div class=\"book-rating\">\r\n                    ${stars}\r\n                </div>\r\n                <p class=\"list-books__card--reviews-text\">\r\n                    ${item.volumeInfo.ratingsCount !== undefined ? item.volumeInfo.ratingsCount + ' review' : ''}\r\n                </p>\r\n            </div>\r\n            <p class=\"books__card-description\">\r\n                ${item.volumeInfo.description !== undefined ? item.volumeInfo.description : ''}\r\n            </p>\r\n            <h2 class=\"books__card-price\">\r\n                ${(item.saleInfo.retailPrice?.amount ?? '') + ' ' + (item.saleInfo.retailPrice?.currencyCode ?? '')}\r\n            </h2>\r\n            <button class=\"books__button-btn\">\r\n            buy now\r\n            </button>\r\n            \r\n            </div>\r\n        </div>`;\r\n\r\n      cards += cardBook;\r\n    });\r\n    booksCard.innerHTML += cards;\r\n};\r\n//загрузка книг\r\ngetResponse(shownCards);\r\n//запрос к серверу\r\nasync function getResponse (count) {\r\n  \r\n    const responseApi = await fetch(`https://www.googleapis.com/books/v1/volumes?q=\"subject:\"${activeCategory}\"&key=${apiKey}&printType=books&startIndex=${count}&maxResults=6&langRestrict=en`)\r\n            .then(response => {\r\n                return response.json();\r\n            })\r\n            .then((json) => {\r\n                return json['items'];\r\n                \r\n            })\r\n            .catch(() => {console.log('error'); \r\n        });\r\n\r\n    createCards(responseApi);\r\n};\n\n//# sourceURL=webpack://books/./src/APIBOOKS.js?");

/***/ }),

/***/ "./src/Navigation.js":
/*!***************************!*\
  !*** ./src/Navigation.js ***!
  \***************************/
/***/ (() => {

eval("const navigation = document.querySelector('.section-navigation__category-list')\r\nconst navigationLink = navigation.querySelectorAll('.category-list__item-link');\r\n\r\nfunction activeItem (index) {\r\n    navigationLink.forEach(item => item.classList.remove('active-item'));\r\n    navigationLink[index].classList.add('active-item'); \r\n}\r\n\r\nnavigationLink.forEach((link, index) => {\r\n    link.addEventListener('click', () => {\r\n      activeItem(index);\r\n    })\r\n})\n\n//# sourceURL=webpack://books/./src/Navigation.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navigation.js */ \"./src/Navigation.js\");\n/* harmony import */ var _Navigation_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navigation_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./APIBOOKS.js */ \"./src/APIBOOKS.js\");\n/* harmony import */ var _APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_APIBOOKS_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://books/./src/index.js?");

/***/ }),

/***/ "./src/slider.js":
/*!***********************!*\
  !*** ./src/slider.js ***!
  \***********************/
/***/ (() => {

eval("let images = [{\r\n    url: \"./src/images/banner.png\",\r\n    title: \"Mini Cooper черный\"\r\n  }, { \r\n    url: \"./src/images/banner2.png\",\r\n    title: \"Mini Cooper красный\"\r\n  }, {\r\n    url: \"./src/images/banner3.png\",\r\n    title: \"Mini Cooper синий\"\r\n  }];\r\n\r\nfunction initSlider(images, options) {\r\n  if (!images || !images.length) return;\r\n  \r\n  options = options || {\r\n    dots: false,\r\n    titles: false,\r\n    autoplay: false,\r\n    autoplayInterval: 5000\r\n  }\r\n  \r\n\r\n\r\n  const sliderWrapper = document.querySelector(\".slider\");\r\n  const sliderImages = sliderWrapper.querySelector(\".slider__images\");\r\n  \r\n  initImages();\r\n  \r\n  if (options.dots) {\r\n    initDots();\r\n  }\r\n  \r\n  if (options.titles) {\r\n    initTitles();\r\n  }\r\n  \r\n  if (options.autoplay) {\r\n    initAutoplay();\r\n  }\r\n  \r\n  function initImages() {\r\n    images.forEach((image, index) => {\r\n      let imageElement = document.createElement(\"div\");\r\n      imageElement.className = `image n${index} ${index? \"\" : \"active\"}`;\r\n      imageElement.dataset.index = index;\r\n      imageElement.style.backgroundImage = `url(${image.url})`;\r\n      sliderImages.appendChild(imageElement);\r\n    });\r\n  }\r\n  \r\n\r\n  function moveSlider(num) {\r\n    sliderImages.querySelector(\".active\").classList.remove(\"active\");\r\n    sliderImages.querySelector(`.n${num}`).classList.add(\"active\");\r\n    \r\n    if (options.titles) {\r\n      let title = sliderImages.querySelector(\".slider__images-title\");\r\n      if (images[num].title) {\r\n        title.innerText = images[num].title;\r\n        title.style.display = \"block\";\r\n      } else {\r\n        title.style.display = \"none\";\r\n      }\r\n    }\r\n    \r\n    if (options.dots) {\r\n      let dotsWrapper = document.querySelector(\".slider__dots\");\r\n      dotsWrapper.querySelector(\".active\").classList.remove(\"active\");\r\n      dotsWrapper.querySelector(`.n${num}`).classList.add(\"active\");\r\n    }\r\n  }\r\n  \r\n  function initDots() {\r\n    let dotsWrapper = document.createElement(\"div\");\r\n    dotsWrapper.className = \"slider__dots\";\r\n    images.forEach((image, index) => {\r\n      let dot = document.createElement(\"div\");\r\n      dot.className = `slider__dots-item n${index} ${index? \"\" : \"active\"}`;\r\n      dot.dataset.index = index;\r\n      dot.addEventListener(\"click\", function() {\r\n        moveSlider(this.dataset.index);\r\n      });\r\n      dotsWrapper.appendChild(dot);\r\n    });\r\n    sliderWrapper.appendChild(dotsWrapper);\r\n  }\r\n  \r\n  function initTitles() {\r\n    let titleHTML = `<div class=\"slider__images-title\">${images[0].title}</div>`;\r\n    sliderImages.innerHTML += titleHTML;\r\n  }\r\n  \r\n  function initAutoplay() {\r\n    setInterval(() => {\r\n      let currentNumber = +sliderImages.querySelector(\".active\").dataset.index;\r\n      let nextNumber = currentNumber === images.length - 1? 0 : currentNumber + 1;\r\n      moveSlider(nextNumber);\r\n    }, options.autoplayInterval);\r\n  }\r\n}\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n  let sliderOptions = {\r\n    dots: true,\r\n    titles: false,\r\n    autoplay: true,\r\n    autoplayInterval: 5000\r\n  }\r\n  initSlider(images, sliderOptions);\r\n});\n\n//# sourceURL=webpack://books/./src/slider.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;