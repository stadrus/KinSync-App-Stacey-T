import EventList from "./EventList";

const Content = () => {
    // const storedEvent = JSON.parse(localStorage.getItem('eventList'));
    // console.log(storedEvent); 

    return (
        <div className="content">
            <h2>Checkout these events!</h2>
            <EventList />
        </div>
    );
};
export default Content;