import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="game-card">
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
      <p>{game.platform}</p>
      <div className="rating">
        <span>{game.rating}</span>
        <span>({game.reviewCount} reviews)</span>
      </div>
    </div>
  );
};

export default GameCard;
