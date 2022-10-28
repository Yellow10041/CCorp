import './Technologies.css';

import Line from './Line/Line';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Technologies() {
  return (
    <div className="Technologies">
        <div className="Technologies_title">Global technologies</div>
        <div className="Technologies_content">
          <div className="Technologies_graphics" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="Technologies_graphics_line_ver"></div>
            <div className="Technologies_graphics_data">
              <div className="Technologies_graphics_lines">
                <Line width={20} color={"#2B40BF"} shadow={"#2A07FE"} />
                <Line width={50} color={"#0C62EE"} shadow={"#2A07FE"} />
                <Line width={90} color={"#09A2FE"} shadow={"#2A07FE"} />
              </div>
              <div className="Technologies_graphics_line_hor"></div>
              <div className="Technologies_graphics_lines">
                <Line width={90} color={"#44FACE"} shadow={"#07FEE0"} />
                <Line width={40} color={"#00FFA3"} shadow={"#07FEE0"} />
                <Line width={15} color={"#00CF6C"} shadow={"#07FEE0"} />
              </div>
            </div>

            <div className="Technologies_graphics_scale">
                <div className="Technologies_graphics_scale_item">
                  10
                </div>
                <div className="Technologies_graphics_scale_item">
                  <svg className='Technologies_graphics_scale_item_line' width="4" height="456" viewBox="0 0 4 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2.00854V454.009" stroke="url(#paint0_linear_2_100)" stroke-opacity="0.4" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 10"/>
                    <defs>
                      <linearGradient id="paint0_linear_2_100" x1="2.5" y1="2.00854" x2="2.5" y2="454.009" gradientUnits="userSpaceOnUse">
                      <stop offset="0.0260417" stop-color="#0B0B0F"/>
                      <stop offset="0.505208" stop-color="#2163FF"/>
                      <stop offset="1" stop-color="#0B0A13"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  20
                </div>
                <div className="Technologies_graphics_scale_item">
                  <svg className='Technologies_graphics_scale_item_line' width="4" height="456" viewBox="0 0 4 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2.00854V454.009" stroke="url(#paint0_linear_2_100)" stroke-opacity="0.4" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 10"/>
                    <defs>
                      <linearGradient id="paint0_linear_2_100" x1="2.5" y1="2.00854" x2="2.5" y2="454.009" gradientUnits="userSpaceOnUse">
                      <stop offset="0.0260417" stop-color="#0B0B0F"/>
                      <stop offset="0.505208" stop-color="#2163FF"/>
                      <stop offset="1" stop-color="#0B0A13"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  30
                </div>
                <div className="Technologies_graphics_scale_item">
                  <svg className='Technologies_graphics_scale_item_line' width="4" height="456" viewBox="0 0 4 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2.00854V454.009" stroke="url(#paint0_linear_2_100)" stroke-opacity="0.4" stroke-width="3" stroke-linecap="round" stroke-dasharray="10 10"/>
                    <defs>
                      <linearGradient id="paint0_linear_2_100" x1="2.5" y1="2.00854" x2="2.5" y2="454.009" gradientUnits="userSpaceOnUse">
                      <stop offset="0.0260417" stop-color="#0B0B0F"/>
                      <stop offset="0.505208" stop-color="#2163FF"/>
                      <stop offset="1" stop-color="#0B0A13"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  40
                </div>
            </div>

          </div>
          <div className="Technologies_info" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
            <div className="Technologies_info_title">Level 1</div>
            <div className="Technologies_info_items">
              <div className="Technologies_info_item">
                <svg className='Technologies_info_item_icon' width="36" height="43" viewBox="0 0 36 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_2_123)">
                  <path d="M23.0728 18.2695C23.5546 17.8696 23.5546 17.1304 23.0728 16.7305L13.6386 8.90068C12.9869 8.35982 12 8.82329 12 9.67019L12 25.3298C12 26.1767 12.987 26.6402 13.6386 26.0993L23.0728 18.2695Z" fill="#0A6FFF"/>
                  </g>
                  <defs>
                  <filter id="filter0_d_2_123" x="0" y="0.668335" width="35.4342" height="41.6633" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="6"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.027451 0 0 0 0 0.996078 0 0 0 0.7 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_123"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_123" result="shape"/>
                  </filter>
                  </defs>
                </svg>
                <div className="Technologies_info_item_text">
                  Deploy a multi-legged futures strategy by simultaneously placing orders to buy and sell from the same order ticket.
                </div>
              </div>
              <div className="Technologies_info_item">
                <svg className='Technologies_info_item_icon' width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_2_124)">
                <path d="M23.7422 18.2623C24.2125 17.8629 24.2125 17.1371 23.7422 16.7377L14.5572 8.93928C13.9076 8.38774 12.91 8.84942 12.91 9.70157L12.91 25.2984C12.91 26.1506 13.9076 26.6123 14.5572 26.0607L23.7422 18.2623Z" fill="#FF2B77"/>
                </g>
                <defs>
                <filter id="filter0_d_2_124" x="0.910004" y="0.699646" width="35.185" height="41.6007" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="6"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.168627 0 0 0 0 0.466667 0 0 0 0.7 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_124"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_124" result="shape"/>
                </filter>
                </defs>
                </svg>
                <div className="Technologies_info_item_text">
                  Place and manage orders based on the Level 2 order book, which provides a live display of all bids and offers waiting to be executed.
                </div>
              </div>
            </div>
            <div className="Technologies_info_button">Start Now</div>
          </div>
        </div>
    </div>
  );
}

export default Technologies;
