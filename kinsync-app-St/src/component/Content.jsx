import EventList from "./EventList";
import images from "../images/userpic.svg"

const Content = () => {
    // const storedEvent = JSON.parse(localStorage.getItem('eventList'));
    // console.log(storedEvent); 

    return (
        <div className="content">
            <header>
                <img className="userpic" src={images} alt="ritta"></img>
            </header>
            <h2>Checkout these events!</h2>
            <EventList />
        </div>
    );
};
export default Content;