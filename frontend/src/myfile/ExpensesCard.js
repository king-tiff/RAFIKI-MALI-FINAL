import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';

function ExpensesCard() {
    const [totalAmount, setTotalAmount] = useState(null);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetch(`http://localhost:2003/api/total-expenses/${userId}`)
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
          <div className="SavingCard">
            <div className="card-body">
              <div className="dash-widget-header">
                <span className="dash-widget-icon text-primary border-primary">
                  <FontAwesomeIcon icon={faTimeline} />
                </span>
                <div className="dash-count">
                  <h3>TShs {totalAmount}</h3>
                  <h4 className="text-muted">My Expenses</h4>
                </div>
              </div>
              <div className="dash-widget-info">
                <div className="progress progress-sm">
                  <div className="progress-bar bg-danger" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }

export default ExpensesCard;
