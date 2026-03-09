// src/data/tournamentDB.js
import Basketball from "../src/assets/icons/basketball.png";
import Badminton from '../src/assets/icons/sport.png';
import boxing from '../src/assets/icons/boxing-glove.png';
export const tournamentData = [
  {
    id: "t1",
    title: "Shuttle Masters League",
    sport: "Badminton",
    img :Badminton ,
    status: "On_Going", // UtilisÃ© pour la couleur du StatusBadge (ex: success/green)
    date: "October 12, 2025",
    location: "Badminton Hall 1",
    description: "Top players battle it out with skillful rallies and powerful smashes.",
    participantsCount: "24/32",
    format: "Single Elimination",
    type: "Public",
    participants: [
      { id: "u1", name: "Ethan Miller", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u1" },
      { id: "u2", name: "Noah Smith", status: "On_Going", avatar: "https://i.pravatar.cc/150?u=u2" },
      { id: "u3", name: "James Anderson", status: "On_Going", avatar: "https://i.pravatar.cc/150?u=u3" },
      { id: "u4", name: "David Hall", status: "On_Going", avatar: "https://i.pravatar.cc/150?u=u4" }
    ]
  },
  {
    id: "t2",
    title: "Hoops Championship",
    sport: "Basketball",
    img :Basketball ,
    status: "Upcoming", // UtilisÃ© pour la couleur du StatusBadge (ex: primary/blue)
    date: "November 2, 2025",
    location: "Indoor Arena - Court A",
    description: "Intense games filled with teamwork, speed, and spectacular shots.",
    participantsCount: "8/12 Teams",
    format: "Single Elimination",
    type: "Community",
    participants: []
  },
  {
    id: "t3",
    title: "Ring Masters League",
    sport: "Boxing",
    img :boxing,
    status: "Pending",
    date: "December 5, 2025",
    location: "Combat Zone Gym",
    description: "A dynamic boxing competition bringing together passionate fighters.",
    participantsCount: "10/16",
    format: "Round Robin",
    type: "Pro",
    participants: [
      { id: "u5", name: "Aiden Davis", status: "Pending", avatar: "https://i.pravatar.cc/150?u=u5" },
      { id: "u6", name: "Daniel Thomas", status: "On_Going", avatar: "https://i.pravatar.cc/150?u=u6" }
    ]
  }
];