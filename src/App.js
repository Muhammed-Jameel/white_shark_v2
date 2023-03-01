import { Home, Classes, BMI, Blogs, Trainers, Register,Login } from "./pages";
import { Route, BrowserRouter, Routes} from "react-router-dom";



function App() {
  return (<>
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/classes" element={<Classes />} />
          <Route path="/bmi-calculator" element={<BMI />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>

 
       
          
           
          
       
     
      </>);
}

export default App;
