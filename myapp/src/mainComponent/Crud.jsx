import React from 'react';
import Form from 'react-bootstrap/Form';


const Crud = () => {
    return (

        <>
         <form>
            <h5>Register</h5>
            <label>Name</label>
            <input type='text' placeholder='Name'/><br></br><br></br>
            <label>Email</label>
            <input type='text' placeholder='Email'/><br></br><br></br>
            <label>Number</label>
            <input type='number' placeholder='Number'/><br></br><br></br>
            <label>Password</label>
            <input type='text' placeholder='password'/><br></br><br></br>
            <button>Submit</button>
         </form>
        </>
    )
}

export default Crud