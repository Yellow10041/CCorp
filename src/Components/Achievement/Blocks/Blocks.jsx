import './Blocks.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Blocks() {
  return (
    <div className="Blocks">
      <div className="Blocks_item Blocks_item_1" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
        <div className='Blocks_item_1_img' />
        <div className="Blocks_item_info">
          <div className="Blocks_item_subtitle">Spot & Margin</div>
          <div className="Blocks_item_title Blocks_item_1_title">
            Trade <span className='Blocks_item_title_fade'>200+</span><br />
            pairs with up<br />
            to 10x leverage
          </div>
        </div>
        <a href='#' className="Blocks_item_link">Learn more</a>
      </div>
      <div className="Blocks_item Blocks_item_2" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div className="Blocks_item_info">
          <div className="Blocks_item_subtitle">Derivatives</div>
          <div className="Blocks_item_title Blocks_item_title_small"><span className='Blocks_item_title_bold'>40+</span> quarterly futures and contracts</div>
        </div>
        <a href='#' className="Blocks_item_link">Learn more</a>
      </div>
      <div className="Blocks_item Blocks_item_3" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div className="Blocks_item_info">
          <div className="Blocks_item_subtitle">Trading Arena</div>
          <div className="Blocks_item_title Blocks_item_title_small">
            Prize pools<br />
            worth up to<br />
            <span className='Blocks_item_title_bold'>USD 1,000,000</span>
          </div>
        </div>
        <a href='#' className="Blocks_item_link">Learn more</a>
      </div>
      <div className="Blocks_item Blocks_item_4" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
      <div className="Blocks_item_info">
        <div className='Blocks_item_2_img' />
        <div className="Blocks_item_subtitle">mobile app</div>
        <div className="Blocks_item_title Blocks_item_title_small">
          Trade anytime,<br />
          <span className='Blocks_item_title_bold'>anywhere</span>
        </div>
        </div>
        <a href='#' className="Blocks_item_link">Learn more</a>
      </div>
    </div>
  );
}

export default Blocks;
