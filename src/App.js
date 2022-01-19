import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/itemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Hello World!"}/>
    </div>);
}

export default App;
