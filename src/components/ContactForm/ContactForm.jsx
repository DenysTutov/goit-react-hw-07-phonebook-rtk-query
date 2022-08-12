import { useAddContact } from 'hooks/useAddContact';
import { Spinner } from 'components/Spinner/Spinner';
import styles from './ContactForm.module.scss';

export const ContactForm = () => {
  const { name, number, handleAddContact, handleChangeInput, isLoading } =
    useAddContact();

  return (
    <form onSubmit={handleAddContact} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChangeInput}
          value={name}
          autoFocus
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          className={styles.input}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChangeInput}
          value={number}
        />
      </label>

      <button
        type="submit"
        className={styles.submit_btn}
        disabled={name === ''}
      >
        Add contact
        {isLoading && <Spinner size={20} />}
      </button>
    </form>
  );
};
