import { addChildToParent, createChildWithClasseName, setTextAsContent } from './home';

function createContactBodyHtml() {
    const bodyContainer = document.querySelector('#content');
    const contactBodyContainer = createChildWithClasseName('contact-body-container');
    const locationContainer = createChildWithClasseName('location-container');
    const contacts = createChildWithClasseName('contacts');

    setTextAsContent(`Ville : Lomé <br/>    Quartier:   <br/>`, locationContainer);
    setTextAsContent(`Contacts: 464-666-3456-44`, contacts);

    const contactItems = [locationContainer, contacts];
    contactItems.forEach((item) => {
        addChildToParent(item, contactBodyContainer);
    })
    addChildToParent(contactBodyContainer, bodyContainer);
}
export default createContactBodyHtml;