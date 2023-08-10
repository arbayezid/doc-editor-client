import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar  z-10 bg-opacity-30 max-w-screen-xl  bg-violet-400 font-bold ">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="  menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
            <li><Link>Home</Link></li>
            <li><Link>Template</Link></li>
            
            <li>
             
              <a>Convert</a>
              <ul className="p-2">
                <li><a>Text to pdf</a></li>
                <li><a>Word to pdf</a></li>
                <li><a>Docs to pdf</a></li>
              </ul>
            </li>
            <li><Link>Pricing</Link></li>
          <li><Link>About</Link></li>
            
          </ul>
          
        </div>
        <a className="btn btn-ghost normal-case text-xl">Likho</a>
      </div>
      <div className="navbar-center hidden lg:flex ">

        <ul className="menu menu-horizontal px-1">

        <li><Link>Home</Link></li>
          <li> <Link>Template</Link></li>
          <li tabIndex={0} >
            <details>
              <summary>Convert</summary>
              <ul className="p-2 bg-base-300 w-32">
              <li><a>Text to pdf</a></li>
                <li><a>Word to pdf</a></li>
                <li><a>Docs to pdf</a></li>
              </ul>
            </details>
          </li>
          <li><Link>Pricing</Link></li>
          <li><Link>About</Link></li>
        </ul>
        
      </div>
      <div className="navbar-end ">
        <Link className="btn btn-xs capitalize btn-outline ">Get Started</Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://i.ibb.co/V2RBzLh/ana1.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-base-300 ">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;