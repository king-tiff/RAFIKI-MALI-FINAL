import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSackDollar, faCreditCard, faDollar, faTimeline } from '@fortawesome/free-solid-svg-icons';

function SavingCard() {
    const [totalAmount, setTotalAmount] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetch(`http://localhost:2003/api/total-savings/${userId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setTotalAmount(data.totalAmount);
            })
            .catch((error) => {
                console.error('Error fetching total savings:', error);
            });
    }, []);

    return (
        <div>
        {totalAmount !== null ? (
         <div className="card">
         <div className="card-body">
             <div className="dash-widget-header">
                 <span className="dash-widget-icon text-success">
                     <FontAwesomeIcon icon={faSackDollar} />
                 </span>
                 <div className="dash-count">
                     <h3>TShs {totalAmount}</h3>
                 </div>
             </div>
             <div className="dash-widget-info">
                 <h6 className="text-muted">My savings</h6>
                 <div className="progress progress-sm">
                     <div className="progress-bar bg-primary w-50"></div>
                 </div>
             </div>
         </div>
     </div>
        ) : (
          <p>No data available</p>
        )}
      </div>
    );
  }

export default SavingCard;
