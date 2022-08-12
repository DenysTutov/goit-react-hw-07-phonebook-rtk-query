import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsApi from '../services/contactsApi';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    try {
      const contacts = await contactsApi.fetchContacts();
      return contacts;
    } catch (error) {
      return error;
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const contact = await contactsApi.addContact(newContact);
      return contact;
    } catch (error) {
      return error;
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const deletedContact = await contactsApi.deleteContact(contactId);
      return deletedContact.id;
    } catch (error) {
      return error;
    }
  }
);
