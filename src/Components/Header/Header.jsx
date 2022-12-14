import './Header.css';

function Header() {
  return (
    <div className="Header">
        <div className="Header_logo">C</div>
        <div className="Header_nav">
            <nav className='Header_nav_items'>
                <a className="Header_nav_item" href='#'>Activities</a>
                <a className="Header_nav_item" href='#'>Technology</a>
                <a className="Header_nav_item" href='#'>R&D</a>
                <a className="Header_nav_item" href='#'>Community</a>
            </nav>
            <button className="Header_nav_button">
                Career
                <div className="Header_nav_button_icon_container">
                    <svg className='Header_nav_button_icon' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5858 2L0.63604 11.9497C0.245516 12.3403 0.245516 12.9734 0.63604 13.364C1.02656 13.7545 1.65973 13.7545 2.05025 13.364L12 3.41421V9C12 9.55228 12.4477 10 13 10C13.5523 10 14 9.55228 14 9V2C14 0.89543 13.1046 0 12 0H5C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2H10.5858Z" fill="black"/>
                    </svg>
                    <svg className='Header_nav_button_icon Header_nav_button_icon-hidden' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5858 2L0.63604 11.9497C0.245516 12.3403 0.245516 12.9734 0.63604 13.364C1.02656 13.7545 1.65973 13.7545 2.05025 13.364L12 3.41421V9C12 9.55228 12.4477 10 13 10C13.5523 10 14 9.55228 14 9V2C14 0.89543 13.1046 0 12 0H5C4.44772 0 4 0.447715 4 1C4 1.55228 4.44772 2 5 2H10.5858Z" fill="black"/>
                    </svg>
                </div>
            </button>
        </div>
        <div className="Header_nav_mob" />
    </div>
  );
}

export default Header;
