import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <header className="header">
                <div >
                    <a className="collegename" href="/home">Vivekanand College</a>
                </div>
                <nav className="navbar desktop-nav">
                    <a className="nav-item" href="/home">Home</a>
                    <a className='nav-item' href="/about">About</a>
                    <a className="nav-item" href="/courses">Courses</a>
                    <a className="nav-item" href="/contact">Contact</a>
                    <a className="nav-item btn pm-btn" href="/applynow">Apply Now!</a>
                
                </nav>

                <button className='hamburger-menu'>
                    <span className='hamburger-icon'></span>
                    <span className='hamburger-icon'></span>
                    <span className='hamburger-icon'></span>
                </button>
                <nav className='drawer-nav'>
                    <button className='close-drawer-btn'>X</button>
                    <a className='nav-item' href="/home" >Home</a>
                    <a className='nav-item' href="/about">About</a>
                    <a className='nav-item' href="/courses">Courses</a>
                    <a className='nav-item' href="/contact">Contact</a>
                    <a className='nav-item btn pm-btn' href="/ApplyNow">Apply Now!</a>
                </nav>
                
            </header>
        </div>
    )
}
export default Header;