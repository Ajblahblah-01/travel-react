import React from 'react';
import ReactDOM from 'react-dom/client';
import header_img from './icons/header_earth.png'
import Card from "./card.js"
import data from "./data.js"
import './index.css';



function Header(){
  return (
    <div className = "header">
      <img src={header_img} alt="" /> 
      <h1>my travel journal</h1>

    </div>
  )
}

function Main(){
  const cards = data.map(item => {
    return (
      <Card 
        key = {item.id} 
        {...item}
      />
    )
  })
  return (
    <div className="main">
      <Header />
      <section className="footer">
        {cards}
      </section>
      
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Main />
  </div>
);

