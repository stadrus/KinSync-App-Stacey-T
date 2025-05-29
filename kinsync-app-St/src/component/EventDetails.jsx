import { useParams } from "react-router"
import { events } from "../component/EventList"


const EventDetails = () =>{
    const { eventsId } = useParams();

    const events = 
        [
        {
            "id": 0,
            "title": "Nana's 95th",
            "details": "At Welcome Park"

        },
        {
            "id": 1,
            "title": "Family Game Night",
            "details": "Main Event"

        },
        {
            "id": 2,
            "title": "Family Reunion",
            "details": "At Welcome Park",
        },
        ];
    
        const event = event.find((event) => event.id === parseInt(eventsId));

        if(!event){
            return <p> You do not have any events yet...</p>;
        }
        return (
            <div>
                
            </div>
        )

}