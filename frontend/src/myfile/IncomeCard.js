import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimeline } from '@fortawesome/free-solid-svg-icons';

function IncomeCard() {
    const [totalIncome, setTotalIncome] = useState(null); // Fix the typo here
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetch(`http://localhost:2003/api/total-income/${userId}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setTotalIncome(data.totalIncome);
            })
            .catch((error) => {
                console.error('Error fetching total savings:', error);
            });
    }, []);

    return (
        <div>
            {totalIncome !== null ? (
                <div className="card">
                    <div className="card-body">
                        <div className="dash-widget-header">
                            <span className="dash-widget-icon text-primary border-primary">
                                <FontAwesomeIcon icon={faTimeline} />
                            </span>
                            <div className="dash-count">
                                <h3>TShs {totalIncome}</h3>
                                <h4 className="text-muted">My Income</h4>
                            </div>
                        </div>
                        <div className="dash-widget-info">
                            <div className="progress progress-sm">
                                <div className="progress-bar bg-warning" style={{ width: '50%' }}></div>
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

export default IncomeCard;
