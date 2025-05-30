
//using props to pass in the event information will help edit the row data//
const ReadRow = ({ event, handleEditClick }) =>{
    return(
        <tr>
            <td>{event.title}</td>
            <td>{event.details}</td>
            <td>{event.date}</td>
            <td>
                <button type="button" onClick={(e,event )}></button>
            </td>
        </tr>
    );
};

export default ReadRow;