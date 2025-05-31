import { Link } from "react-router";
    
const EventList = () => {
    
    const events =[
        [
        {
            "id": 0,
            "title": "Nana's 95th",
            "details": "At Welcome Park",
            "date": "",

        },
        {
            "id": 1,
            "title": "Family Game Night",
            "details": "Main Event",
            "date":"",
        },
        {
            "id": 2,
            "title": "Family Reunion",
            "details": "At Welcome Park",
            "date":"",
        },
        ]
    ]

    return (

        <div className="event-list">
            <h1>Event List</h1>
            <ul>
                {events.map((events)=>(
                    <li key={events.id}>
                        <Link to={`/events/${events.id}`}>{events.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default EventList;