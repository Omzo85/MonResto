import React from 'react';
import RestaurantDescription from '../RestaurantDescription';
import Menu from '../Menu';

function Home() {
  return (
    <main className="main-content">
      <RestaurantDescription />
      <Menu />
    </main>
  );
}

export default Home;