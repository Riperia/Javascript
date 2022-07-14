import { BrowserRouter} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Approuter from './components/router/Approuter';
import { AuthContext } from './context';
import{useState} from 'react'
import './styles/App.css'



function App() {
  const[isAuth , setisAuth] = useState(false);


  
    return (
<AuthContext.Provider value ={{
  isAuth,
  setisAuth
}}>
  <BrowserRouter>
 <Navbar></Navbar>
  <Approuter></Approuter>
  </BrowserRouter>
  </AuthContext.Provider>
  )

}

export default App;
