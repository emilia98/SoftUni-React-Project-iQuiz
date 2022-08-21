import './Header.css';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    let { user } = useAuthContext();
    return (
        <nav>
            <div className="main-nav-menu">
                <div className="main-links">
                    <span className="menu-item"> <Link to="/">Home</Link> </span>
                    {user.username ? <span className="menu-item"> <Link to="/create">Create</Link> </span> : null}
                </div>
                {user.username ?
                    null :
                    <div className="auth-links">
                        <span className="menu-item"> <Link to="/login">Login</Link> </span>
                        <span className="menu-item"> <Link to="/register">Register</Link> </span>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Header;