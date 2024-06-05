import { useEffect, useState } from 'react';
import { editContact, IContact, removeContact } from '../../../store/reducers/contacts';
import * as S from './styles'
import { useDispatch } from 'react-redux';

interface Props {
    contact: IContact;
}

export const Contact = ({ contact }: Props) => {
    const dispatch = useDispatch();

    const [tempContact, setTempContact] = useState<IContact>({
        id: contact.id,
        name: contact.name,
        email: contact.email,
        phoneNumber: contact.phoneNumber
    });
    const [isNotEditing, setIsNotEditing] = useState<boolean>(true);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(isNotEditing)
            return;

        const { name: inputName, value: newValue } = event.target;
        setTempContact({
            ...tempContact,
            [`${inputName}`]: newValue
        })
    }

    const onClickingCancelButton = () => {
        setIsNotEditing(true);
        setTempContact({
            ...contact
        })
    }

    const onClickingSaveButton = () => {
        if(!tempContact.name || !tempContact.email || !tempContact.phoneNumber) {
            alert('At least one of the fields is empty!');
            return;
        }

        dispatch(editContact(tempContact));
        setIsNotEditing(true);
    }

    const onClickingDeleteButton = () => {
        dispatch(removeContact(contact));
    }
    
    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <S.Contact>
            <S.Form onSubmit={handleFormSubmit}>
                <S.FieldContainer>
                    <S.Label htmlFor='name'>Name</S.Label>
                    <S.Field 
                        type='text' 
                        name='name'
                        disabled={isNotEditing} 
                        value={tempContact.name} 
                        onChange={event => handleInput(event)}
                    />
                </S.FieldContainer>
                <S.FieldContainer>
                    <S.Label htmlFor='email'>E-mail</S.Label>
                    <S.Field 
                        type='email' 
                        name='email'
                        value={tempContact.email} 
                        disabled={isNotEditing} 
                        onChange={event => handleInput(event)}
                    />
                </S.FieldContainer>
                <S.FieldContainer>
                    <S.Label htmlFor='phoneNumber'>Phone number</S.Label>
                    <S.Field 
                        type='tel' 
                        name='phoneNumber'
                        value={tempContact.phoneNumber} 
                        disabled={isNotEditing} 
                        onChange={event => handleInput(event)}
                    />
                </S.FieldContainer>
            </S.Form>
            {isNotEditing ? 
                <S.Buttons>
                    <S.Delete type='button' onClick={onClickingDeleteButton}>Delete</S.Delete>
                    <S.Edit type='button' onClick={() => setIsNotEditing(false)}>Edit</S.Edit>
                </S.Buttons>
            :
                <S.Buttons>
                    <S.Save type='button' onClick={onClickingSaveButton}>Save</S.Save>
                    <S.Cancel type='button' onClick={onClickingCancelButton}>Cancel</S.Cancel>
                </S.Buttons>
            }
        </S.Contact>
    );
}