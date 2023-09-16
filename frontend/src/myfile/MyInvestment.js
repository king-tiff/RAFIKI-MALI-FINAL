import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

function MyInvestment() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortedData, setSortedData] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortField, setSortField] = useState('amount');
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const apiUrl = `http://localhost:2003/api/investment-report/${userId}`;

    (async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('Data received:', result);

        setData(result.data);
        setSortedData(result.data);

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    })();
  }, [userId]);

//========================================== SORTING =====================================
  // Function to handle sorting
  const handleSort = (field) => {
    // Clone the sortedData array to avoid mutating the original data
    const sorted = [...sortedData];

    // Sort the data based on the selected field
    sorted.sort((a, b) => {
      if (field === 'amount') {
        return a.amount - b.amount;
      } else if (field === 'investmentOpt') {
        return a.investmentOpt.localeCompare(b.investmentOpt);
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
            <div className='col'><p className='h1'>Investment Report</p></div>
            <div className='col'>
              <div className="d-flex justify-content-end">
                <Link to="/add-investment">
                  <button className="btn btn-outline-info mx-3">Add Investment</button>
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
                  placeholder="Filter by Investment Option"
                  value={filter}
                  onChange={(e) => handleFilter(e.target.value)}
                />
              </div>
            </div>
            <div className='col-sm-6'>
              <div className="d-flex justify-content-end">
                <button
                  onClick={() => handleSort('amount')}
                  className={`sort-button ${sortField === 'amount' ? 'active-sort' : ''}`}
                >
                  Sort by Amount
                </button>
                <button
                  onClick={() => handleSort('investmentOpt')}
                  className={`sort-button ${sortField === 'investmentOpt' ? 'active-sort' : ''}`}
                >
                  Sort by Investment Option
                </button>
              </div>
            </div>
          </div>

          {loading ? (
            <p>Loading...</p>
          ) : data.length === 0 ? (
            <p>No data available</p>
          ) : (
            <table className="table table-hover table-center mb-0">
              <thead>
                <tr>
                  <th>CDN Account</th>
                  <th>Company Name</th>
                  <th>Investment Option</th>
                  <th>Time for Investment</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sortedData
                  .filter((row) => row.investmentOpt.includes(filter))
                  .map((row) => (
                    <tr key={row.id}>
                      <td>{row.cdnAccount}</td>
                      <td>{row.companyName}</td>
                      <td>{row.investmentOpt}</td>
                      <td>{row.timeForInvestment}</td>
                      <td>{row.amount}</td>
                      <td>
                        <button className='btn btn-outline-primary'>View More</button>
                      </td>
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

export default MyInvestment;
