import {useState} from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);



export default function PolarTwo(props){

    const [showData, setShowData] = useState(false)

    if(!props.decreasingFactors) return "No decreasing Factors"

   

    const weightValues= props.decreasingFactors.map(item => item.weight.value)
    console.log(weightValues)
   


    const ones = weightValues.filter(num=> num=== -1)
    const numOfOnes = ones.length
    const twos = weightValues.filter(num=> num=== -2)
    const numOfTwos = twos.length
    const threes = weightValues.filter(num=> num=== -3)
    const numOfThrees = threes.length

    const finalNums = [numOfThrees,numOfTwos,numOfOnes]

    const factors = props.decreasingFactors.map(item => <div className='factorDetails'><p>Name: {item.name}</p><p> Message:{item.message}</p> <p> Weight Value: {item.weight.value}</p><p> Weight Description: {item.weight.description}</p> </div>)
 




    const data ={
        labels: ['Strong Negatives(-3)', 'Medium Negatives(-2)', "Weak Negatives(-1)" ],
        datasets: [
          {
            label: '# of factors',
            data: finalNums,
            backgroundColor: [
                '#b276b2',
                '#5da5da',
                '#60bd68',
              ],
            borderColor: 'black'
          },
        ]
      }
      const options ={
        responsive: true,
        
      }
      
      function showDetailsHandler(event) {
        setShowData(!showData)
  
        }
        

    return(
        <div className='polar'>
        {showData ? (     
          <div>
            <PolarArea data={data} options={options}/>
            <button onClick={showDetailsHandler}>Show Increased Factor's Details</button>
            <div>
           {factors}
            </div>
            </div>
        ) : (      <div>
            <PolarArea data={data} options={options}/>
            <button onClick={showDetailsHandler}>Show Increased Factor's Details</button>
        </div>)}
        </div>
     
    )
}