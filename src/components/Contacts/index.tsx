import { useSelector } from 'react-redux';
import { Contact } from './Contact';
import * as S from './styles';
import { RootReducer } from '../../store';
import { NewContact } from './NewContact';

export const Contacts = () => {
    const contacts = useSelector((state: RootReducer) => state.contacts);

    return (
        <>
            <S.Titulo>List of Contacts</S.Titulo>
            <S.Contacts>
                <NewContact />
                {contacts.length > 0 ? 
                    contacts.map((contact) => (
                        <Contact 
                            contact={contact}
                            key={contact.id}
                        />
                    ))
                :
                    <h3>The contact list is empty ;-;</h3>
                }
            </S.Contacts>
        </>
    );
}