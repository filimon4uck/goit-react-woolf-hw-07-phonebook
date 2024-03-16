import axios from 'axios';
axios.defaults.baseURL = 'https://65f2ceeb105614e6549ef00a.mockapi.io/';

export const fetchAll = async () => {
  return (await axios.get('contacts')).data;
};
export const addContact = async contact => {
  const { data } = await axios.post('contacts/', contact);
  return data;
};
export const removeContact = async id => {
  await axios.delete(`contacts/${id}`);
  return id;
};
