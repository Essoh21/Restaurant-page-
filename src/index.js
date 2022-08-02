import { createHeaderHtml, createHomeBodyHtml, createFooterHtml } from "./home.js";
import { createMenuBodyHtml } from "./menu.js";
import './style.css';
import createContactBodyHtml from './contacts.js';

createHeaderHtml();
createHomeBodyHtml();
createMenuBodyHtml();
createContactBodyHtml();
createFooterHtml();


const homeButton = document.querySelector('.home-button');
const menuButton = document.querySelector('.menu-button');
const orderMeButton = document.querySelector('.order-button');
const contactsButton = document.querySelector('.contact-button');
const contactBodyContainer = document.querySelector('.contact-body-container');
const homeBodyContainer = document.querySelector('.home-body');
const menuBodyContainer = document.querySelector('.menu-body-container');


function displayFlexNode(nodeToDisplay) {
    nodeToDisplay.style.display = 'flex';
}

function hideNode(nodeToHide) {
    nodeToHide.style.display = 'none';
}

function displayHome() {
    displayFlexNode(homeBodyContainer);
    hideNode(menuBodyContainer);
    hideNode(contactBodyContainer);
}

function changeOpacityOfButtton(buttonToChange) {
    buttonToChange.style.opacity = .5;
}

function setOpacityToOne(buttonToreset) {
    buttonToreset.style.opacity = 1;
}

function displayContacts() {
    displayFlexNode(contactBodyContainer);
    hideNode(homeBodyContainer);
    hideNode(menuBodyContainer);
}

function displayMenu() {
    displayFlexNode(menuBodyContainer);
    hideNode(homeBodyContainer);
    hideNode(contactBodyContainer);
}

function displayMenuAndChangeOpacityOfMenuButton() {
    displayMenu();
    changeOpacityOfButtton(menuButton);
    setOpacityToOne(homeButton);
    setOpacityToOne(contactsButton);
}

function displayHomeAndChangeOpacityOfMenuButton() {
    displayHome();
    changeOpacityOfButtton(homeButton);
    setOpacityToOne(menuButton);
    setOpacityToOne(contactsButton);
}

function displayContactsAndChangeOpacityOfContactButton() {
    displayContacts();
    changeOpacityOfButtton(contactsButton);
    setOpacityToOne(menuButton);
    setOpacityToOne(homeButton);
}

homeButton.addEventListener('click', displayHomeAndChangeOpacityOfMenuButton);
menuButton.addEventListener('click', displayMenuAndChangeOpacityOfMenuButton)
orderMeButton.addEventListener('click', displayMenuAndChangeOpacityOfMenuButton);
contactsButton.addEventListener('click', displayContactsAndChangeOpacityOfContactButton);