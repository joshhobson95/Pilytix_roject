import * as React from "react";
import { useState } from "react";
import { StyledEngineProvider } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "./Modal";
import * as opportunities from "./opportunities.json";

export default function BasicTable(props) {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const data = opportunities.default;
  const modal = props.modal;
  const setModal = props.setModal;

  const [selcetedIndex, setSelectedIndex] = useState(null);

  function handleRowClick(event, row) {
    props.setModal(!modal);
    setSelectedIndex(row.oppId);
  }

 

  return (
    <div className="table">
      {modal ? (
        <div>
          <Modal
            rowId={selcetedIndex}
            setRowId={setSelectedIndex}
            setModal={setModal}
          ></Modal>
         <TableContainer component={Paper} sx={{backgroundColor: '#34334F', borderRadius: '10px'}}>
           <h1>Pilytix opportunities</h1>
            <Table sx={{
               minWidth: 650,
               backgroundColor: '#34334F',
               borderRadius: '100px'
    
              }} aria-label="simple table">
               

              <TableHead>

                <TableRow sx={{padding: '10px'}}>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center' }}>Opp Name</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center' }}>Opp Stage</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Rep Probability</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>PX Probability</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>PX Tier</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Amount</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Product</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Sales Rep</TableCell>
                </TableRow>
  
              </TableHead>
              <TableBody >
                {data.map((row) => (
                  <TableRow
                    onClick={(event) => handleRowClick(event, row)}
                    key={row.oppId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: '#282A3E' }}
                  >
                    <TableCell  sx={{color: 'white'}} component="th" scope="row">
                      {row.oppName}
                    </TableCell>
                    <TableCell align="left" sx={{color: 'white'}}>{row.stage}</TableCell>
                    <TableCell align="right"  sx={{color: 'white'}}>{row.repProbability}</TableCell>
                    <TableCell align="right"  sx={{color: 'white'}}>
                      {row.pilytixProbability}
                    </TableCell>
                    <TableCell align="left"  sx={{color: 'white'}}>{row.pilytixTier}</TableCell>
                    <TableCell align="right"  sx={{color: 'white'}}>{row.amount}</TableCell>
                    <TableCell align="left"  sx={{color: 'white'}}>{row.product}</TableCell>
                    <TableCell align="left"  sx={{color: 'white'}}>{row.salesRepName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ) : (
        <div>
          <StyledEngineProvider injectFirst>
          <TableContainer component={Paper} sx={{backgroundColor: '#34334F', borderRadius: '10px'}}>
            <h1>Pilytix opportunities</h1>
            <Table sx={{
               minWidth: 650,
               backgroundColor: '#34334F',
               borderRadius: '100px'
             }} aria-label="simple table">
              <TableHead>
         
                <TableRow sx={{padding: '10px'}}>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px',  textAlign: 'center' }}>Opp Name</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center' }}>Opp Stage</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Rep Probability</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>PX Probability</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>PX Tier</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Amount</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Product</TableCell>
                  <TableCell sx={{color: 'white', backgroundColor: '#4A4E6B', borderRadius: '100px', textAlign: 'center'}}>Sales Rep</TableCell>
                </TableRow>
  
              </TableHead>
              <TableBody >
                {data.map((row) => (
                  <TableRow
                    onClick={(event) => handleRowClick(event, row)}
                    key={row.oppId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 },
                  backgroundColor: '#282A3E' }}
                  >
                    <TableCell  sx={{color: 'white'}} component="th" scope="row">
                      {row.oppName}
                    </TableCell>
                    <TableCell align="left" sx={{color: 'white'}}>{row.stage}</TableCell>
                    <TableCell align="right"  sx={{color: 'white'}}>{row.repProbability}</TableCell>
                    <TableCell align="right"  sx={{color: 'white'}}>
                      {row.pilytixProbability}
                    </TableCell>
                    <TableCell align="left"  sx={{color: 'white'}}>{row.pilytixTier}</TableCell>
                    <TableCell align="right"  sx={{color: 'white'}}>{row.amount}</TableCell>
                    <TableCell align="left"  sx={{color: 'white'}}>{row.product}</TableCell>
                    <TableCell align="left"  sx={{color: 'white'}}>{row.salesRepName}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </StyledEngineProvider>
        </div>

      )}
    </div>
  );
}
