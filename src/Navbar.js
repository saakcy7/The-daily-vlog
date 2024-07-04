const Navbar = () => {
    return (  
        <>
        <div className="header-container">
        <nav className="navbar">
           <h1>The Daily Blog</h1>
           <div className="links">
            <a href="/">Home</a>
            <a href="/create">New Blog</a>
            </div> 
        </nav>
        </div>
        </>
    );
}
 
export default Navbar;