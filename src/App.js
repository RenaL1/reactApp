import React from 'react';
import logo from './logo.svg';
import './App.css';

function App(prop) {
  return (
   <main>
    <header>
      <h1>{prop.name} Student resume</h1>
      <h2>Learn more about Sally below!</h2>
    </header>
    <section>
      <h2>Education</h2>
      <h3>University of Nowhere</h3>
    </section>
    <section>
      <h2>Employement History</h2>
      <h3>XYZ Bakery</h3>
      <ul>
        <li>Title: Sales</li>
        <li>Dates: 2018-2019</li>
        <li>Description: Commercial sales for bakery</li>
      </ul>
      <h3>123 Cookies</h3>
      <ul>
        <li>Title: Sales</li>
        <li>Dates: 2016-2017</li>
        <li>Description: Commercial sales for cookies</li>
      </ul>
    </section>
    <address>
      <h2>Contact Info</h2>
      <ul>
        <li class="footerBox">Sally Student</li>
        <li class="footerBox"><a href="mailto:junk@gmail.com"> Email</a> </li>
        <li class="footerBox">(777)-777-777</li>
      </ul>
    </address>

    <footer>Last Updated: 6/14/2019</footer>

  </main>
  
  );
}

export default App;
