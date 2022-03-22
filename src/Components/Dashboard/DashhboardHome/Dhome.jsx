import React from 'react';
import Main from '../Main/Main';

const Dhome = () => {
    return (
        <div className='row'>
            <div className="col-md-3">

                <Main />
            </div>
            <div className="col-md-9">
                <div className="row">
                    <div className="card col-md-4">
                        <h4>Total Patient</h4>
                        <h1>1500</h1>
                        <p>Till Today</p>
                    </div>
                    <div className="card col-md-4">
                        <h4>Total Patient</h4>
                        <h1>170</h1>
                        <p>25 March 2022</p>
                    </div>
                    <div className="card col-md-4">
                        <h4>Total Appoiment</h4>
                        <h1>1200</h1>
                        <p>Till Today</p>
                    </div>
                </div>
                <div className="row py-3">
                    <h4>Patient Appoinment</h4>
                    <div class="table-responsive">
                        <table class="table table-hover table-center mb-0">
                            <thead>
                                <tr>

                                    <th>Patient Name</th>
                                    <th>Appt Date</th>
                                    <th>Purpose</th>
                                    <th>Type</th>
                                    <th class="text-center">Paid Amount</th><th>
                                    </th></tr></thead>
                            <tbody>
                                <tr>
                                    <td><h6 class="table-avatar">
                                        <a class="avatar avatar-sm mr-2" href="/template/doctor/patient-profile">

                                            <img class="avatar-img rounded-circle" src="/template/2c744cadfe4c6d885477f8e7f06d599d.jpg" alt="User" />
                                        </a><a href="/template/doctor/patient-profile">Richard Wilson<span>#PT0016</span>
                                        </a>
                                    </h6>
                                    </td>
                                    <td>11 Nov 2019 <span class="d-block text-info">10.00 AM</span>
                                    </td>
                                    <td>General</td>
                                    <td>New Patient</td>
                                    <td class="text-center">$150</td>
                                    <td class="text-right">
                                        <div class="table-action">
                                            <a class="btn btn-sm bg-info-light" href="/template/doctor/doctor-dashboard#0"><i class="far fa-eye"></i> View</a>
                                            <a class="btn btn-sm bg-success-light" href="/template/doctor/doctor-dashboard#0"><i class="fas fa-check"></i> Accept</a>
                                            <a class="btn btn-sm bg-danger-light" href="/template/doctor/doctor-dashboard#0"><i class="fas fa-times"></i> Cancel</a>
                                        </div>
                                    </td>
                                </tr>


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dhome;
