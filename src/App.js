import React, {useState,useEffect,useRef} from 'react'
import './App.css';

function App() {
  const[result,setResult]=useState("")
  const inputRef=useRef(null);
  useEffect(()=>inputRef.current.focus())

  function handleClick(e){
    setResult(result+e.target.value)
  }
  function clear(){
    setResult("");
  }
  function calculate(){
    setResult(eval(result).toString());
  }
  return (
    <div className="App">
      <h1>CALCULATOR</h1>
      <div id="input">
      <input type="text" value={result} ref={inputRef}/></div>
      <div id="button">
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button><br></br>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button><br></br>
      <button value="7" onClick={handleClick}>7</button> 
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button><br></br>
      <button value="0" onClick={handleClick}>0</button>
      <button value="+" onClick={handleClick}>+</button>
      <button value="-" onClick={handleClick}>-</button><br></br>
      <button value="*" onClick={handleClick}>*</button>
      <button value="/" onClick={handleClick}>/</button>
      <button value="." onClick={handleClick}>.</button><br></br>
      <button  onClick={calculate}>=</button>
      <button value="ac" onClick={clear}>ac</button>
      </div>
    </div>
  );
}

export default App;
