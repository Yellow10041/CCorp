import './App.css';

import Header from '../Header/Header'
import HeadScreen from '../HeadScreen/HeadScreen';
import Scroll from '../Scroll/Scroll';
import AboutUs from '../AboutUs/AboutUs';
import BG from '../BG/BG';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function App() {
  return (
    <div className="App">
      <div className="App_container">
        <div data-aos="fade-in"><Header /></div>
        <div data-aos="fade-in"><HeadScreen /></div>
        <div data-aos="fade-in"><Scroll /></div>
        <div data-aos="fade-in"><AboutUs /></div>
        <div className="App_bg" data-aos="fade-in">
          <BG />
        </div>
      </div>
    </div>
  );
}

export default App;
