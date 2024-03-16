import { useDispatch } from 'react-redux';
import style from './Contact_Item.module.css';
import { deleteContactThunk } from 'store/contacts/thunks';
const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li className={style.contact_item}>
      <div className={style.contact_cont}>
        {name} : {number}
        <button
          onClick={() => {
            dispatch(deleteContactThunk(id));
          }}
        >
          Remove
        </button>
      </div>
    </li>
  );
};
export default ContactItem;
