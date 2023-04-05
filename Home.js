import React from 'react';
import './Home.css';

const HomePage = () => {
  return (
    <div id='home'>
      <header>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#store">Store</a></li>
            <li><a href="#library">Library</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>
      
      <main>
        <section className="hero">
          <h1>Welcome to Gaming World</h1>
          <p>“I don’t need to get a life, I am a gamer, I have lots of lives.”</p>
          <a href="#" className="button">Explore Games</a>
        </section>
        
        <section className="featured-games">
          <h2>Featured Games</h2>
          <ul>
            <li>
              <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1701380/capsule_616x353.jpg?t=1643769661" alt="Game 1" />
              <h3>Cricket 22</h3>
              <p>Cricket 22 is a 2021 cricket video game developed by Big Ant Studios and published by Nacon.[1] It is the official video game of the 2021–22 Ashes series of cricket matches, and the sequel to the 2019 game Cricket 19. It released on the 2 December 2021 as a curtain-raiser prior to the start of the 2021–22 Ashes series which were held in Australia in December 2021.</p>
            </li>
            <li>
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/1659040/header.jpg?t=1679476219" alt="Game 2" />
              <h3>Hitman world of assassination</h3>
              <p>Hitman is an action-adventure stealth video game in which players control a genetically enhanced assassin called Agent 47 from a third-person perspective as he carries out assassinations of various targets across the globe. As in other games in the Hitman series, players have a large amount of freedom in their approach to their assassinations.</p>
            </li>
            <li>
              <img src="https://cdn.akamai.steamstatic.com/steam/apps/1942660/header.jpg?t=1680028256" alt="Game 3" />
              <h3>WWE 2K23</h3>
              <p>WWE 2K23 is Even Stronger with Expanded features, gorgeous graphics, and the ultimate WWE experience. 
              interactive sports documentary focusing on the 20-year career of John Cena and WarGames is finally here!its debut in WWE 2K23 and delivers heart-pounding 3v3 and 4v4 multiplayer mayhem,This fan-favorite action-packed WarGames makes its debut!</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
