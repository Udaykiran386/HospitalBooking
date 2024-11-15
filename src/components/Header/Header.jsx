// import { useEffect,useRef } from 'react'
// import Logo from '../../assets/logo.png'
// import { NavLink,Link } from 'react-router-dom'
// import { BiMenu } from 'react-icons/bi'


// const navLinks =[
//   {
//     path:'/home',
//     display:'Home'
//   },
//   {
//     path:'/doctors',
//     display:'Find a Doctor'
//   },
//   {
//     path:'/services',
//     display:'Services'
//   },
//   {
//     path:'/contact',
//     display:'Contact'
//   },
  
// ]
// const Header = () => {
//     const headerRef = useRef(null)
//     const menuRef = useRef(null)

//     const handleStickyHeader = ()=>{
//       window.addEventListener('scroll',()=>{
//         if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
//           headerRef.current.classList.add('sticky_header')
//         }
//         else{
//           headerRef.current.classList.remove('sticky_header')
//         }
//       })
//     }

//     useEffect(()=>{
//       handleStickyHeader()

//       return ()=> window.removeEventListener("scroll",handleStickyHeader)
//     })

//     const toggleMenu = ()=>menuRef.current.classList.toggle('show_menu')


//   return (
//     <header className='header flex items-center ' ref={headerRef}>
//       <div className='container'>
//         <div className="flex items-center justify-between">
//           <div>
//             <img src={Logo} alt=""  />
//           </div>

//           <div className="navigation" ref={menuRef} onClick={toggleMenu}>
//             <ul className="menu flex items- gap-[2.7rem]">
//               {navLinks.map((link,index)=>(
//                 <li key={index}>
//                   <NavLink
//                     to={link.path}
//                     className={navClass =>
//                       navClass.isActive
//                       ? "text-primarycolor text-[18px] leading-7 font-[600]"
//                       : "text-textColor text-[16px] leading-7 font-[600] hover:text-primarycolor hover:text-[17px]"
//                     }
//                   >
//                     {link.display}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </div>
          

//           <div className='flex items-center gap-4'>
//               <div className='hidden'>
//                 <Link to='/'>
//                 <figure className='w-[35px] h-[35px] mb-[50px] rounded-full cursor-pointer'>
//                   <i class="fa fa-user " aria-hidden="true"></i>
//                 </figure>
//                 </Link>
//               </div>

//               <Link to='/login'>
//                 <button className='bg-primarycolor py-2 px-6 font-[600] text-white h-[44px] flex items-center justify-center rounded-[50px] hover:opacity-85'>Login</button>
//               </Link>

//               <span className='md:hidden' onClick={toggleMenu}>
//                 <BiMenu className='w-6 h-6 cursor-pointer'/>
//               </span>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header


import { useContext, useEffect, useRef, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { onAuthStateChanged, signOut } from 'firebase/auth'; // Import Firebase functions
import { auth } from '../../pages/FireBase'; // Import your Firebase setup
import Logo from '../../assets/logo.png';
import { AuthContext } from '../../Context/AuthContext';

const navLinks = [
  {
    path: '/home',
    display: 'Home'
  },
  {
    path: '/doctors',
    display: 'Find a Doctor'
  },
  {
    path: '/services',
    display: 'Services'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const {user,token,role} = useContext(AuthContext)
  // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

  useEffect(() => {
    // Listen for authentication changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true); // User is logged in
      } else {
        setIsLoggedIn(false); // User is logged out
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    // Show confirmation dialog
    const confirmLogout = window.confirm('Are you sure want to logout?');
    
    if (confirmLogout) {
      try {
        await signOut(auth);
        setIsLoggedIn(false);
        navigate('/'); // Redirect to home after logout
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  };

  return (
    <header className="header flex items-center " ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <img src={Logo} alt="" />
          </div>

          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items- gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? 'text-primarycolor text-[18px] leading-7 font-[600]'
                        : 'text-textColor text-[16px] leading-7 font-[600] hover:text-primarycolor hover:text-[17px]'
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-4">

          {
            token && user ? <div>
            <Link to={`{role==='doctor' ? '/doctors/profile/me':'/users/profile/me'}`}>
              <figure className="w-[35px] h-[35px] mb-[50px] rounded-full cursor-pointer">
                <img src={user?.photo} className='w-full rounded-full' alt="" />
              </figure>
              <h2>{user?.name}</h2>
            </Link>
          </div> : <Link to="/login">
              <button className="bg-primarycolor py-2 px-6 font-[600] text-white h-[44px] flex items-center justify-center rounded-[50px] hover:opacity-85">
                Login
              </button>
            </Link>
          }
            

            
            

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
