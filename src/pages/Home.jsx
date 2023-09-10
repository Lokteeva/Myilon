import React from 'react';
import { Categories, SortPopap, PizzaBlock } from '../components';
// import pizzas from '../assets/pizzas.json';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/index';
import { SearchContext } from '../App';

const Home = ()=> {
  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortType, setSortType] = React.useState({
    name: 'популярности',
    sortProperty: 'rating',
  });

  console.log(categoryId, sortType);

  React.useEffect(() => {
    setIsLoading(true);

    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://64eb3e98e51e1e82c57722ed.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    )
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(id) => setCategoryId(id)}
          onClickItem={(name) => console.log(name)}
          items={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopap
          value={sortType}
          onChangeSort={(id) => setSortType(id)}
          items={[
            { name: 'популярности (Desc)', sortProperty: 'rating' },
            { name: 'популярности (Asc)', sortProperty: '-rating' },
            { name: 'цене (Desc)', sortProperty: 'price' },
            { name: 'цене (Asc)', sortProperty: '-price' },
            { name: 'алфавиту (Desc)', sortProperty: 'name' },
            { name: 'алфавиту (Asc)', sortProperty: '-name' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>

      <Pagination onChangePage={(number)=>setCurrentPage(number)}/>
    </div>
  );
}

export default Home;
