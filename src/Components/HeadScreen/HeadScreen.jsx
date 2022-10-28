import './HeadScreen.css';

import img from '../../Img/Img_HeadScreen.png'

function HeadScreen() {
  return (
    <div className="HeadScreen">
        <div className="HeadScreen_content">
            <div className="HeadScreen_info">
                <div className="HeadScreen_subtitle">crypto trading</div>
                <div className="HeadScreen_title">
                    Engineers Meet<br/>
                    <span className='HeadScreen_title_style'>Traders __</span>
                </div>
                <div className="HeadScreen_des">Advanced crypto algorithmic trading and efficient cross-chain execution, at scale.</div>
            </div>
            <div className="HeadScreen_img_container">
                <img className='HeadScreen_img' src={img} alt="" />
            </div>
        </div>
        
        <div className="HeadScreen_button_container">
            <button className="HeadScreen_button">
                Learn More
                <svg className="HeadScreen_button_icon" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17" cy="17" r="17" fill="white"/>
                    <path d="M22.25 15.75L16.75 21.25L11.25 15.75" stroke="#1556EE" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    </div>
  );
}

export default HeadScreen;
