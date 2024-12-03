import AddNav from "./componants/AddNav";
import AddPizza from "./componants/AddPizza";
import PizzaList from "./componants/PizzaList";
import UpdatePizza from "./componants/UpdatePizza";
import {BrowserRouter, Route , Routes} from 'react-router-dom'

import Home from "./componants/Home";
import About from "./componants/About";


function App(){
return (
    <>
    
      <h1>Welcome to My Projects</h1>
     
        
     <AddNav/>
     
     <BrowserRouter>
     <Routes>
     
  

      <Route path="/home" element={<Home/>}/>
      <Route path="/pizza-list" element={<PizzaList/>}/>
      <Route path="/addPizza" element={<AddPizza/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/update-pizza/:id" element={<UpdatePizza/>}/>






      </Routes>
     </BrowserRouter>
      </>
  )
  
}

export default App;

