import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IContact {
    id: number,
    name: string;
    email: string;
    phoneNumber: string;
}

const initialState: IContact[] = [
    {
        id: 1,
        name: 'Bento',
        email: 'bento@teste.com',
        phoneNumber: '2384245'
    }
];

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action: PayloadAction<IContact>) => {
            const newContact = action.payload;

            if(state.find((contact) => contact.name === newContact.name)) {
                alert('This name is already registered in your contact list.');
            } else if(state.find((contact) => contact.email === newContact.email)) {
                alert('This e-mail is already registered in your contact list.');
            } else if(state.find((contact) => contact.phoneNumber === newContact.phoneNumber)) {
                alert('This phone number is already registered in your contact list');
            }
            else  {
                state.push(newContact);
            }
        },
        editContact: (state, action: PayloadAction<IContact>) => {
            const targetContact = action.payload;
            return state.map((contact) => contact.id === targetContact.id ? {...targetContact} : contact)
        },
        removeContact: (state, action: PayloadAction<IContact>) => {
            const targetContact = action.payload;
            return state.filter((contact) => contact.id !== targetContact.id)
        },
    }
});

export default contactsSlice.reducer;
export const { addContact, editContact, removeContact } = contactsSlice.actions;