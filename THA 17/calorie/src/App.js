import logo from './logo.svg';
import './App.css';
import {Meme} from "./Meme";

import {Chess} from "./Chess";
import { Calorie } from './Calorie';

function App() {
  return (
    <>
    <h2 className="heading">Calorie Read Only</h2>
            <div className="container">
                <Calorie title="Pizza" amount="96"/> 
                <Calorie title="Burger" amount="76"/> 
                <Calorie title="Coke" amount="20"/> 
                <Calorie title="Pani-puri" amount="10"/> 
                <Calorie title="Momos" amount="36"/> 
                <Calorie title="Pizza" amount="56"/> 

            </div>
    </>
  );
}

export default App;
