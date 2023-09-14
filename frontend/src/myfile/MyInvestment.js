import React from 'react';
import Navbar from './Navbar';
import Header from './Header';

function MyInvestment() {
    return (
        <div className="main-wrapper">
            <Header />
            <div className='row' style={{marginTop:'40px'}}>
                <div className='col-sm-3'><Navbar /></div>
                <div className='col-sm-9'>
                    <p className='h1'>Investment Report</p>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Investment ID</th>
                                <th>Investment company</th>
                                <th>Duration</th>
                                <th>Type of investment</th>
                                <th>Target amount</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>INV001</td>
                                <td>CRDB Bank</td>
                                <td>3 years</td>
                                <td>Stock</td>
                                <td>5,000,000</td>
                                <td><button className='btn btn-outline-info'
                                    data-bs-toggle="modal" data-bs-target="#myModal">Details
                                </button></td>
                                <td><button className='btn btn-outline-danger'>Teminate</button></td>
                            </tr>

                            <tr>
                                <td>INV002</td>
                                <td>EQUITY Bank</td>
                                <td>1 year</td>
                                <td>Real estate</td>
                                <td>4,000,000</td>
                                <td><button className='btn btn-outline-info'
                                    data-bs-toggle="modal" data-bs-target="#myModal">Details
                                </button></td>
                                <td><button className='btn btn-outline-danger'>Teminate</button></td>
                            </tr>

                        </tbody>
                    </table>

                    <div className="modal" id="myModal">
                        <div className="modal-dialog">
                            <div className="modal-content">

                                {/* Modal Header */}
                                <div className="modal-header">
                                    <h4 className="modal-title">Savin ID:SV001</h4>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                {/* Modal body */}
                                <div className="modal-body">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Date</th>
                                                <th>Amount</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>TR001</td>
                                                <td>1-june-2022</td>
                                                <td>5 month</td>
                                                <td>100,000</td>

                                            </tr>
                                        </tbody>
                                    </table>

                                </div>

                                {/* Modal footer */}
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyInvestment;
