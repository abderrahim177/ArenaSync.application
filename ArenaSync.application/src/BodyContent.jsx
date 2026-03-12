import { useState } from "react";
import { tournamentData } from "./tournamentDB";
export default function AffichDta() {
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [Form , setform] = useState(false);
  const [filter, setFilter] = useState("All");
  const [image, setimage ] = useState("")
  const filteredData = filter === "All" ? tournamentData : tournamentData.filter((el) => el.status === filter);
      return (                                              
      <div className='Father'>
        <div>
        <div className="buttons">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("On_Going")}>On Going</button>
        <button onClick={() => setFilter("Upcoming")}>Upcoming</button>
        <button onClick={() => setFilter("Pending")}>Pending</button>
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
          <h2 className="title">{element.title}</h2>
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
          <div className="AddingBtn">
          <button className="btn" onClick={() => setform(!Form)}>Subscribe</button>
          </div>
        </div>
        
    ))}
      </div>
      {
        Form ?  
        <div className="overlay">
        <div className="container">
          <input type="file" accept="image/*" onChange={(e)=>{
            let file=e.target.files[0]
            if(file){
              setimage(
                URL.createObjectURL(file)
              )
            }
          }}/>
          <img src={image} alt="not foud" width="50px" height="50px" />
        
          <input className="name" type="text" placeholder="name"  />
          <input className="Status" type="text" placeholder="Status"/>
          <button className="Save">Save</button>
          <button className="Back" onClick={() => setform(false)}>Back</button>
        </div>
      </div> 
      :
      <h1></h1>
        
        }
    </div>
   <div className="details">
  <div>
    <button>Participant</button>
  </div>
  <hr />
  {selectedTournament && (
    <div>
      <div className="title_Card">
      <h2 >{selectedTournament.title}</h2>
      </div>
      <div className="Participants">
        {selectedTournament.participants.map((p) => (
          <div className="part" key={p.id}>
            <img className="images" src={p.avatar} alt="" />
            <div>
              <span className="name">{p.name}</span>
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

