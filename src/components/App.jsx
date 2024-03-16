import ContactForm from './Contact_Form/Conatact_Form';
import ContactsList from './Contacts_List/Contacts_List';
import Filter from './Filter/Filter';
import style from './App.module.css';
const App = () => {
  return (
    <div className={style.container}>
      <h2>Phonebook</h2>
      <ContactForm />
      <h3>Contacts</h3>

      <div>
        <p>Find contacts by name</p>
        <Filter />
      </div>

      <ContactsList />
    </div>
  );
};
export default App;
