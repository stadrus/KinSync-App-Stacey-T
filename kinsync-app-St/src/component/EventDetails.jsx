import data from "../data/event.json";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import ReadRow from "./ReadRow";
import EditRow from "./EditRow";


//Using a table I will display the event details.//
const EventDetails = () =>{
    const [events, setEvents] = useState(data);
    const [addFormData, setAddFormData] =useState({
    title:'',
    details:'',
    date:''
    });

    const [editEvent, setEditEvent] = useState(null);

    const handleAddFormChange = (e) =>{
    e.preventDefault();
        
    const fieldName = e.target.getAttributes('title');
    const fieldValue = e.target.value;
        
    const newFormData = { ...addFormData};
    newFormData[fieldName] = fieldValue;
    
    setAddFormData(newFormData);
    };
    
    const handleAddFormSubmit = (e) =>{
    e.preventDefault();

    const newEvent ={
        id: nanoid(),
        title: addFormData.title,
        details: addFormData.details,
        data: addFormData.date,
        };
        const newEvents = [...events, newEvent];
            setEvents(newEvents);
    };
    const handleEditClick = (e, event) =>{
        e.preventDefault();
        setEditEvent(event.id);
    }

    return (
        <div className="event-container">
            <form>
                <table>
                    <thead>
                        <tr>
                            <th>Event Title</th>
                            <th>Event Details</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                    {events.map((event) =>(
                        <Fragment>
                        {editEvent === event.id ? ( <EditRow />) : (<ReadRow event={event} handleEditClick = {handleEditClick}/>)}
                        </Fragment> 
                    ))}
                    </tbody>
                </table>
            </form>
            <h2>Add Event</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input 
                    type="text"
                    name="title"
                    required="required"
                    placeholder="Enter a event title"
                    onChange = {handleAddFormChange}/>
                <input 
                    type="text"
                    name="details"
                    required="required"
                    placeholder="Enter event details"
                    onChange = {handleAddFormChange}/>
                <input 
                    type="date"
                    name="date"
                    required="required"
                    placeholder="Enter a date"
                    onChange = {handleAddFormChange}/>
                <button type="submit">Add</button>
            </form>
        </div>
    );

};
export default EventDetails;