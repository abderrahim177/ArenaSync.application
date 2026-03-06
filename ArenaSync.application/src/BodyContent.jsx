import { useState } from "react";
import { tournamentData } from "./tournamentDB";

export default function AffichDta() {

  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? tournamentData
      : tournamentData.filter((el) => el.status === filter);
  return (
      <div className='Father'>
        <div className="buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("On_Going")}>On Going</button>
        <button onClick={() => setFilter("Upcoming")}>Upcoming</button>
      </div>
      <hr />
      <div className="content">
        
      {filteredData.map((element) => (
        <div className='caontainer icons_container' key={element.id}>
          <div className='title'>
          <div className="source">
            <div>
              <img className="image" src={element.img} alt="" />
            </div>
            <div>
          <h2>{element.title}</h2>
          <button className={`status ${element.status}`}>
            {element.status}
          </button>
          </div>
          </div>
          <p>{element.description}</p>
          <hr/>
          <p><i class="fa-solid fa-users"></i> {element.participantsCount} <span>{element.type}</span></p>
          </div>
          <p><i class="fa-solid fa-trophy "></i> {element.location}</p>
          <p><i class="fa-solid fa-calendar"></i>  {element.date}</p>
          <p><i class="fa-solid fa-location-dot"></i> {element.format}</p>
        </div>
        
      ))}
    </div>
    <div>
      
       
          
       
    </div>
    </div>
  );

}