import { useState } from "react";

function EventList () {

    //create a variable to add events to the event list. 
    let nextId =0;

    //use state for the list of events. Use setEvent to identify the event being added to the list. 
    const [event, setEvent] = useState('');
    const [list, setList] = useState([]);
    
    const handleEvent = (e) =>{
        setEvent(e.target.value)
    }

    return (
        <>
            <div className="event-list">
                <h1>Events</h1>
                <form id="event-list">
                <input value={event} onChange={handleEvent}/>
                <button onClick={()=>{setList([...list, {id: nextId++, event: event }])}}>Add</button>
                </form>
                <ol>
                    {list.map(list => (<li key={list.id}>{list.event}</li>))}
                </ol>
            </div>
        </>
    )
}
export default EventList;