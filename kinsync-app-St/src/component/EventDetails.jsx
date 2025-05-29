import data from "../data/event.json";
import { useState } from "react";
import EventForm from "./EventForm";



//Using a table I will display the event details.//
const EventDetails = () =>{
    const [events, setEvents] = useState(data);
    // const { eventsId } = useParams();

    // const events = 
    //     [
    //     {
    //         "id": 0,
    //         "title": "Nana's 95th",
    //         "details": "At Welcome Park",
    //         "date": "",

    //     },
    //     {
    //         "id": 1,
    //         "title": "Family Game Night",
    //         "details": "Main Event",
    //         "date":"",
    //     },
    //     {
    //         "id": 2,
    //         "title": "Family Reunion",
    //         "details": "At Welcome Park",
    //         "date":"",
    //     },
    //     ]
    
    
    //     const event = event.find((event) => event.id === parseInt(eventsId));

    //     if(!event){
    //         return <p> You do not have any events yet...</p>;
    //     }
    return (
        <div className="event-container">
            <table>
                <thead>
                    <tr>
                        <th>Event Title</th>
                        <th>Event Details</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                {events.map((event) =>(  
                    <tr>
                    <td>{event.title}</td>
                    <td>{event.details}</td>
                    <td>{event.date}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

};
export default EventDetails;