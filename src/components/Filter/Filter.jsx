import { useDispatch, useSelector } from 'react-redux';
import style from './Filter.module.css';
import { updateFilter } from 'store/filter/filterSlice';
import { selectFilter } from 'store/selectors/selectors';
const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  return (
    <div>
      <input
        className={style.filter_field}
        type="text"
        name="filter"
        value={filter}
        onChange={ev => {
          dispatch(updateFilter(ev.target.value));
        }}
        placeholder="Search..."
      />
    </div>
  );
};
export default Filter;
