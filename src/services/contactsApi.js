import axios from 'axios';

axios.defaults.baseURL = 'https://62cfc3671cc14f8c087ccb80.mockapi.io';

export const fetchContacts = async () => {
  const response = await axios.get(`/contacts`);
  return response.data;
};

export const addContact = async newContact => {
  const response = await axios.post(`/contacts`, newContact);
  return response.data;
};

export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
