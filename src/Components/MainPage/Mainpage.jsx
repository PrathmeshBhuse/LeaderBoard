import React from 'react';
import './Mainpage.css';


const Mainpage = () => {
    const dropdownOptions = ['0%', '0.5%', '1%'];
    
    return (
        <div className='Mainpage'>
            <div className="heading">
                <h1 className="head1">LeaderBoard</h1>
                <hr className='hr1' />
            </div>

            <div className="content">
                <div className="header">
                    <div className="title">
                        <h2>Basic Backtest</h2>
                        <hr  className='hr2'/>
                    </div>
                    <div className="dropdown">
                    <label htmlFor="slippage-dropdown" className="dropdown-label"> <b>Slippage :</b></label>
                    <select className="custom-dropdown">
                            {dropdownOptions.map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Calmar Ratio</th>
                            <th>Overall Profit</th>
                            <th>Avg. Daily Profit</th>
                            <th>Win %(Day)</th>
                            <th>Price (Rs)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Action</td>
                            <td>3.96</td>
                            <td>Data 4</td>
                            <td>Data 5</td>
                            <td>Data 6</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Wait and trade_Save</td>
                            <td>2.62</td>
                            <td>178252.5</td>
                            <td>161.9</td>
                            <td>0.63</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>strategy_name</td>
                            <td>3.62</td>
                            <td>268872.5</td>
                            <td>216.31</td>
                            <td>0.64</td>
                            <td>500</td>
                            <td><a href="#">Buy</a></td>
                        </tr>
                       
                        <tr>
                            <td>4</td>
                            <td>strategy_name</td>
                            <td>3.22</td>
                            <td>370845</td>
                            <td>303.47</td>
                            <td>0.65</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>strategy_name</td>
                            <td>3.22</td>
                            <td>370845</td>
                            <td>303.47</td>
                            <td>0.65</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Based on premium and</td>
                            <td>3.42</td>
                            <td>255425</td>
                            <td>208.51</td>
                            <td>0.64</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Based on premium wit</td>
                            <td>3.01</td>
                            <td>135980</td>
                            <td>185.77</td>
                            <td>0.49</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>strategy_name</td>
                            <td>2.76</td>
                            <td>267867.5</td>
                            <td>218.49</td>
                            <td>0.6</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Wait and trade_Save</td>
                            <td>2.62</td>
                            <td>178252.5</td>
                            <td>161.9</td>
                            <td>0.63</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>iron condor</td>
                            <td>2.44</td>
                            <td>176420</td>
                            <td>137.51</td>
                            <td>0.65</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>strategy_name</td>
                            <td>2.04</td>
                            <td>244555</td>
                            <td>198.66</td>
                            <td>0.62</td>
                            <td>-</td>
                            <td><a href="#">View</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mainpage;
