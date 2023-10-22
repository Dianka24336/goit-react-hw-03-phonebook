import css from './ContactItem.module.css';

export const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button className={css.delButton} type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};
