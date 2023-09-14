import React, { useState, useEffect } from 'react';

function InvestmentCompanies() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl = 'http://localhost:2003/api/joined-data';

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
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="table table-hover table-center mb-0">
          <thead>
            <tr>
              <th>Option ID</th>
              <th>Investment Type</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.optionId}>
                <td>{row.optionId}</td>
                <td>{row.investmentType}</td>
                <td>{row.companyName}</td>
                <td><button className='btn btn-outline-success'>view more</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default InvestmentCompanies;
