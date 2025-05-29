import { useState } from "react";
import { nanoid } from "nanoid";

    const EventForm = () => {
    const [addFormData, setAddFormData] =useState({
    title:'',
    details:'',
    date:''
    })
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
            data: addFormData.date
        }
    }

    return (
        <>
            <div className="event-form" key={newEvent.id}>
                <h2>Add Event</h2>
                <form>
                    <input 
                        type="text"
                        title="title"
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
        </>
    );
};
export default EventForm;