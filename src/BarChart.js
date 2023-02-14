
import{
  Chart as ChartJS,
BarElement,
CategoryScale,
LinearScale,
Tooltip,
Legend
} from 'chart.js'
import {Bar} from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

export default function BarChart(props) {
const repProb = props.repProb
const pilyProb = props.pilyProb

const data ={
  labels: ['Probabilities' ],
  datasets: [
    {
      label: 'Rep Probability',
      data: [repProb],
      backgroundColor: '#41ceac',
      borderColor: 'white',
      borderWidth: 2
    },
    {
      label: 'Pilytix Probability',
      data: [pilyProb],
      backgroundColor: '#6da6ed',
      borderColor: 'black',
      borderWidth: 2
    },

  ]
}
const options ={
  responsive: true,
  maintainAspectRatio: false,
}
    return(
        <div className='g1'>
     <Bar
     data={data}
     options={options}
     >
     </Bar>
        </div>
    )
}