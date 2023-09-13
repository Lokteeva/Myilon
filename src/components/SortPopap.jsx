import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
<<<<<<< HEAD
import { setSort } from '../redux/slices/filterSlice';

export const sortList = [
  { name: 'популярности (Desc)', sortProperty: 'rating' },
  { name: 'популярности (Asc)', sortProperty: '-rating' },
  { name: 'цене (Desc)', sortProperty: 'price' },
  { name: 'цене (Asc)', sortProperty: '-price' },
  { name: 'алфавиту (Desc)', sortProperty: 'name' },
  { name: 'алфавиту (Asc)', sortProperty: '-name' },
];

function SortPopap() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);

  const [visiblePopup, setVisiblePopup] = React.useState(false);
=======
import {setSort} from '../redux/slices/filterSlice'

function SortPopap() {
  const dispatch = useDispatch();
  const sort = useSelector(state => state.filter.sort);

  const [visiblePopup, setVisiblePopup] = React.useState(false);
  
  const list = [
    { name: 'популярности (Desc)', sortProperty: 'rating' },
    { name: 'популярности (Asc)', sortProperty: '-rating' },
    { name: 'цене (Desc)', sortProperty: 'price' },
    { name: 'цене (Asc)', sortProperty: '-price' },
    { name: 'алфавиту (Desc)', sortProperty: 'name' },
    { name: 'алфавиту (Asc)', sortProperty: '-name' },
  ];
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f

  const sortRef = React.useRef();

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    if (e.target.offsetParent !== sortRef.current) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  const onSelectItem = (obj) => {
    dispatch(setSort(obj));
    setVisiblePopup(false);
  };

  return (
    <div ref={sortRef} className="sort">
<<<<<<< HEAD
      <div className="sort__label">
        <svg
          className={visiblePopup ? 'rotated' : ''}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{sort.name}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {sortList &&
              sortList.map((obj, index) => (
                <li
                  className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
                  onClick={() => onSelectItem(obj)}
                  key={`${obj}_${index}`}>
                  {obj.name}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
=======
    <div className="sort__label">
      <svg
        className={visiblePopup ? 'rotated' : ''}
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
          fill="#2C2C2C"
        />
      </svg>
      <b>Сортировка по:</b>
      <span onClick={toggleVisiblePopup}>{sort.name}</span>
    </div>
    {visiblePopup && <div className="sort__popup">
      <ul>
      {list &&
        list.map((obj, index) => (
          <li
            className={sort.sortProperty === obj.sortProperty ? 'active' : ''}
            onClick={() => onSelectItem(obj)}
            key={`${obj}_${index}`}>
            {obj.name}
          </li>
        ))}
      </ul>
    </div>}
  </div>
  )
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f
}

export default SortPopap;
