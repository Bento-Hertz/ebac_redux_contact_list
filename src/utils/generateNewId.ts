import { IContact } from '../store/reducers/contacts';

    
export const generateNewId = (contacts: IContact[]) => {
    let newId = 0;
    contacts.forEach((contact) => {
        if(contact.id >= newId) {
            newId = contact.id + 1;
        }
    })
    return newId;
}