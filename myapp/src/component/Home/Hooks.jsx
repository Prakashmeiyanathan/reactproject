import React, { useReducer, useState } from 'react';

// Define the initial state
const initialState = {
    status: '',
};

// Define the reducer function
const reducer = (state, action) => {
    debugger
    switch (action.type) {
        case 'PASS':
            return { status: 'Pass' };
        case 'FAIL':
            return { status: 'Fail' };
        default:
            return state;
    }
};

// Component using useReducer
const Counter = () => {debugger
    const [state, dispatch] = useReducer(reducer, initialState);
    const [value, setValue] = useState('');

    const checkStatus = () => {debugger
        const mark = parseInt(value, 10); // Convert input value to an integer

        if (!isNaN(mark)) {
            // Check if the input is a valid number
            if (mark >= 35) {
                dispatch({ type: 'PASS' });
            } else {
                dispatch({ type: 'FAIL' });
            }
        }
        else {
            // Handle the case where the input is not a valid number
            alert('Please enter a valid number');
        }
    };

    return (
        <div>
            <p>Status: {state.status}</p>
            <input
                value={value}
                type='number'
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={checkStatus}>Check Status</button>
        </div>
    );
};

export default Counter;
