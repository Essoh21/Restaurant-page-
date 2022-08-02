function createDiv() {
    const divCreated = document.createElement('div');
    return divCreated;
}

function addClassName(name, node) {
    node.classList.add(name);
}

function addChildToParent(child, parent) {
    parent.appendChild(child);
}

function createChildWithClasseName(className) {
    const child = createDiv();
    addClassName(className, child);
    return child;
}

function setTextAsContent(text, targetNode) {
    targetNode.innerHTML = text;
}

function createLinkTo(linkRef) {
    const linkTag = document.createElement('a');
    linkTag.href = linkRef;
    return linkTag;
}

function createHeaderHtml() {
    const bodyContent = document.querySelector('#content');
    const header = createChildWithClasseName('header');

    const headerUperChild = createChildWithClasseName('header-uper-child');
    const textJo = createChildWithClasseName('jo');
    setTextAsContent('jo', textJo);
    const textGio = createChildWithClasseName('gio');
    setTextAsContent('-Gio', textGio);
    addChildToParent(textJo, headerUperChild);
    addChildToParent(textGio, headerUperChild);
    const headerLowerChild = createChildWithClasseName('header-lower-child');
    const homeButton = createChildWithClasseName('home-button');
    setTextAsContent('Home', homeButton);
    const menuButton = createChildWithClasseName('menu-button');
    setTextAsContent('Menu', menuButton);
    const contactsButton = createChildWithClasseName('contact-button');
    setTextAsContent('Contacts', contactsButton);
    const buttonsArray = [homeButton, menuButton, contactsButton];
    buttonsArray.forEach((button) => {
        addChildToParent(button, headerLowerChild);
    });

    addChildToParent(headerUperChild, header);
    addChildToParent(headerLowerChild, header);
    addChildToParent(header, bodyContent);
}

function createHomeBodyHtml() {
    const bodyContent = document.querySelector('#content');
    const homeBody = createChildWithClasseName('home-body');
    const homeBodyTitle = createChildWithClasseName('home-body-title');
    const orderButton = createChildWithClasseName('order-button');
    const copyRight = createChildWithClasseName('copy-right');
    const copyRightLink = createLinkTo('https://github.com/Essoh21');
    const mask = createChildWithClasseName('mask');

    setTextAsContent('Eat healthy with us ', homeBodyTitle);
    setTextAsContent('Order Me', orderButton);
    setTextAsContent('Copyright &copy;Essohanam2022', copyRightLink);

    addChildToParent(copyRightLink, copyRight);

    const nodesArray = [homeBodyTitle, orderButton, copyRight, mask];
    nodesArray.forEach((bodyNode) => {
        addChildToParent(bodyNode, homeBody);
    })

    addChildToParent(homeBody, bodyContent);

}

function createFooterHtml() {
    const footer = createChildWithClasseName('footer');
    const bodyContent = document.querySelector('#content');
    setTextAsContent('jo-Gio', footer);
    addChildToParent(footer, bodyContent);
}

export {
    createHeaderHtml,
    createHomeBodyHtml,
    addChildToParent,
    createChildWithClasseName,
    setTextAsContent,
    createFooterHtml,
    createLinkTo
};