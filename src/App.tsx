import React from 'react';
import './App.css';
import logo from './images/logo.svg';
import laser from './images/laser2.png';
import pic1 from './images/pic1.png';
import pic2 from './images/pic2.png';
import pic3 from './images/pic3.png';
import pic4 from './images/pic4.jpg';
import pic5 from './images/pic5.png';
import map from './images/map.jpg';
import siuzanna from './images/siuzanna.jpg';
import secondPic from './images/second-pic.jpg';


function App() {
  return (
    <div>
      <div className='main-pic-block'>
        <div className='container'>
          <header className="header">
            <a href="#" className="logo">
              <img src={logo} alt="Dr. Siuzanna Casparean"/>
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
              <button className='clinic-btn btn'>Записаться онлайн</button>
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

      <div className='container'>
        <div className='second-block'>
          <div className='sixth-text-block'>
            <h3 className='title centre-title'>Преображайтесь в <span>нашем мед.центре</span></h3>
            <p className='doc-text'>
              АМедцентр Dr. Siuzanna Casparean открылся недавно, и
              с первых месяцев работы концепция Сюзанны Каспарян
              подтверждает свою эффективность. Проект продолжает
              развиваться, ориентируясь на самую прогрессивную
              аппаратуру мировых брендов.  АМедцентр Dr. Siuzanna
              Casparean открылся недавно, и с первых месяцев
            </p>
          </div>

          <div className="oval-container oval-container1">
            <div className="oval">
              <button className="oval-button"></button>
              <button className="oval-button"></button>
              <button className="oval-button"></button>
            </div>
          </div>

          <div className='second-img-block'>
            <img src={secondPic} alt="Сюзанна Каспарян"/>
          </div>
        </div>

        <div className='third-block'>
          <h3 className='title'>Почему люди <span>выбирают нас</span></h3>
          <div className='third-block-box'>
            <div className='box'>
              <p>АМедцентр Dr. Siuzanna Casparean открылся недавно, и с первых месяцев работы концепция Сюзанны</p>
            </div>

            <div className='box'>
              <p>АМедцентр Dr. Siuzanna Casparean открылся недавно, и с первых месяцев работы концепция Сюзанны</p>
            </div>

            <div className='box'>
              <p>АМедцентр Dr. Siuzanna Casparean открылся недавно, и с первых месяцев работы концепция Сюзанны</p>
            </div>
          </div>
        </div>

        <div className='fourth-block'>
          <h3 className='title'>Наши <span>процедуры</span></h3>
          <div className='procedure-boxes'>
            <button className='procedure-box procedure-box1'>Аппаратная косметология</button>

            <button className='procedure-box'>Инъекционные методы</button>

            <button className='procedure-box'>Лазерная эпиляция</button>

            <button className='procedure-box'>Аппаратная коррекция фигуры</button>
          </div>

          <div className='fourth-inner-block'>
            <div className='fourth-inner-img'><img src={laser} alt="Аппаратная косметология"/></div>

            <div className='fourth-inner-box'>
              <p className='fourth-inner-text1'>Аппаратная косметология</p>

              <p className='fourth-inner-text2'>
                АМедцентр Dr. Siuzanna Casparean открылся недавно, и
                с первых месяцев работы концепция Сюзанны Каспарян
                подтверждает свою эффективность. Проект продолжает
                развиваться, ориентируясь на самую прогрессивную
              </p>

              <div className='fourth-table-boxes'>
                <div className='fourth-table-box'>
                  <span>Ультразвуковой</span>
                  <span>4000 лей</span>
                </div>

                <div className='fourth-table-box2 fourth-table-box'>
                  <span>Ультразвуковой</span>
                  <span>4000 лей</span>
                </div>

                <div className='fourth-table-box'>
                  <span>Ультразвуковой</span>
                  <span>4000 лей</span>
                </div>
              </div>
              <div className='btn-block'>
                <button className='btn procedure-btn'>Записаться онлайн</button>
              </div>
            </div>
          </div>
        </div>

        <div className='fifth-block'>
          <h3 className='title'>Новейшие <span>аппараты</span></h3>

          <div className='procedure-boxes'>
            <button className='procedure-box procedure-box1'>Morpheus 8</button>

            <button className='procedure-box'>Laser Candela</button>

            <button className='procedure-box'>Intraceuticals</button>

            <button className='procedure-box'>Icoone</button>

            <button className='procedure-box'>Hydrafacial</button>

            <button className='app-btn btn'>ᐳ</button>
          </div>

          <div className='app-inner-boxes'>
            <div className='app-inner-box app-inner-box1'>
              <img src={pic1} alt="Dr. Siuzanna Casparean"/>
            </div>

            <div className='app-inner-box'>
              <img src={pic2} alt="Dr. Siuzanna Casparean"/>
            </div>

            <div className='app-inner-box'>
              <img src={pic3} alt="Dr. Siuzanna Casparean"/>
            </div>

            <div className='app-inner-box'>
              <img src={pic4} alt="Dr. Siuzanna Casparean"/>
            </div>

            <div className='app-inner-box'>
              <img src={pic5} alt="Dr. Siuzanna Casparean"/>
            </div>
          </div>
        </div>

        <div className='sixth-block'>
          <div className='sixth-text-block'>
            <h3 className='title team-title'>Моя <span>команда</span></h3>
            <h4 className='siuzannaK'>Сюзанна Каспарян</h4>
            <span className='doc'>Врач-косметолог</span>
            <p className='doc-text'>
              АМедцентр Dr. Siuzanna Casparean открылся недавно, и
              с первых месяцев работы концепция Сюзанны Каспарян
              подтверждает свою эффективность. Проект продолжает
              развиваться, ориентируясь на самую прогрессивную
              аппаратуру мировых брендов.  АМедцентр Dr. Siuzanna
              Casparean открылся недавно, и с первых месяцев
            </p>
          </div>

          <div className="oval-container oval-container2">
            <div className="oval">
              <button className="oval-button oval-button-img"></button>
              <button className="oval-button"></button>
              <button className="oval-button"></button>
            </div>
          </div>

          <div className='sixth-img-block'>
            <img src={siuzanna} alt="Сюзанна Каспарян"/>
          </div>
        </div>

        <div className='seventh-block'>
          <h3 className='title'>Как нас <span>найти</span></h3>

          <div className='seventh-inner-boxes'>
            <div className='seventh-inner-img'><img src={map} alt="Карта"/></div>

            <div className='seventh-inner-box'>
              <p className='drsiuzanna-title'>Dr. Siuzanna Casparean</p>
              <p>Адрес: str. N.Dimo 21, Coliseum Palace</p>
              <p>Режим работы: 10:00 - 20:00</p>
              <p>Телефон: 068884443</p>

              <div className="main-second-links-block seventh-links-block">
                <a href="#" className="face">Facebook</a>
                <a href="#" className="insta insta1">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className='footer'>
        <div className='container footer-container'>
          <div>
            <a href="#" className="footer-logo">
              <img src={logo} alt="Dr. Siuzanna Casparean"/>
            </a>
          </div>

          <a href='#'>Политика конфеденциальности</a>

          <p>(+373) 68 884 443</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
