import React from 'react';
import { Categories, SortPopap, PizzaBlock } from '../components';

function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={(name) => console.log(name)}
          items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
        />
        <SortPopap items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
      
          <PizzaBlock title="Вегетарианская" price={500}/>
          
      </div>
    </div>
  );
}

export default Home;
