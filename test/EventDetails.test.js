import { render, screen, fireEvent } from "react-router";
import EventDetails from "../../src/component/event-table/EventDetails";
import test from "node:test";

describe('EventDetails Component', () =>{
    let testEvent ={title:"Test Title", detail: "Test Details", date:"2025-06-01"}
    //Positive Case//
    test('Should add an event to the table', () =>{
        render(<EventDetails />);
        fireEvent.change(screen.getByPlaceholderText('enter a event title/i'),{
            target:{value: "Test Title"}
        })
        expect(testEvent.title).toBe('Test Event');
    });

    // //Negative Case//
    // test('Should not add event with empty fields', () =>{
    //     renderMatches(<EventDetails />);
    //     expect(screen.getByText('Test Event')).toBe();
    // });
})