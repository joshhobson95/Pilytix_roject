import './App.css'
import NewScreen from "./NewScreen";
import Background from './Background';
import { Paper } from '@mui/material';

export default function App() {
  return (
    <div style={{ position: 'relative', height: '150vh' }} className='App'>
    <Background />
    <Paper style={{ backgroundColor: '#1231', position: 'absolute', top: 0, left: 64, right: 64, bottom: 0 }} elevation={3}>
      <NewScreen />
    </Paper>
  </div>
  );
}
