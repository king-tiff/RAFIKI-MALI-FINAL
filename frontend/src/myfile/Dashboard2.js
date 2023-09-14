import React from "react";
import './Style.css';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Dashboard() {

    const userID = sessionStorage.getItem('userID', userID);
    
    if (userID === null) {
        return <div>Loading...</div>; // or handle the loading state as needed
    }


    return (
        <div class="container mt-3">
            <Navbar />
            <h1>Welcome to the Dashboard,  {userID}!</h1>
            <div class="row">{/* bigger container */}

           {console.log(userID)}

                {/* <div class="col-sm-8 bg-dark text-white"> */}
                <div class="col-sm-8 text-white">

                    <div class="row">{/* smaller container */}

                        <div class="col">
                            <div className="card" style={{ width: '400px' }}>

                                {/* Content */}
                                <div className="card-body">
                                    <h2>Total Savings</h2>
                                    <p className="h2 text-center">Tsh 0</p>
                                    <Link to='/my-savings'>
                                        <button className="btn btn-primary">See more</button>
                                    </Link>
                                </div>

                            </div>
                        </div>{/* smaller container close */}

                        <div class="col">
                            <div className="card" style={{ width: '400px' }}>
                                {/* Content */}
                                <div className="card-body">
                                    <h2>Total Investment</h2>
                                    <p className="h2 text-center">Tsh 0</p>
                                    <Link to='my-investment'>
                                        <button className="btn btn-primary">See more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>{/* smaller container close */}
                    </div>                     {/* first row close */}


                    <div class="row">{/* smaller container */}

                        <div class="col">
                            <div className="card" style={{ width: '400px' }}>
                                {/* Content */}
                                <div className="card-body">
                                    <h2>Total Income</h2>
                                    <p className="h2 text-center">Tsh 0</p>
                                    <Link to='/income-report'>
                                        <button className="btn btn-primary">See more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>{/* smaller container close */}

                        <div class="col">
                            <div className="card" style={{ width: '400px' }}>
                                {/* Content */}
                                <div className="card-body">
                                    <h2>Total Expenses</h2>
                                    <p className="h2 text-center">Tsh 0</p>
                                    <Link to='/expenses-report'>
                                        <button className="btn btn-primary">See more</button>
                                    </Link>
                                </div>
                            </div>
                        </div>{/* smaller container close */}
                    </div>



                </div>
                {/* bigger container */}
                <div class="col-sm-4 p-3 text-white">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Platform</th>
                                <th>Status</th>
                                <th>Rate</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>INV001</td>
                                <td>CRDB</td>
                                <td>available</td>
                                <td>6% - 10%</td>

                            </tr>

                            <tr>
                                <td>INV002</td>
                                <td>UTT</td>
                                <td>available</td>
                                <td>2% - 6%</td>

                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>





    );
}
export default Dashboard;