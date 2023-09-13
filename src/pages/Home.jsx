import React from 'react';
import axios from 'axios';
import { Categories, SortPopap, PizzaBlock } from '../components';
// import pizzas from '../assets/pizzas.json';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/index';
import { SearchContext } from '../App';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD
import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { sortList } from '../components/SortPopap';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { categoryId, sort, currentPage } = useSelector((state) => state.filter);
=======
import { setCategoryId } from '../redux/slices/filterSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
<<<<<<< HEAD
=======
  const [currentPage, setCurrentPage] = React.useState(1);
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchPizzas= ()=>{
    setIsLoading(true);

    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const sortBy = sort.sortProperty.replace('-', '');
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    // fetch(
    //   `https://64eb3e98e51e1e82c57722ed.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
    // )
    //   .then((res) => res.json())
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });
    axios
      .get(
        `https://64eb3e98e51e1e82c57722ed.mockapi.io/pizzas?page=${currentPage}&limit=8&${category}&sortBy=${sortBy}&order=${order}${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
<<<<<<< HEAD
  };

  //Если изменили пераметры и был первый рендер, то изменяем url
  React.useEffect(()=>{
    if(isMounted.current){
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
  
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  //Если был первый рендер, то проверяем url и сохраняем в redux
  React.useEffect(()=>{
    if(window.location.search){
      const params = qs.parse(window.location.search.substring(1));      

      const sort = sortList.find(obj => obj.sortProperty === params.sortProperty);
      
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  },[]);

  //Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0,0);

    if(!isSearch.current){
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

 
=======
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={onChangeCategory}
          onClickItem={(name) => console.log(name)}
          items={['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopap
          value={sort.sortProperty}
          // onChangeSort={(id) => setSortType(id)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>

<<<<<<< HEAD
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
=======
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
>>>>>>> fc08b5cc2c7445d79edcab2c5c946ff29c1b1c0f
    </div>
  );
};

export default Home;
