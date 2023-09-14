import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

function MySavings() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const apiUrl = `http://localhost:2003/api/savings-report/${userId}`;

        (async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Data received:', result);

                // Assuming that the result.data is an array of records
                setData(result.data);

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.error('Error fetching data:', err);
            }
        })();
    }, [userId]);

    console.log(data);

    // Render the data in a table or other component as needed



    return (
        <div className="main-wrapper">
            <Header />
            <div className='row' style={{ marginTop: '40px' }}>
                <div className='col-sm-3'><Navbar /></div>
                <div className='col-sm-9'>
                    <p className='h1'>Savings Report</p>
                    <div className="d-flex justify-content-end">
                        <Link to="/add-savings">
                            <button className="btn btn-outline-info mx-3">Add savings</button>
                        </Link>
                    </div>

                    {loading ? (
                        <p>Loading...</p>
                    ) : data.length === 0 ? (
                        <p>No data available</p>
                    ) : (
                        <table className="table table-hover table-center mb-0">
                            <thead>
                                <tr>
                                    <th>Savings ID</th>
                                    <th>Saving Purpose</th>
                                    <th>Number of Days</th>
                                    <th>Total Amount</th>
                                    <th>Saving Type</th>
                                    <th>Saving Frequency</th>
                                    <th>Current Amount</th>
                                    <th>Remaining Amount</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.purpose}</td>
                                        <td>{row.numDays}</td>
                                        <td>{row.totalAmount}</td>
                                        <td>{row.savingType}</td>
                                        <td>{row.savingFreq}</td>
                                        <td>{row.currentAmount}</td>
                                        <td>{row.remainingAmount}</td>
                                        <td>
                                            <button className='btn btn-outline-primary'>View More</button>
                                        </td>
                                        <td>
                                            <button className='btn btn-outline-warning'>Add amount</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}


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

export default MySavings;
