import { useState } from "react";
import { tournamentData } from "./tournamentDB";
export default function AffichDta({search}) {
  const [selectedTournament, setSelectedTournament] = useState(null);

  const [filter, setFilter] = useState("All");
  const filteredData =
      filter === "All"
      ? tournamentData
      : tournamentData.filter((el) => el.status === filter);
      return (
      <div className='Father'>
        <div>
        <div className="buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("On_Going")}>On Going</button>
        <button onClick={() => setFilter("Upcoming")}>Upcoming</button>
      </div>
      <hr className="hr"/>
      <div className="content">
      {filteredData.map((element) => (
        <div className='caontainer icons_container' onClick={() => setSelectedTournament(element)} key={element.id}>
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
          <p><i className="fa-solid fa-users"></i> {element.participantsCount} <span>{element.type}</span></p>
          </div>
          <p><i className="fa-solid fa-trophy "></i> {element.location}</p>
          <p><i className="fa-solid fa-calendar"></i>  {element.date}</p>
          <p><i className="fa-solid fa-location-dot"></i> {element.format}</p>
        </div>
    ))}
      </div>
    </div>
   <div className="details">
  <div>
    <button>Participant</button>
  </div>
  <hr />

  {selectedTournament && (
    <div>
      <h2>{selectedTournament.title}</h2>

      <div className="Participants">
        {selectedTournament.participants.map((p) => (
          <div className="part" key={p.id}>
            <img className="images" src={p.avatar} alt="" />
            <div>
              <span>{p.name}</span>
              <p className={`status ${p.status}`}>{p.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>
  </div>
  );
}