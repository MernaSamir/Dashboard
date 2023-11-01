import React from "react";
import Ticket from "../../assets/ticket.svg";
import { map } from "lodash";
import './style.css'
export default function Tickets() {
  const tickets = [
    {
      status: "New",
      time: "3 hours ago",
      Header: "Plugged in but not charging",
      subHeader:
        "This station has a screen with an unreadable display lorem ipsum..read more",
    },
    {
      status: "Solving",
      time: "2 days ago",
      Header: "Plugged in but not charging",
      subHeader:
        "This station has a screen with an unreadable display lorem ipsum..read more",
    },
    {
      status: "Solved",
      time: "23 Aug 2023",
      Header: "Plugged in but not charging",
      subHeader:
        "This station has a screen with an unreadable display lorem ipsum..read more",
    },
    {
      status: "Solved",
      time: "23 Aug 2023",
      Header: "Plugged in but not charging",
      subHeader:
        "This station has a screen with an unreadable display lorem ipsum..read more",
    },
  ];
  function getStatusStyle(status) {
    switch (status) {
       
        case 'Solved':
            return { backgroundColor: "rgba(10, 173, 143, 0.10)", color: '#11A744' };
        case 'Solving':
            return { backgroundColor: 'rgba(17, 161, 253, 0.10)', color: "#11A1FD" };
        default:
            return { backgroundColor: '#FF9A32', color: '#ffffff' };
    }
}

  return (
    <div className="rightCards">
      <div className="cardHeader ticketHeader">
        <img src={Ticket} alt="Tickets" />
        <p>Tickets</p>
      </div>
      {map(tickets, (t, i) => {
        const style = getStatusStyle(t.status);

        return <div className="ticketCont">
          <div>
            <div style={{backgroundColor:style.backgroundColor, color:style.color}}>{t.status}</div>
            <p>{t.time}</p>
          </div>
          <p className="headerT">{t.Header}</p>
          <p className="subHeaderT">{t.subHeader}</p>
        </div>
      }
      )}
    </div>
  );
}
