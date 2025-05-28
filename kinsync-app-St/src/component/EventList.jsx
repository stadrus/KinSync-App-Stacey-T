import { useState, useEffect } from "react";


function EventList () {
    //create a variable to add events to the event list. 
    // let nextId =1;
    
    //use state for the list of events. Use setEvent to identify the event being added to the list.
    const [id, setId] = useState('')
    const [title, setTitle] = useState('');
    const [details, setDetails]= useState('');
    const [date, setDate] =useState('');
    
    // const [event, setEvent] =useState([{id, title, details, date}]);
    // const [list, setList] = useState([]);
    const [event, setEvent] = useState(() =>{
    const storedEvent = JSON.parse(localStorage.getItem('eventData'));
    return storedEvent ? parseInt(storedEvent) : event;
    });
    console.log(storedEvent); //removed from Content.jsx to here. 
    //create a state to be used for local storage. Removed id, title, details. and date. these have already been declaried as states. 
    const [eventData, setEventData] = useState([])

    useEffect (() => {
        localStorage.setItem('eventData', JSON.stringify(eventData));
        console.log(eventData);
    },[eventData]);
    
    const handleTitle = (e) =>{
        setTitle(e.target.value);
    }    
    const handleDetails =(e) =>{
        setDetails(e.target.value);
    }
    const handleDate =(e)=>{
        setDate(e.target.value);
    }
    //used spreated operator to give each event a unique id when added to the list reduce dev console errors. Needed tp crate a new event within the handleSubmit to manage this better. 
   const handleSubmit = (e) => {
        e.preventDefault();
        for (let i =1; i <10; i++){
            const newEvent = {title, details, date}
            setEventData([...eventData, newEvent]);

        }
    };
//used filter()to delete items from the list once added. 
    const handleDelete = () => {
        const deletedEvent = eventData.filter(newEvent => newEvent.id !== id);
        setEventData(deletedEvent);
        // console.log('Deleted event:', newEvent);
    }

    return (
        <>
            <div className="event-list">
                <h1>Events</h1>
                <form id="event-list" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Event Title" value={title} onChange={handleTitle}/>
                    <input type="text" id="description" placeholder="Event Details"  value={details} onChange={handleDetails}></input><br>
                    </br>
                    <label>Enter a date:</label>
                    <input type="date" id="event-date" onChange={handleDate}/>
                    <button type="submit">Add</button>
                    <ul>
                        {eventData.map(newEvent => (
                            <li className="event" key={newEvent.id}>{newEvent.title}{newEvent.details}{newEvent.date}<></>
                            <button type="button" onClick={() => handleDelete(newEvent.id)}>Delete</button>
                            <button type="button">Edit</button> </li>
                        ))}
                    </ul>
                </form>
            </div>
        </>
    )
}
export default EventList;