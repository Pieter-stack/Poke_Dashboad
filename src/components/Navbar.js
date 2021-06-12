import {Link} from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <nav className='navbar'>
                <div className='logo'><img src="/assets/pokemon_logo.png" alt="logo" width="100" height="60"></img></div>
                <Link to="/"> <div style={{height:'70px',textAlign:'center', width:'80px', float:'left', backgroundColor:'white',marginLeft:'20px',marginTop:'50px',borderRadius:'10px'}}>Home</div></Link>
                <Link to="/compare">  <div style={{height:'70px',textAlign:'center', width:'80px', float:'left', backgroundColor:'white',marginLeft:'-80px',marginTop:'150px',borderRadius:'10px'}}>Compare</div></Link>
            </nav>   
        </div>
    );
};

export default Navbar;