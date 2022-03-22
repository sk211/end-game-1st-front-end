import React from 'react'

export default function Heart() {
    return (
        <div className="container">


            <div className='row py-5'>
                <div className="col-md-6 pt-5">
                    <h4 className='text-danger fw-bold'>WHY CHOOSE US</h4>
                    <h1>We are Achieve the Success of <br /> Heart Surgery</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className="btn btn-danger">Read more</button>
                </div>
                <div className="col-md-6">
                    <img src="https://doccure-html.dreamguystech.com/cardiology/assets/img/about-us.png" alt="" />
                </div>
            </div>
        </div>
    )
}
