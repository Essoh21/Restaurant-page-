import { addChildToParent, createChildWithClasseName, setTextAsContent } from './home';
import { imagesNameArray, menuImagesSourcesArray, pricesArray } from './images.js';
const NUMBER_OF_MENU = imagesNameArray.length;



function getImageSourceLinkAs(imageSource) {
    const newSourceName = require(imageSource);
    return newSourceName;
}

function createImageWithSource(imageSource, imageWidth, imageHeight) {
    const theImage = new Image(imageWidth, imageHeight);
    theImage.src = imageSource;
    return theImage;
}

class MenuCard {
    constructor(menuName, menuImageSource, menuPrice, menuImageWidth, menuImageHeight) {
        this.menuName = menuName;
        this.menuImageSource = menuImageSource;
        this.menuPrice = menuPrice;
        this.menuImageWidth = menuImageWidth;
        this.menuImageHeight = menuImageHeight;

    }
    createMenuCard() {

        const cardContainer = createChildWithClasseName('card-container');
        const menuImage = createImageWithSource(this.menuImageSource, this.menuImageWidth, this.menuImageHeight);
        const cardTextContainer = createChildWithClasseName('card-text-container');
        setTextAsContent(`${this.menuName} <br/> ${this.menuPrice}`, cardTextContainer);
        const cardItemsArray = [menuImage, cardTextContainer];
        cardItemsArray.forEach((cardItem) => {
            addChildToParent(cardItem, cardContainer);

        });


        return cardContainer;

    }
}

//const ayimolouMenu = new MenuCard('Ayimolou', ayimolou, '250F', 300, 222);
function getMenuBodyItems() {
    const menuBodyItems = [];
    for (let i = 0; i < NUMBER_OF_MENU; i += 1) {
        const menu = new MenuCard(imagesNameArray[i], menuImagesSourcesArray[i], pricesArray[i], 300, 222);
        menuBodyItems.push(menu.createMenuCard());
    }
    return menuBodyItems;
}

function createMenuBodyHtml() {
    const menuBodyContainer = createChildWithClasseName('menu-body-container');
    const menuBodyItems = getMenuBodyItems();
    const menuBody = document.querySelector('#content');

    menuBodyItems.forEach((menuItem) => {
        addChildToParent(menuItem, menuBodyContainer);
    })
    addChildToParent(menuBodyContainer, menuBody);
}
export { createMenuBodyHtml };