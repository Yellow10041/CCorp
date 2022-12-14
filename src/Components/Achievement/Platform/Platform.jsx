import './Platform.css';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Platform() {
  return (
    <div className="Platform">
      <div className="Platform_scheme">
        <div className="Platform_scheme_glass Platform_scheme_one" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="Platform_scheme_item Platform_scheme_item-one_1 Platform_scheme_item-one">Artificial Intelligence</div>
          <div className="Platform_scheme_item Platform_scheme_item-one_2 Platform_scheme_item-one-center">Storage Networks</div>
          <div className="Platform_scheme_item Platform_scheme_item-one_3 Platform_scheme_item-one">P2P Networks</div>
        </div>
        <div className="Platform_scheme_connect" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="Platform_scheme_item Platform_scheme_item-con">Public Data</div>
          <div className="Platform_scheme_item Platform_scheme_item-con">Encrypted Private Data *</div>
        </div>
        <div className="Platform_scheme_glass Platform_scheme_two" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
          <div className="Platform_scheme_two_info">
            <svg className="Platform_scheme_icon" width="65" height="68" viewBox="0 0 65 68" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_2_155)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M25.5192 26.9124L18.9296 30.692V43.5351L23.2183 45.9849L26.9735 43.8151C27.2923 44.0251 27.7175 44.0251 28.0718 43.8484C28.6032 43.5334 28.8158 42.8683 28.4969 42.3437C28.3461 42.0939 28.1038 41.911 27.8202 41.8328C27.5366 41.7546 27.2335 41.7871 26.9735 41.9236C26.6192 42.1336 26.4066 42.5187 26.442 42.9034L23.2183 44.7248L20.5611 43.22L26.6192 39.7555L27.6821 40.3855L29.2764 41.2953L30.3393 41.8903L41.0383 35.8013C41.3572 36.0113 41.7823 36.0113 42.1721 35.8013C42.7035 35.5212 42.8806 34.8562 42.5618 34.3315C42.4109 34.0817 42.1686 33.8989 41.885 33.8207C41.6014 33.7425 41.2983 33.775 41.0383 33.9115C40.684 34.1215 40.5069 34.5062 40.5069 34.8912L32.2167 39.5805L30.3379 40.6656L27.9642 39.3008L23.5712 36.781V33.9475L30.1608 37.7267L30.8694 37.342L41.6035 31.2173V30.7976L41.4263 26.5974L37.6708 24.4639C37.6708 24.2542 37.6 24.0792 37.5291 23.9042C37.4205 23.7139 37.2572 23.5596 37.0598 23.461C36.8625 23.3623 36.64 23.3237 36.4204 23.35C36.2008 23.3763 35.9941 23.4664 35.8263 23.6087C35.6586 23.7511 35.5373 23.9395 35.4779 24.1499C35.4185 24.3604 35.4235 24.5835 35.4925 24.7912C35.5615 24.9988 35.6912 25.1815 35.8653 25.3163C36.0394 25.4511 36.25 25.5318 36.4706 25.5483C36.6911 25.5648 36.9116 25.5163 37.1043 25.409V25.3756L40.3635 27.2304L40.4697 30.1699L34.2699 26.6364V22.5381L23.6063 16.4498C23.6063 16.2398 23.5355 16.0648 23.4292 15.8901C23.1458 15.3651 22.4726 15.19 21.9411 15.4701C21.6828 15.6139 21.4929 15.8533 21.4132 16.1356C21.3335 16.4178 21.3705 16.7197 21.5162 16.975C21.6618 17.2302 21.9041 17.4179 22.1898 17.4966C22.4755 17.5753 22.7811 17.5387 23.0395 17.3948V17.3615L29.6999 21.1757L33.206 23.1678V30.692L30.9031 32.0217V24.4626L27.3959 22.4681L20.7355 18.6886L19.6372 18.0585L15.3519 20.5084V24.7776L15.3182 24.8109C14.8222 25.091 14.6096 25.756 14.9285 26.2807C15.0794 26.5305 15.3217 26.7134 15.6052 26.7915C15.8888 26.8697 16.192 26.8372 16.452 26.7007C16.5782 26.6278 16.6886 26.5309 16.7766 26.4156C16.8647 26.3002 16.9287 26.1687 16.965 26.0288C17.0012 25.8888 17.009 25.7431 16.9878 25.6002C16.9666 25.4572 16.917 25.3198 16.8417 25.196C16.7376 25.0232 16.5914 24.8788 16.4165 24.7759V21.1381L18.9317 19.7046V26.5987L18.1522 27.0537L16.4165 28.0335L15.3536 28.6635V40.8419H15.3199C14.8239 41.1566 14.6113 41.8216 14.9302 42.3467C15.004 42.4714 15.1021 42.5804 15.2189 42.6674C15.3357 42.7544 15.4688 42.8177 15.6105 42.8534C15.7523 42.8892 15.8997 42.8969 16.0445 42.8759C16.1892 42.8549 16.3283 42.8058 16.4536 42.7313C16.9847 42.4517 17.1622 41.7866 16.8433 41.2616C16.7393 41.0889 16.5931 40.9446 16.4182 40.8419V29.2572L23.0432 25.5127L25.5192 26.9124ZM19.9925 31.3217L26.0506 27.8571V30.6906L22.4739 32.7201V37.411L25.5205 39.1258L19.9939 42.2753L19.9925 31.3217ZM29.8062 32.1967L27.1489 30.692V26.6324L23.0395 24.2529L19.9925 26.0027V19.4933L29.8062 25.0936V32.1967ZM24.102 33.0364L26.6175 31.603L30.1605 33.6678L34.2699 31.323V27.8571L39.9724 31.0767L30.1605 36.501L24.102 33.0364Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_2_155" x="0.355215" y="0.915335" width="63.9987" height="66.7029" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="3.60556" dy="3.60556"/>
            <feGaussianBlur stdDeviation="9.01391"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.56 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_155"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_155" result="shape"/>
            </filter>
            </defs>
            </svg>
            <div className="Platform_scheme_text">Easy to use digital service and exclusive personal service for our active traders</div>
          </div>
          <div className="Platform_scheme_items_two">
            <div className="Platform_scheme_item Platform_scheme_item-two">Indexing</div>
            <div className="Platform_scheme_item Platform_scheme_item-two">API</div>
          </div>
          <svg className="Platform_scheme_con_icon" width="38" height="93" viewBox="0 0 38 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M37.4672 8.89542L32.3681 3.79638L27.2691 8.89542" stroke="#B1B2BA" stroke-width="1.35209"/>
            <line opacity="0.8" x1="6.36918" y1="83.1189" x2="6.36917" y2="0.190926" stroke="url(#paint0_linear_0_1)" stroke-width="1.80278"/>
            <line opacity="0.8" x1="32.5095" y1="92.1328" x2="32.5095" y2="9.20484" stroke="url(#paint1_linear_0_1)" stroke-width="1.80278"/>
            <path d="M1.05585 83.7108L6.15488 88.8099L11.2539 83.7108" stroke="#B1B2BA" stroke-width="1.35209"/>
            <defs>
            <linearGradient id="paint0_linear_0_1" x1="7.27057" y1="83.1189" x2="7.27057" y2="-1.67262" gradientUnits="userSpaceOnUse">
            <stop stop-color="#F1F1F1"/>
            <stop offset="1" stop-color="white" stop-opacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear_0_1" x1="33.4109" y1="92.1328" x2="33.4109" y2="7.34129" gradientUnits="userSpaceOnUse">
            <stop stop-color="white" stop-opacity="0"/>
            <stop offset="1" stop-color="#FAFAFA"/>
            </linearGradient>
            </defs>
          </svg>
          <svg className="Platform_scheme_con_icon Platform_scheme_con_icon_mob" width="42" height="62" viewBox="0 0 42 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<line opacity="0.8" x1="7" y1="54.0016" x2="7" y2="2.00159" stroke="url(#paint0_linear_2_678)" stroke-width="2"/>
<path d="M1 54.6583L6.65685 60.3152L12.3137 54.6583" stroke="#B1B2BA" stroke-width="1.5"/>
<path d="M41.3945 7.65686L35.7377 2.00001L30.0808 7.65686" stroke="#B1B2BA" stroke-width="1.5"/>
<line opacity="0.8" x1="36" y1="60.0001" x2="36" y2="8.00012" stroke="url(#paint1_linear_2_678)" stroke-width="2"/>
<defs>
<linearGradient id="paint0_linear_2_678" x1="8" y1="54.0016" x2="8" y2="0.833048" gradientUnits="userSpaceOnUse">
<stop stop-color="#F1F1F1"/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</linearGradient>
<linearGradient id="paint1_linear_2_678" x1="37" y1="60.0001" x2="37" y2="6.83158" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#FAFAFA"/>
</linearGradient>
</defs>
          </svg>


        </div>
      </div>
      <div className="Platform_info">
        <div className="Platform_info_title" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">
          The future <span className='Platform_info_title_style-gray'>of</span> Cryptocurrency trading <span className='Platform_info_title_style-fade'>platform</span>
        </div>
        <div className="Platform_info_des" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out">Take advantage of time and sales, futures spread orders and depth trader ??? plus, trade directly from charts.</div>
        <div className="Platform_info_link_container" data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out"><a className="Platform_info_link" href='#'  >Learn more</a></div>
      </div>
    </div>
  );
}

export default Platform;
