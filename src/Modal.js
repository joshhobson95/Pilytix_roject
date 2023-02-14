import "./Modal.css";
import * as opportunities from "./opportunities.json";
import BarChart from "./BarChart";
import LineChart from "./LineChart"
import PolarOne from "./PolarOne"
import PolarTwo from "./PolarTwo";
import StarBar from "./StarBar";



export default function Modal(props) {
  const data = opportunities.default;
  const rowId = props.rowId;
  const setRowId = props.setRowId;
  const setModal = props.setModal;

  const filteredData = data.filter((item) => item.oppId === rowId);


  return (
    <div className="card-container">
      
      {filteredData.map((item) => (
        <div className="card">
              <div className="c1h1">
            <div className="c1h">
          <h4>{item.oppName}</h4>
            </div>
          </div>
          <div className="c2">
          <div className="c1">
          <span>Oppurtunity Id</span>
          <li className="a"><span>{item.oppId}</span></li>
          <span>Sales Rep Name</span>
          <li className="b">{item.salesRepName}</li>
          <span>Amount</span>
          <li>{item.amount}</li>
          <span>Product</span>
          <li>{item.product}</li>
          <span>Stage</span>
          <li>{item.stage}</li>
          <span>Rep Probability</span>
          <li>{item.repProbability}</li>
          <span>Pilytix Probability</span>
          <li>{item.pilytixProbability}</li>
          <StarBar rating={item.pilytixTier}/>
          </div>
          <div className="pcomp">
          <h3>Probability Comparison</h3>
          <BarChart repProb={item.repProbability} pilyProb={item.pilytixProbability}/>
          </div>
          </div>
          <div className="g2">
          <h3>Probability History</h3>
          <LineChart probHistory={item.probabilityHistory}/>
          </div>
          <div className="both-polars">
            <div className="g3">
          <h3>Pilytix Factors Increasing Win</h3>
          <PolarOne increasingFactors={item.pilytixFactorsIncreasingWin} />
            </div>
            <div className="g4">
          <h3>Pilytix Factors Decreasing Win</h3>
          <PolarTwo decreasingFactors={item.pilytixFactorsDecreasingWin} />
          </div>
     
            </div>

     


    

          <button onClick={() => setRowId(rowId - 1)}>Previous</button>
          <button onClick={() => setModal(false)} className='close'>Close</button>
          <button onClick={() => setRowId(rowId + 1)}>Next</button>
        </div>
      ))}
    </div>
  );
}

