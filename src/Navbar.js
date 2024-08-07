import {Link} from 'react-router-dom';
const Navbar = () => {
    return (  
        <>
        <div className="header-container">
        <nav className="navbar">
           <h1>The Daily Blog</h1>
           <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
            </div> 
        </nav>
        </div>
        </>
    );
}
 
export default Navbar;