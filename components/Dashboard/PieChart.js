import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import axios from "axios";

ChartJS.register(ArcElement,
  Tooltip,
  Legend);

function RePieChart() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/cards')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // const prepareChartData = () => {
  //   const chartLabels = data.map(item => item.category);
  //   const chartData = data.map(item => item.value);
  
  //   return {
  //     labels: chartLabels,
  //     datasets: [
  //       {
  //         data: chartData,
  //         backgroundColor: ['red', 'green', 'blue', 'yellow'], 
  //       },
  //     ],
  //   };
  // };
  
  
    const Piedata ={
    labels: ['Sci-fi', 'Novels', 'Technical', 'Thriller', 'Managment'],
    datasets: [
      {
        data: [20, 30, 20, 10, 10],
        backgroundColor: ['darkBlue', 'orange', 'Yellow','lightBlue','green'],
      },
    ],
  };



  return (
    <div>
      <div>
        <div style={{height:'50%',width:'60%', marginLeft:'80px'}}>
          <Pie data={Piedata}
                
          />

        </div>
      </div>
    </div>
  );
}
export default RePieChart;