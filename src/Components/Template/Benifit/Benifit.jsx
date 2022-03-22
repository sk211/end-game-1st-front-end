import React from 'react'
import './Benifit.css'

const stylees = {
    "width": "30px",
    "height": "30px"
}

export default function Benifit() {
    return (
        <div id="befi" >
            <div className="container">


                <div className='row'>
                    <div className="col-md-6">
                        <h4>OUR BENEFITS</h4>
                        <h1>Choose Our Cardiology
                            Healthcare Solutions</h1>
                        <div>
                            <div className='row'>



                                <div className="col-md-6 d-flex text-center">
                                    <li className='bg-danger' style={stylees}>
                                        <i class="fa-solid fa-check"></i>
                                    </li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, laudantium voluptatem explicabo ratione debitis eaque molestiae sit quo</p>
                                </div>
                                <div className="col-md-6 d-flex text-center">
                                    <li className='bg-danger' style={stylees}>
                                        <i class="fa-solid fa-check"></i>
                                    </li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, laudantium voluptatem explicabo ratione debitis eaque molestiae sit quo</p>
                                </div>
                            </div>

                        </div>
                        <div>
                            <div className='row'>



                                <div className="col-md-6 d-flex text-center">
                                    <li className='bg-danger' style={stylees}>
                                        <i class="fa-solid fa-check"></i>
                                    </li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, laudantium voluptatem explicabo ratione debitis eaque </p>
                                </div>
                                <div className="col-md-6 d-flex text-center">
                                    <li className='bg-danger' style={stylees}>
                                        <i class="fa-solid fa-check"></i>
                                    </li>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur officia, laudantium voluptatem explicabo ratione debitis eaque molestiae sit quo,</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>

    )
}
