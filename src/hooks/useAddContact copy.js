import { useState } from 'react';
import { nanoid } from 'nanoid';
import { showError, showSuccess } from '../utils/notification';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../redux/contactsSlice';

export const useAddContact = () => {
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeInput = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleAddContact = async event => {
    event.preventDefault();

    const contactsName = contacts.map(contact => contact.name);

    const matchName = contactsName.some(
      contactName => contactName.toLowerCase() === name.toLowerCase()
    );

    if (matchName) {
      return showError(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number,
    };

    try {
      const response = await addContact(newContact);

      if (response.data?.name) {
        showSuccess(`Contact ${response.data?.name} added`);
        reset();
      }

      if (response.error?.status === 404) {
        showError(`Ups!...`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return { name, number, handleAddContact, handleChangeInput, isLoading };
};
