import { useEffect, useState } from 'react';
import * as S from './styles';
import contacts, { addContact, IContact } from '../../../store/reducers/contacts';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../store';
import { generateNewId } from '../../../utils/generateNewId';

export const NewContact = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state: RootReducer) => state.contacts);

    const [newContact, setNewContact] = useState<IContact>({
        id: 0,
        name: '',
        email: '',
        phoneNumber: ''
    });

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name: inputName, value: newValue } = event.target;
        setNewContact({
            ...newContact,
            [`${inputName}`]: newValue
        })
    }

    const onClickingNewContactButton = () => {
        if(!newContact.name || !newContact.email || !newContact.phoneNumber) {
            alert('All the fields must be filled!');
            return;
        }

        dispatch(addContact(newContact));

        setNewContact({
            ...newContact,
            name: '',
            email: '',
            phoneNumber: ''
        })
    }

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    useEffect(() => {
        const newId = generateNewId(contacts);
        setNewContact({
            ...newContact,
            id: newId
        });
    }, [contacts]);

    return (
        <S.Container>
            <S.Form onSubmit={handleFormSubmit}>
                <S.Field 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={newContact.name}
                    onChange={handleInput}
                />
                <S.Field 
                    type='email'
                    name='email'
                    placeholder='E-mail'
                    value={newContact.email}
                    onChange={handleInput}
                />
                <S.Field 
                    type='tel'
                    name='phoneNumber'
                    placeholder='Phone number'
                    value={newContact.phoneNumber}
                    onChange={handleInput}
                />
            </S.Form>
            <S.NewContactBtn type='button' onClick={onClickingNewContactButton}>New Contact +</S.NewContactBtn>
        </S.Container>
    );
}