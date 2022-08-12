import PropTypes from 'prop-types';
import { Spinner } from '../Spinner/Spinner';
import style from './ContactItem.module.scss';

import { useDeleteContactMutation } from '../../redux/contactsSlice';

const ContactItem = ({ contact: { id, name, number } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  return (
    <li className={style.item}>
      <span className={style.itemName}>{name}:</span>
      <span className={style.itemNumber}>{number}</span>
      <button
        type="button"
        onClick={() => deleteContact(id)}
        className={style.delete_btn}
        disabled={isLoading}
      >
        {!isLoading ? 'x' : <Spinner size={20} />}
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactItem;
