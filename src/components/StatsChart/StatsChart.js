import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['HP', 'Attack', 'Defense', 'Special Attack', 'Special Defense', 'Speed'],
  datasets: [
    {
      data: [35, 55, 40, 50, 50, 90],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
  indexAxis: 'y',
  scales: {
    x: { 
      min: 0,
      max: 100
    }
  },
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 3,
    },
  },
  responsive: false,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right',
      display: false
    },
    title: {
      display: false,
      text: 'Stats',
      fontSize: 50,
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <Bar 
        data={data} 
        options={options} 
        width={500}
	      height={300}
    />
  </>
);

export default HorizontalBarChart;