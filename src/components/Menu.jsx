import React from 'react';
import { dishes } from './data/Dishes';
import './styles/Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  const entrees = dishes.filter(dish => dish.category === 'entrees');
  const plats = dishes.filter(dish => dish.category === 'plats');
  const desserts = dishes.filter(dish => dish.category === 'desserts');

  const renderDishSection = (title, items) => (
    <>
      <div className="Menu">
        <h2>{title}</h2>
      </div>
      <div className="ListeDesPlats">
        {items.map((item) => (
          <Link to={`/dish/${item.id}`} key={item.id} className="Plat">
            <div className="Description">
              <div className="plat-nom">{item.name}</div>
              <div className="plat-description">{item.description}</div>
            </div>
            <img src={item.image} alt={item.name} />
          </Link>
        ))}
      </div>
    </>
  );

  return (
    <div className="menu-container">
      <div className="Menu">
        <h1><i className="fas fa-book-open"></i> Notre Menu</h1>
      </div>
      {renderDishSection('Nos Entrées', entrees)}
      {renderDishSection('Nos Plats', plats)}
      {renderDishSection('Nos Desserts', desserts)}
    </div>
  );
}

export default Menu;