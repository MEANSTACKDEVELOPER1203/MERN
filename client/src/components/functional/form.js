import React, { useState } from 'react';

let Form = () => {
    // const [fullname, setFullname] = useState({ firstname: "", lastname: "" });

    // const onClickHandler = () => {
    //     console.log(fullname);
    // };




    const [name, setName] = useState('')
    const [lName, setLName] = useState('')
    const handleChange = (event) => {
        setName(event.target.value)
    }
    const handleChange2 = (event) => {
        setLName(event.target.value)
        console.log(event.target.value)
    }
    const handleSubmit = (evetnt) => {
        evetnt.preventDefault();
        console.log(evetnt.target.name.value)

    };
    return (
        <>
            <h1>Form Data</h1>
            {/* <input
                value={fullname.firstname}
                onChange={e => setFullname({ ...fullname, firstname: e.target.value })}
            />
            <input
                value={fullname.lastname}
                onChange={e => setFullname({ ...fullname, lastname: e.target.value })}
            />
            <button onClick={onClickHandler}>Submit</button><br></br> */}
            <label>lName : {lName} </label><br></br>
            <input id='name' type='text' onChange={handleChange2} ></input>
            <button onClick={handleSubmit}>Submit2</button>
            <form onSubmit={handleSubmit}>
                <label>Name : {name} </label><br></br>
                <input id='name' type='text' onChange={handleChange}></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    );
    // handleSubmit = (evetnt) => {
    //     evetnt.preventDefault();
    //     console.log(evetnt.target.name.value)
    // }

    // return (
    //     <div>
    //         <Form onSubmit={this.handleSubmit}>
    //             <h1>Form Data</h1>
    //             <label>Name : </label>
    //             <input id='name' type='text' onChange={this.handleSubmit}></input>
    //             <button type='submit'>Submit</button>
    //         </Form>
    //     </div>
    // )
}
export default Form