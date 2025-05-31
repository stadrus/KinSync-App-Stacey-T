import EventDetails from "../event-table/EventDetails";


const Content = () => {

    // const storedEvent = JSON.parse(localStorage.getItem('eventData'));
    // console.log(storedEvent); 
    
    return (
        <div className="content">
            <h2>Checkout these events!</h2>
            <EventDetails />
        </div>
    );
};
export default Content;