import {Line} from 'react-chartjs-2'
import {useState, useEffect} from 'react'
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement, 
    Legend,
    Tooltip
} from 'chart.js'

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement, 
    Legend,
    Tooltip
)






export default function LineChart(props){


const probHistory = props.probHistory 

let longestDay = 0;
if (probHistory && probHistory[0]) {
  if (probHistory[0].daysAgo !== null && probHistory[0].daysAgo !== undefined) {
    longestDay = probHistory[0].daysAgo;
  }
}
const value = longestDay
function createArray(num) {
    var arr = [];
    for (var i = 1; i <= num; i++) {
      arr.push(i);
    }
    return arr;
  }
  let result = createArray(value)
  let reversed = result.reverse() 

  let filteredProbHistory = [];
  if (probHistory) {
    filteredProbHistory = probHistory.filter(element => element.daysAgo !== null);
  }
  





const [data, setData] = useState({
    labels: [1],
    datasets: [{
        label: "Pilytix Probability",
        data: filteredProbHistory,
        backgroundColor: 'red',
        borderColor: 'black',
        pointBorderColor: 'green',
        tension: 0.4,
        parsing: {
            xAxisKey: 'daysAgo',
            yAxisKey: 'pilytixProb'
        }
    },
    {
        label: "Rep Probability",
        data: filteredProbHistory,
        backgroundColor: 'red',
        borderColor: 'black',
        pointBorderColor: 'green',
        tension: 0.4,
        parsing: {
            xAxisKey: 'daysAgo',
            yAxisKey: 'repProb'
        }
    },

]
})
useEffect(() =>{
    setData({
        labels: reversed,
        datasets: [{
            label: 'Pilytix Probability',
            data: filteredProbHistory,
            backgroundColor: '#6da6ed',
            borderColor: '#6da6ed',
            pointBorderColor: 'black',
        }, 
        {
            label: "Rep Probability",
            data: filteredProbHistory,
            backgroundColor: '#41ceac',
            borderColor: '#41ceac',
            pointBorderColor: 'white',
            tension: 0.4,
            parsing: {
                xAxisKey: 'daysAgo',
                yAxisKey: 'repProb'
            }
        },]
    })
  }, [probHistory])




    const options ={
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 100,
        }, 
         scales: {
    x: {
      title: {
        display: true,
        text: 'days ago'
      }
    },
    y: {
        title: {
            display: true,
            text: 'Probability'
        }
    }
  }     
    }
    return(
        <div className='linechart'>
            <Line
            data={data}
            options={options}
            >
            </Line>
        </div>
    )
}