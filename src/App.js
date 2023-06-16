import Button from "./components/Button";
import './App.css';
import {Header} from "./components/Header";
import {Categories} from "./components/Categories";
import {SortPopup} from "./components/SortPopup";
import {Home} from "./pages/Home";
import {Cart} from "./pages/Cart";

import {Route, Routes} from "react-router";


function App() {


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                  <Routes>
                      <Route path={'/'} element={<Home/>}/>
                      <Route path={'/cart'} element={<Cart/>}/>

                  </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
