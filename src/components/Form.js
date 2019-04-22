import React from 'react';
import './Form.css';
const Form = (props) => {
    return (
        <>
            <form id="form" onSubmit={props.submit}>
                <input type="text" value={props.value} onChange={props.change} placeholder="ENTER CITY" />
            </form>
            <button form="form" disabled={props.isSearchButtonDisabled}>Search</button>
            <button onClick={props.location} className="locationBtn" disabled={props.isButtonDisabled}>Get Location</button>
        </>
    );
}

export default Form;