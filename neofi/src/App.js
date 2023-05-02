import logo from './logo.svg';
import './App.css';
 
import Navbar from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Trade from './Components/Trade';
import Navlogo from './Components/Navlogo';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <ChakraProvider>
      <BrowserRouter>
      {/* <Navlogo/> */}
       {/* <Navbar/> */}
       <Trade/>
       </BrowserRouter>
       </ChakraProvider>
    </div>
  );
}

export default App;
