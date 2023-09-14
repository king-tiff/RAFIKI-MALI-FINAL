import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Header from './Header';

function ExpensesReport() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const apiUrl = `http://localhost:2003/api/expenses-report/${userId}`;

        (async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Data received:', result);
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.error('Error fetching data:', err);
            }
        })();
    }, [userId]);
    console.log(userId);

    return (
        <div className="main-wrapper">
            <Header />
            <div className='row' style={{ marginTop: '40px' }}>
                <div className='col-sm-3'><Navbar /></div>
                <div className='col-sm-9'>
                    <p className='h1 m-3'>Expenses Report</p>
                    <div className="d-flex justify-content-end">
                        <Link to="/expenses-tracking">
                            <button className="btn btn-outline-info mx-3">Add expenses</button>
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
                                    <th>Expenses ID</th>
                                    <th>Expenses source</th>
                                    <th>Total Amount</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.expensesDetails}</td>
                                        <td>{row.amount}</td>
                                        <td>{row.date}</td>
                                        <td><button className='btn btn-outline-success'>view more</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                </div>
            </div>


        </div>
    );
}

export default ExpensesReport;
