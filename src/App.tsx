import React from 'react';
import './App.css';
import logo from './images/logo.svg';

function App() {
  return (
    <div>
      <div className='main-pic-block'>
        <div className='container'>
          <header className="header">
            <a href="#" className="logo">
              <img src={logo} alt="Moscowqual Ремонт бытовой техники"/>
            </a>

            <nav className='main-nav'>
              <ul>
                <li><a href="#">Почему мы</a></li>
                <li><a href="#">Наши процедуры</a></li>
                <li><a href="#">Новейшие аппараты</a></li>
                <li><a href="#">Моя команда</a></li>
                <li><a href="#">Контакты</a></li>
              </ul>
            </nav>
          </header>

          <div className='main-block'>
            <div className='main-first-block'>
              <p className='clinic-main-text'>Косметологическая клиника</p>
              <p className='siuzanna-text'>Dr. Siuzanna Casparean</p>
              <h2 className='main-title'>Красота не требует жертв</h2>
              <p className='clinic-text'>Запишись и получи бесплатную консультацию нашего косметолога</p>
              <button className='clinic-btn'>Записаться онлайн</button>
            </div>

            <div className='main-second-block'>
              <p className='second-block-number'>(+373) 68 884 443</p>
              <p className='second-block-worktime'>10:00 - 20:00 | Everyday</p>

              <div className="main-second-links-block">
                <a href="#" className="insta">Instagram</a>
                <a href="#" className="face">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='second-block'>

      </div>
    </div>
  );
}

export default App;
