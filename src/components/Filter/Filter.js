import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'Redux/filterSlice';
import { selectFilter } from 'Redux/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Find contacts by name</div>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.target.value))}
        placeholder="search"
      />
    </div>
  );
};

export default Filter;
