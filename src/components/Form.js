import React from 'react';
import './Form.css';
const Form = (props) => {
    return (
        <>
            <form onSubmit={props.submit}>
                <input type="text" value={props.value} onChange={props.change} placeholder="ENTER CITY" />
                <br />
                <button>Search</button>
            </form>
            <button onClick={props.location} className="locationBtn">Get Location</button>
        </>
    );
}

export default Form;