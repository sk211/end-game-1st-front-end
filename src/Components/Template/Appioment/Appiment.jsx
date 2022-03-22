import React from 'react'
import { FormControl, InputGroup } from 'react-bootstrap'
import './Appiment.css'

const styles = {
    "background-color": "#0168b3",

}
const content = {
    "padding": "20px",
    "display": "flex",
    "justify-content": "center",
    "padding-top": "50px"

}

export default function Appiment() {
    return (
        <div className='row   ' style={styles}>
            <div className="col-md-8">
                <div style={content}>

                </div>
                <h1>Search Doctor, <br />
                    Make an Appointment !</h1>
                <div>
                    <InputGroup className="mb-3 mr-2">
                        <FormControl aria-label="First name" />
                        <FormControl aria-label="Last name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl aria-label="First name" />
                        <button className='btn btn-danger'>Search</button>
                    </InputGroup>
                </div>
            </div>
            <div className="col-md-4">
                <img src="https://doccure-html.dreamguystech.com/cardiology/assets/img/search-img.png" alt="" width="100%" />
            </div>

        </div>
    )
}
