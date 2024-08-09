import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.scss';

import First_EN from './pages/1_en';
import First_SP from './pages/1_sp';
import Second_EN from './pages/2_en';
import Second_SP from "./pages/2_sp";
import Third_EN from './pages/3_en';
import Third_SP from './pages/3_sp';
import NotFound from './pages/404';
import Forth_EN from './pages/4_en';
import Forth_SP from './pages/4_sp';
import Fifth_EN from './pages/5_en';
import Fifth_SP from './pages/5_sp';
import Sixth_SP from './pages/6_en';
import S from './pages/7'
import New from './pages/8'
import Urgent from './pages/9'
import VeryNew from './pages/10'
import Visits from "./pages/visits";
import Test from './pages/111';
import Client from './pages/Client'
import Ip from './pages/ip'
import Newx from './pages/Newx'
import Party from './pages/Party';
import Food from './pages/Food';
import Late from './pages/Late';
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
function App() {
 console.log('s');
  return (
    
    <Router>
      <div className="App">
        <Routes>
          {/* c */}

{/*           <Route  path="/"  element = {<S />} /> */}
{/*           <Route path = "/engmedgdn" element = {<Party />} /> */}
{/*           <Route path = "/ip" element = {<Ip />} /> */}
          {/* //<Route path = "/engaca1" element = {<First_EN />} />
          // <Route path = "/spanaca1" element = {<First_SP />} />
          // <Route path = "/engaca2" element = {<Second_EN />} />
          // <Route path = "/spanaca2" element = {<Second_SP />} /> */}
          {/* <Route path = "/engmed1" element = {<Third_EN />} /> */}
             {/* <Route path = "/engmed1" element = {<S />} /> */}
{/*          <Route path = "/engmedssd" element = {<Late/>} /> */}
{/*              <Route path = "/engmed2" element = {<Newx />} /> */}
             {/* // <Route path = "/engmed11" element = {<Food />} />
             // <Route path = "/km-engmed1" element = {<VeryNew />} /> 
             // <Route path = "/km-engmedgroc1" element = {<Urgent/>} />
          // <Route path = "/engmedgroc1" element = {<New/>}/>
          // <Route path = "/spanmed1" element = {<Third_SP />} />
          // <Route path = "/hbosolar" element = {<Forth_EN />} />
          // <Route path = "/spanfe1" element = {<Forth_SP />} />
          // <Route path = "/engerc1" element = {<Fifth_EN />} />
          // <Route path = "/spandeb1" element = {<Fifth_SP />} />
          // <Route path = "/engdeb1" element = {<Sixth_SP />} />
          // <Route path = "/engmedpn" element = {<Test />} />
          // <Route path = "/engmed28if" element = {<Client />} /> */}
          {/* <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} /> */}
          {/* <Route path = "/a" element = {<S />} /> */}

{/*           <Route path = "/view" element = {<Visits />} /> */}
          <Route path = "/*" element = {<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
