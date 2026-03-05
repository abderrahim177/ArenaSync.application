import { tournamentData } from './tournamentDB';
export default function AffichDta() {
  return (
    <div className="content">
      {tournamentData.map((element) => (
        <div className='caontainer icons_container' key={element.id}>
          <div className='title'>
          <div>
          <h2>{element.title}</h2>
          <button>{element.status}</button>
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
  );
}