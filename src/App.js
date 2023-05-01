import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const App = () => {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems);
  };

  return (
    <>
      <section className='menu section'>
        <div className='title'>
          <h2>Menümüz</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </>
  )
}

export default App;