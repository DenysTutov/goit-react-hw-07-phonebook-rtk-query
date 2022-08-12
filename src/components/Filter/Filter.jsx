import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import style from './Filter.module.scss';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const handleChangeFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        className={style.inputName}
        title="Enter search name"
        onChange={handleChangeFilter}
        value={filter}
      />
    </label>
  );
};

export default Filter;
