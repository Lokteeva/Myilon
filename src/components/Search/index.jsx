import React from 'react';
import styles from './search.module.css';
import { SearchContext } from '../../App';

const Search = ()=> {
  const {searchValue, setSearchValue} = React.useContext(SearchContext)
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="50px"
        height="50px">
        <circle
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeMiterlimit="10"
          cx="21"
          cy="20"
          r="16"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeWidth="4"
          strokeMiterlimit="10"
          x1="32.229"
          y1="32.229"
          x2="45.5"
          y2="45.5"
        />
      </svg>

      <input value={searchValue} onChange={(event)=> setSearchValue(event.target.value)} className={styles.input} placeholder="Поиск пиццы ..." />

      {searchValue &&(
        <svg onClick={()=> setSearchValue('')} className={styles.closeIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="7" y1="7" x2="43" y2="43"/><line fill="none" stroke="#000000" stroke-width="2" stroke-miterlimit="10" x1="43" y1="7" x2="7" y2="43"/></svg>
      )}
    </div>
  );
}

export default Search;
