import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Hitung() {
  const [number, setNumber] = useState(0)

  function tambahAngka() {
    setNumber(number + 1)
  }

  function kurangAngka() {
    setNumber(number - 1)
  }

  function resetAngka() {
    setNumber(0)
  }

  return(
    <div>
      <button onClick={tambahAngka}> tambah Angka </button>
      <button onClick={kurangAngka}> kurang Angka </button>
      <button onClick={resetAngka}> reset angka </button>
      <p>angka: {number}</p>
    </div>
  )
}

function Abyss() {
  return(
    <div>
      <Greeting name="Akmal" />
      <Greeting name="Dayan" />
    </div>
  )
}

function Greeting(props) {  
  return <h4>Hello {props.name}! </h4>
}

function App() {
  return (
    <div className="App">
      <name />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World</p>
        <Abyss />
        <Hitung />
      </header>
    </div>
  );
}

export default App;
