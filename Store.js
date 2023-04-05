import { useState } from 'react';
import './Store.css';

function Store() {
  const [games, setGames] = useState([
    { id: 1, title: 'Sifu', price: 1738, image: 'https://cdn.akamai.steamstatic.com/steam/apps/2138710/header.jpg?t=1680602542' },
    { id: 2, title: 'Watch Dogs®: Legion', price:2999, image: 'https://cdn.akamai.steamstatic.com/steam/apps/2239550/header.jpg?t=1674755684' },
    { id: 3, title: 'Sleeping Dogs: Definitive Edition', price:729 , image: 'https://cdn.akamai.steamstatic.com/steam/apps/307690/header.jpg?t=1602800785' },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (game) => {
    setCart([...cart, game]);
  };

  return (
    <div className="store" id='store'>
      <h1>Game Store</h1>
      <div className="games">
        {games.map((game) => (
          <div key={game.id} className="game">
            <img src={game.image} alt={game.title} />
            <h2>{game.title}</h2>
            <p>Price: ₹{game.price}</p>
            <button onClick={() => addToCart(game)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 && <p>Your cart is empty</p>}
        {cart.map((game) => (
          <div key={game.id} className="cart-game">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <p>Price: ₹{game.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
