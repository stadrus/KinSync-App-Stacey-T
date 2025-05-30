import data from "../../data/event.json";
import { Fragment, useState } from "react";
import { nanoid } from "nanoid";
import ReadRow from "./ReadRow";
import EditRow from "./EditRow";


//Using a table I will display the event details.//
const EventDetails = () =>{
    const [events, setEvents] = useState(data);
    const [addFormData, setAddFormData] =useState({
    title:"",
    details:"",
    date:"",
    });

    const [editFormData, setEditFormData] = useState({
    title:"",
    details:"",
    date:"",
    });

    const [editEventId, setEditEventId] = useState(null);

    const handleAddFormChange = (e) =>{
    e.preventDefault();
        
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
        
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    
    setAddFormData(newFormData);
    };

    const handleEditFormChange = (e) =>{
        e.preventDefault();
        const fieldName = e.target.getAttribute("name");
        const fieldValue = e.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;
        
        setEditFormData(newFormData); 
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

    const handleEditFormSubmit = (e) =>{
        e.preventDefault();

    const editedEvent ={
        id: editEventId,
        title: editFormData.title,
        details: editFormData.details,
        data: editFormData.date,
        };

        const newEvents = [...events];
        const index = events.findIndex((event)=>event.id === editEventId);

        newEvents[index] = editedEvent;
        setEvents(newEvents);
        setEditEventId(null);
    };
    

    const handleEditClick = (e, event) =>{
        e.preventDefault();
        setEditEventId(event.id);
        const formValues = {
        title: event.title,
        details: event.details,
        date: event.date,
        }
        setEditFormData(formValues);
    };
    const handleCancelClick = () =>{
        setEditEventId(null);
    };
    const handleDeleteClick =(eventsId) =>{
        const newEvents = [...events];
        const index = events.findIndex((events)=> events.id === eventsId);
        newEvents.splice(index, 1);
        setEvents(newEvents);
    };

    return (
        <div className="event-container">
            <form onSubmit={handleEditFormSubmit}>
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
                        {editEventId === event.id ? ( <EditRow editFormData ={editFormData} handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        />) : (<ReadRow event={event} handleEditClick = {handleEditClick} handleDeleteClick ={handleDeleteClick}/>)}
                        </Fragment> 
                    ))}
                    </tbody>
                </table>
            </form>
            <h2>Add Event</h2>
            <form className= "add-button" onSubmit={handleAddFormSubmit}>
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
                <button type='submit'>Add</button>
            </form>
        </div>
    );

};
export default EventDetails;