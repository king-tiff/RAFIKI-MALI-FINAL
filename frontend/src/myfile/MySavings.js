import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function MySavings() {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('');
    const [sortField, setSortField] = useState('totalAmount'); // Default sorting by totalAmount
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

                setData(result.data);
                setSortedData(result.data); // Initialize sortedData with the fetched data

                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.error('Error fetching data:', err);
            }
        })();
    }, [userId]);

    // Function to handle sorting
    const handleSort = (field) => {
        // Clone the sortedData array to avoid mutating the original data
        const sorted = [...sortedData];

        // Sort the data based on the selected field
        sorted.sort((a, b) => {
            if (field === 'totalAmount') {
                return a.totalAmount - b.totalAmount;
            } else if (field === 'savingFreq') {
                return a.savingFreq.localeCompare(b.savingFreq);
            } else {
                // Handle additional sorting fields here if needed
                return 0;
            }
        });

        // Update the state with the sorted data and sorting field
        setSortedData(sorted);
        setSortField(field);
    };

    // Function to handle filtering
    const handleFilter = (value) => {
        setFilter(value);
    };

    return (
        <div className="main-wrapper">
            <Header />
            <div className='row' style={{ marginTop: '40px' }}>
                <div className='col-sm-3'><Navbar /></div>
                <div className='col-sm-9'>
                    <div className='row'>
                        <div className='col'><p className='h1'>Savings Report</p></div>
                        <div className='col'>
                            <div className="d-flex justify-content-end">
                                <Link to="/add-savings">
                                    <button className="btn btn-outline-info mx-3">Add savings</button>
                                </Link>
                            </div>
                        </div>
                    </div>


                    <div className='row'>
                        <div className='col-sm-6'>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Filter by Purpose"
                                    value={filter}
                                    onChange={(e) => handleFilter(e.target.value)}
                                />
                            </div>

                        </div>
                        <div className='col-sm-6'>
                            <div className="d-flex justify-content-end">
                                <button
                                    onClick={() => handleSort('totalAmount')}
                                    className={`sort-button ${sortField === 'totalAmount' ? 'active-sort' : ''}`}
                                >
                                    Sort by Amount
                                </button>

                                <button
                                    onClick={() => handleSort('savingFreq')}
                                    className={`sort-button ${sortField === 'savingFreq' ? 'active-sort' : ''}`}
                                >
                                    Sort by Frequency
                                </button>
                            </div>
                        </div>
                    </div>




                    {loading ? (
                        <p>Loading...</p>
                    ) : sortedData.length === 0 ? (
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
                                {sortedData
                                    .filter((row) => row.purpose.includes(filter)) // Filter based on 'purpose'
                                    .map((row) => (
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

                    {/* Modal code */}
                    {/* ... (your modal code) ... */}
                </div>
            </div>
        </div>
    );
}

export default MySavings;
