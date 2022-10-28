import './AboutUs.css';

import Technologies from '../Achievement/Technologies/Technologies';
import Platform from '../Achievement/Platform/Platform';
import Blocks from '../Achievement/Blocks/Blocks';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function AboutUs() {
  return (
    <div className="AboutUs">
        <div className="AboutUs_title">about us</div>
        <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out"><Technologies /></div>
        <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out"><Platform /></div>
        <div data-aos="fade-up-left" data-aos-duration="1000" data-aos-easing="ease-in-out"><Blocks /></div>
    </div>
  );
}

export default AboutUs;
