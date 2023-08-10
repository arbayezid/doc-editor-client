import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar  z-10 bg-opacity-30 max-w-screen-xl  bg-green-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className=" text-white  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-100 rounded-box w-52">
            <li><Link><small>Home</small></Link></li>
            <li><Link><small>Template</small></Link></li>
            <li><Link><small>Pricing</small></Link></li>
            <li>
             
              <a><smal>Convert</smal></a>
              <ul className="p-2">
                <li><a><small>Text to pdf</small></a></li>
                <li><a><small>Word to pdf</small></a></li>
                <li><a><small>Docs to pdf</small></a></li>
              </ul>
            </li>
            
          </ul>
          
        </div>
        <a className="btn btn-ghost normal-case text-sm text-white">Likho</a>
      </div>
      <div className="navbar-center hidden lg:flex  text-white ">

        <ul className="menu menu-horizontal px-1">

        <li><Link><small>Home</small></Link></li>
          <li> <Link><small>Template</small></Link></li>
          <li><Link><small>Pricing</small></Link></li>
          <li tabIndex={0} className="w-52">
            <details>
              <summary><small>Convert</small></summary>
              <ul className="p-2  text-white bg-green-200">
              <li><a><small>Text to pdf</small></a></li>
                <li><a><small>Word to pdf</small></a></li>
                <li><a><small>Docs to pdf</small></a></li>
              </ul>
            </details>
          </li>
          <li><Link><small>About</small></Link></li>
        </ul>
        
      </div>
      <div className="navbar-end  text-white">
        <Link className="btn btn-xs capitalize btn-outline  text-white"><small>Get Started</small></Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/V2RBzLh/ana1.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-200 rounded-box w-52">
            <li>
              <a className="justify-between">
                <small> Profile</small>
                <span className="badge bg-green-200  text-white"><small>New</small></span>
              </a>
            </li>
            <li><a><small>Settings</small></a></li>
            <li><a><small>Logout</small></a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;