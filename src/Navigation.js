const navigation = document.querySelector('.section-navigation__category-list')
const navigationLink = navigation.querySelectorAll('.category-list__item-link');

function activeItem (index) {
    navigationLink.forEach(item => item.classList.remove('active-item'));
    navigationLink[index].classList.add('active-item'); 
}

navigationLink.forEach((link, index) => {
    link.addEventListener('click', () => {
      activeItem(index);
    })
})