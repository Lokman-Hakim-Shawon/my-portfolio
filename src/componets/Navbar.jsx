import { Link } from "react-router-dom";
import img1 from './../assets/images/professional pic.png'
import { FaLinkedin ,FaFacebookSquare  } from "react-icons/fa";

const Navbar = () => {
    const navlink=<>
        <Link to='/' className="hover:text-green-600 text-blue-500"><li>Home</li></Link>
        <Link to='/about' className="hover:text-green-600 text-blue-500"><li>About</li></Link>
        <Link to='/contact' className="hover:text-green-600 text-blue-500"><li>Contact</li></Link>
    </>
    return (
        <div>
          <div className="navbar bg-base-100 border-b-2 ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlink}
      </ul>
    </div>
    <div className="avatar ml-5">
  <div className=" w-12 md:w-16 lg:w-20 border border-2 rounded-full">
    <img src={img1} />
  </div>
</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-10 text-lg font-bold">
      {navlink}
    </ul>
  </div>
  <div className="navbar-end space-x-5 text-4xl text-blue-500 pl-5">
  <a href='https://www.facebook.com/profile.php?id=100064681125426'><FaFacebookSquare /></a>
  <a href='https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile'><FaLinkedin /></a>

  </div>
</div>
        </div>
    );
};

export default Navbar;