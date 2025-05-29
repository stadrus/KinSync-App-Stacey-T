const EventForm = () => {

    const [id, setId] = useState('');
        const [title, setTitle] = useState('');
        const [details, setDetails]= useState('');
        const [date, setDate] =useState('');
        
        //create a state to be used for local storage. Removed id, title, details. and date. these have already been declaried as states. 
        const newEvent= {title, details, date};
        const [eventData, setEventData] = useState([]);
    
    
        const storedEvent = JSON.parse(localStorage.getItem('eventData'));
        console.log(storedEvent); 
    
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
                // const newEvent = {title, details, date}
                setEventData([...eventData, newEvent]);
            }
        };
    //used filter()to delete items from the list once added. 
        const handleDelete = () => {
            const deletedEvent = eventData.filter(newEvent => newEvent.id !== id);
            setEventData(deletedEvent);
            console.log('Deleted event:', newEvent);
        }
    
        return (
            <>
                <div className="event-list" key={newEvent.id}>
                    <h1>Events</h1>
                    <form id="event-list" onSubmit={handleSubmit}>
                        <input type="text" id="title" placeholder="Event Title" value={title} onChange={handleTitle}/>
                        <input type="text" id="description" placeholder="Event Details"  value={details} onChange={handleDetails}></input><br>
                        </br>
                        <label>Enter a date:
                        <input type="date" id="event-date" onChange={handleDate}/>
                        </label>
                        <button type="submit">Add</button>
                            {eventData.map(eventData => (
                            <li className="event">{eventData.title}{eventData.details}{eventData.date}
                            <button type="button" onClick={() => handleDelete(newEvent)}>Delete</button>
                            <button type="button">Edit</button></li>
                            ))}
                        
                    </form>
                </div>
            </>
        )
}
export default EventForm;