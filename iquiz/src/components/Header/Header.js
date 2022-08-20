import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="main-nav-menu">
                <span className="menu-item"> <Link to="/">Home</Link> </span> 
                <span className="menu-item"> <Link to="/login">Login</Link> </span> 
                <span className="menu-item"> <Link to="/register">Register</Link> </span> 
                <span className="menu-item"> <Link to="/create">Create</Link> </span> 
            </div>
        </nav>
    )
}

export default Header;