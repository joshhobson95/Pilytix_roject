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



export default function PolarOne(props){


    const [showData, setShowData] = useState(false)


    if(!props.increasingFactors) return <h5>No Increasing Factors</h5>
    
    const weightValues= props.increasingFactors.map(item => item.weight.value)


    const ones = weightValues.filter(num=> num===1)
    const numOfOnes = ones.length
    const twos = weightValues.filter(num=> num===2)
    const numOfTwos = twos.length
    const threes = weightValues.filter(num=> num===3)
    const numOfThrees = threes.length

    const finalNums = [numOfThrees, numOfTwos, numOfOnes]

    const factors = props.increasingFactors.map(item => <div className='factorDetails'><p>Name: {item.name}</p><p> Message: {item.message}</p> <p> Weight Value: {item.weight.value}</p><p> Weight Description: {item.weight.description}</p> </div>)
 



    const data ={
        labels: ['Strong Positives(3)', 'Medium Positives(2)', "Weak Positives(1)" ],
        datasets: [
          {
            label: '# of factors',
            data: finalNums,
            backgroundColor: [
                '#A21F16',
                '#FF715B',
                '#FFDC5E',
            
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