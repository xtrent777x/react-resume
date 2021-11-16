import React from "react";
import DndManager from "../../assets/project/DnD-Manager.png";
import FoodFestival from "../../assets/project/Food-Festival.png";
import GameGo from "../../assets/project/Game-Go.png";
import PhotPort from "../../assets/project/Photo-Port.png";
import RunBuddy from "../../assets/project/Run-buddy.png";
import WeatherStat from "../../assets/project/Weather-Stat.png";
import SalonMe from "../../assets/project/salonMe.png";


const Projects = () => (
  <div>
    <h1>My Completed Projects</h1>
    <p>
    <a href="https://github.com/dylanshoemaker/SalonMe">github repo</a> 
    <img src={SalonMe} className="my-2" style={{ width: "40%" }} alt="cover" />
    <a href="https://salonme.herokuapp.com/">Live Page</a> 
    </p>
    <p>
    <a href="https://github.com/dylanshoemaker/dnd-manager">github repo</a> 
    <img src={DndManager} className="my-2" style={{ width: "40%" }} alt="cover" />
    <a href="https://dnd-character-sheet-manager.herokuapp.com/">Live Page</a> 
    </p>
    <p>
    <a href="https://github.com/xtrent777x/food-festival">github repo</a> 
    <img src={FoodFestival} className="my-2" style={{ width: "40%" }} alt="cover" />
    <a href="https://xtrent777x.github.io/food-festival/">Live Page</a> 
    </p>
    <p>
    <a href="https://github.com/ewalker518/game-go">github repo</a> 
    <img src={GameGo} className="my-2" style={{ width: "40%" }} alt="cover" />
    <a href="https://ewalker518.github.io/game-go">Live Page</a> 
    </p>
    <p>
    <a href="https://github.com/xtrent777x/photo-port">github repo</a>  
    <img src={PhotPort} className="my-2" style={{ width: "40%" }} alt="cover" />
    <a href="https://xtrent777x.github.io/photo-port/">Live Page</a> 
    </p>
    <p>
    <a href="https://github.com/xtrent777x/run-buddy">github repo</a> 
    <img src={RunBuddy} className="my-2" style={{ width: "40%" }} alt="cover" />
    <a href="https://lernantino.github.io/run-buddy/">Live Page</a> 
    </p>
    <p>
    <a href="https://github.com/xtrent777x/weather-stat">github repo</a> 
    <img src={WeatherStat} className="my-2" style={{ width: "40%" }} alt="cover" />
    <a href="https://xtrent777x.github.io/weather-stat/">Live Page</a> 
    </p>
  </div>
);

export default Projects;
