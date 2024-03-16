import { useState } from 'react';
import style from './Contact_Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'store/selectors/selectors';
import { addContactThunk } from 'store/contacts/thunks';
const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [dataForm, setDataForm] = useState({ name: '', number: '' });

  const onChangeHandler = ({ target: { name, value } }) => {
    setDataForm(prevData => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const nameInLowerCase = dataForm.name.toLowerCase().trim();
    const isExist = contacts.some(
      ({ name }) => name.toLowerCase().trim() === nameInLowerCase
    );
    if (isExist) {
      alert(`${dataForm.name} is already in contacts`);
      setDataForm({ name: '', number: '' });
      return;
    }
    dispatch(addContactThunk(dataForm));
    setDataForm({ name: '', number: '' });
  };

  return (
    <>
      <form className={style.contact_form} onSubmit={handleSubmit}>
        <div className={style.form_field}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={onChangeHandler}
            value={dataForm.name}
          />
        </div>
        <div className={style.form_field}>
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={onChangeHandler}
            value={dataForm.number}
          />
        </div>
        <button className={style.form_button} type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
