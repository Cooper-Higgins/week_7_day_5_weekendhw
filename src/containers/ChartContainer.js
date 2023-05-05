import React, {useState, useEffect} from 'react';
import Chart from '../components/Chart';

const ChartContainer = () => {

  const [stonks, setStonks] = useState([])

  useEffect(() => {
    getAllStonks()
  }, [])

  const getAllStonks = () => {
     fetch("https://tradestie.com/api/v1/apps/reddit?date=2022-04-03")
    .then((response) => response.json())
    .then((data) => setStonks(data))
  }

  return (
    <div className="container">
      <h1>DIAMOND HANDS DAILY DIGEST</h1>
      {stonks.length > 1 ? <Chart stonks={stonks}/> : null}
    </div>
  );
}

export default ChartContainer;
