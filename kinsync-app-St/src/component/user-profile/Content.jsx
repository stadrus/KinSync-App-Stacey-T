import images from "../images/userpic.svg"
import EventDetails from "../event-table/EventDetails";


const Content = () => {

    // const storedEvent = JSON.parse(localStorage.getItem('eventData'));
    // console.log(storedEvent); 
    
    return (
        <div className="content">
            <header>
                <img className="userpic" src={images} alt="ritta"></img>
            </header>
            <h2>Checkout these events!</h2>
            <EventDetails />
        </div>
    );
};
export default Content;