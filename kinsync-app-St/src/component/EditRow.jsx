const EditRow = () => {
    return (
        <tr>
            <td>
                <input 
                type="text"
                name="title"
                required="required"
                placeholder="Enter a event title"/>
            </td>
            <td>
                <input 
                type="text"
                name="details"
                required="required"
                placeholder="Enter a event details"/>
            </td>
            <td>
                <input 
                type="text"
                name="date"
                required="required"
                placeholder="Enter a event date"/>
            </td>
            
        </tr>
    );
};
export default EditRow;