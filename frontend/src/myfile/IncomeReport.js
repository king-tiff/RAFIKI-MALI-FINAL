import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Header from './Header';
// import DeleteIncomeRecordButton from './DeleteIncome';

function IncomeReport() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const apiUrl = `http://localhost:2003/api/income-report/${userId}`; // Include the userId in the URL

        (async () => {
            try {
                const response = await fetch(apiUrl);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log('Data received:', result); // Debugging log
                setData(result.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false); // An error occurred, set loading to false
                console.error('Error fetching data:', err);
            }
        })();
    }, [userId]); // Include userId in the dependency array to re-fetch when it changes


    console.log(userId);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="main-wrapper">
            <Header />
            <div class="row" style={{ marginTop: '40px' }}>
                <div class="col-sm-3"><Navbar /></div>
                <div class="col-sm-9">
                    <p class="h1 mb-3">Income report</p>
                    <div className="d-flex justify-content-end">
                        <Link to="/income-tracking">
                            <button className="btn btn-outline-info mx-3">Add income</button>
                        </Link>
                    </div>
                    <div>
                        {loading ? (
                            <p>Loading...</p>
                        ) : data.length === 0 ? (
                            <p>No data available</p>
                        ) : (
                            <table className="table table-hover table-center mb-0">
                                <thead>
                                    <tr>
                                        <th>Income ID</th>
                                        <th>Income source</th>
                                        <th>Total Amount</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.source}</td>
                                            <td>{row.amount}</td>
                                            <td>{row.date}</td>
                                            <td><button className='btn btn-outline-success'>view more</button></td>
                                            {/* <td><DeleteIncomeRecordButton /></td> */}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncomeReport;
