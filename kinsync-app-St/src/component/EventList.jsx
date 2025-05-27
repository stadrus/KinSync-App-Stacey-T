import { useState } from "react";

function EventList () {
    // let event =[{id:0, title:"", date:Date, details:""}]
    //create a variable to add events to the event list. 
    let nextId = 1;

    //use state for the list of events. Use setEvent to identify the event being added to the list. 
    const [title, setTitle] = useState('');
    const [details, setDetails]= useState('');
    const [date, setDate] =useState(Date)

    const [event, setEvent] = useState([{id: 0, title:"", date: Date, details:""}])
    const [list, setList] = useState([]);
    
    const handleTitle = (e) =>{
        setTitle(e.target.value);
    }    
    const handleDetails =(e) =>{
        setDetails(e.target.value);
    }
    const handleDate =()=>{
        setDate(e.target.value);
    }
    //used spreated operator to give each event a unique id when added to the list reduce dev console errors. 
   function handleSubmit () {
        setList([
            ...list,
            {id:nextId++, name:setEvent}
        ]);
    }
//used filter() to delete items from the list once added
    function handleDelete () {
        setList(list.filter(l =>
            l.id !== list.id
        ));
    }

    return (
        <>
            <div className="event-list">
                <h1>Events</h1>
                <form id="event-list" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Event Title" value={event.title} onChange={handleTitle}/>
                    <input type="text" id="description" name="description" placeholder="Event Details"  value={event.details} onChange={handleDetails}></input><br>
                    </br>
                    <label>Enter a date:</label>
                    <input type="date" id="event-date" value="2025-01-31" onChange={handleDate} />
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {list.map(list => (
                        <li className="event" key={event.id}>{title}<br></br>{details}<>{date}</>
                        <button type="button" onClick={handleDelete}>Delete</button>
                        <button type="button">Remove</button> </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default EventList;