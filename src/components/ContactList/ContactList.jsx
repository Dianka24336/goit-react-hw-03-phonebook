import { ContactItem } from './ContactItem';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <ContactItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};
